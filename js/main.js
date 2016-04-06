(function LifeTimeLineGlobal() {
  // set an age
  var age = 30;
  
  // show age to user so they feel reassured
  $('#age').empty();
  $('#age').text(age);
  
  // know how many decades, for the legend and thumbnails containers
  var num_of_decades = Math.ceil(age / 10);
  
  var legend_decade_li_html = '<li class="legend-decade-list-item"><ol></ol></li>';
  var thumbnail_decade_li_html = '<li class="thumbnail-decade-list-item"><ol></ol></li>';
  
  
  var $legend_container = $('#legend-container ol.legend');
  var $thumbnails_container = $('#thumbnails-container ol.thumbnails');
  var $descriptions_container = $('#descriptions-container ol.descriptions');
  
  // object to hold major functions
  var LifeTimeLine = {};
  
  // object to hold data from json
  var LifeTimeEventsData = {};
    
  LifeTimeLine.add_the_legend_list_items_and_pagination = function(age, callback) {

    // if the age is not on the decade
    var age_decade_remainder = age % 10;
    
    // set it to the next 100th and then a percentage for css
    var legend_and_thumbnail_container_width = Math.ceil((age*10)/100)*100;
    var legend_decade_li_width = (100 / (legend_and_thumbnail_container_width / 100));
    
    // set the width of the legend container dynamically cuz you never know what my age really is right
    $legend_container.css("width", legend_and_thumbnail_container_width + "%");
    $thumbnails_container.css("width", legend_and_thumbnail_container_width + "%");


    // function for legend decade list items
    function add_decade_list_items(decades, container, html, callback) {
      for (d = 0; d < decades; d++) {
        container.append(html);
      }
      callback(add_appropriate_count_to_age);
    }
    // function for thumbnail decade list items
    function add_decade_list_items_thumbnails(decades, container, html, callback) {
      for (d = 0; d < decades; d++) {
        container.append(html);
      }
      callback(add_decade_child_list_items_thumbnails);
    }
      
    function add_decade_child_list_items_thumbnails() {
      var $thumbnail_decade_li = $thumbnails_container.find('li.thumbnail-decade-list-item');
      $thumbnail_decade_li.css("width", legend_decade_li_width+"%");
    }
      
      
    function add_decade_child_list_items(callback) {
      // this stuff should probably be moved to a callback regarding css i guess
      var $legend_decade_li = $legend_container.find('li.legend-decade-list-item');
      // set width dynamically on decade lis
      $legend_decade_li.css("width", legend_decade_li_width+"%");
      
      $.each($legend_decade_li, function() {
        for(dime = 0; dime < 10; dime++) {
          $(this).find('ol').append('<li data-legend-age=""><span class="age"></span></li>');
        }
      });
      
      // fix the last decade for the non-on-the-decade ages
      if(age_decade_remainder !== 0) {
        $legend_container.find('> li:last-child > ol').empty();
        for (remainder = 0; remainder < age_decade_remainder; remainder++) {
          $legend_container.find('> li:last-child > ol').append('<li data-legend-age=""><span class="age"></span></li>');
        }
      }
      
      // compensate for birth
      $legend_container.find('> li:first-child ol').prepend('<li data-legend-age=""><span class="age"></span></li>');
      
      // pagination function
      function add_pagination_for_the_decades() {
        var current_decade = 0;
        var $prev = $('a.prev');
        var $next = $('a.next');

        function showPreviousButton() {
          $('a.prev').addClass('show');
        }
        
        if(age <= 10) {
          $next.hide();
        }
          
        // next click event
        $next.on('click', function(e) {
          e.preventDefault();
          // animate the container
          $legend_container.animate({
              marginLeft: '-=100%',
              queue: false
          }, 400, showPreviousButton);
          // animate the container
          $thumbnails_container.animate({
              marginLeft: '-=100%',
              queue: false
          }, 400, showPreviousButton);
          
          // increment the current decade count
          current_decade = current_decade +1;
          $('#current-decade-min').text(current_decade);
          $('#current-decade-max').text((current_decade + 1));
          
          // ensure it's still showing
          $prev.css('display', 'inline-block');
          
          // when it's the end hide the next button
          if(current_decade === (num_of_decades - 1)) {
              $(this).hide();
          }
        });

        // previous click event
        $prev.on('click', function(e) {
          e.preventDefault();
          
          // animate it back to 0
          $legend_container.animate({
              marginLeft: '+=100%',
              queue: false
          }, 400);
          // animate it back to 0
          $thumbnails_container.animate({
              marginLeft: '+=100%',
              queue: false
          }, 400);
          
          // reset the next
          current_decade = current_decade -1;
          $('#current-decade-min').text(current_decade);
          $('#current-decade-max').text((current_decade + 1));
          
          // ensure it's still showing
          $next.css('display', 'inline-block');
          
          // if it's all the way back hide prev
          if(current_decade === 0) {
              $(this).hide();
          }
        });
      }
      
      // init the pagination
      add_pagination_for_the_decades();
      
      // when all thats over now add the right info places
      callback();
    } // add_decade_child_list_items
      
    function add_appropriate_count_to_age() {
      var $age_container = $legend_container.find('span.age');
      var count = 0;
      //console.log(count);
      $.each($age_container, function() {
        $(this).parent('li').attr('data-legend-age', count);
        $(this).html(count);
        count++;
      });
    }
      
    add_decade_list_items(
      num_of_decades,
      $legend_container,
      legend_decade_li_html,
      add_decade_child_list_items
    );
    add_decade_list_items_thumbnails(
      num_of_decades,
      $thumbnails_container,
      thumbnail_decade_li_html,
      add_decade_child_list_items_thumbnails
    );
    
    // get the json object and populate lifetimeline events
    callback(LifeTimeLine.next_step);
  };
  

  
  var demo = function(callback) {
    
    $.getJSON('data/lifetime-events.json', function (data) {
      
      // a junior constructor, if you will
      // recreate the data here
      var all_life_events = [];
      // loop over json data and push it to the empty array
      $.each(data.lifetime_events, function(key, val) {
        
        var life_event = {};
        
        if(typeof val === "object") {
          life_event.age = val.age;
          life_event.location = val.location;
          life_event.thumbnail = val.thumbnail;
          life_event.additional_events = val.additional_events;
          life_event.gallery = val.gallery;
          life_event.description = val.description;
          life_event.status = val.status;
        }
        // push it all
        all_life_events.push(life_event);
      });
      
      LifeTimeEventsData.lifetime_events = all_life_events;
      
      // do the thumbnails and descriptions separate
      callback(LifeTimeEventsData);
      
    });
    
  };



  LifeTimeLine.next_step = function(data) {
    //console.log(data);
    //console.log('what up');
    
    var decade_to_append_to = 0;
    // populate the pins per lifetime event
    $.each(data, function(key, val) {
      //console.log(val);
      if(typeof val !== 'object') return false;
      
      $.each(val, function(k, v) {
        // required to make this all work alright
        // age and location are required in the object
        if(v.age === 'undefined') return false;

        var age_html = '<a class="pin" href="#"><span class="screen-reader-text">lifetime event</span></a>';
        var $age_container = $('span.age').parent('li[data-legend-age="'+v.age+'"]');
        var description_html = '<li data-legend-age="'+v.age+'">';
        description_html += '<p class="age">Age: '+v.age+'</p>';
        description_html += '</li>';
                
        // deal with thumbnails
        if(typeof v.thumbnail !== 'undefined') {
          //console.log(v.thumbnail);
          if(v.age > 10) {
            decade_to_append_to = Math.floor(v.age / 10);
          }
          var thumbnail_html = '<li class="thumb" data-legend-age="'+v.age+'">';
          thumbnail_html += '<a href="#">';
          thumbnail_html += '<img src="'+v.thumbnail+'" alt="Thumbnail Image for Age: '+v.age+'" />';
          thumbnail_html += '</a>';
          thumbnail_html += '</li>';
          //console.log(decade_to_append_to);
          $thumbnails_container.find('> li').eq(decade_to_append_to).find('> ol').append(thumbnail_html);
        }
        
        // append the html
        $age_container.append(age_html);
        $descriptions_container.append(description_html);
        
      });
    });

    // when that's done, callback
    LifeTimeLine.populate_the_rest_of_the_data(data);
    
  };
  
  LifeTimeLine.populate_the_rest_of_the_data = function(data) {
    // populate the rest of the data
    
    var additional_eventsies = {};
    var galleriez = {};
    
    $.each(data, function(key, val) {
      if(typeof val !== 'object') return false;
      $.each(val, function(k, v) {
        // deal with status
        if(typeof v.location !== 'undefined') {
          //console.log(v.status);
          $descriptions_container.find('li[data-legend-age="'+v.age+'"]').append('<p class="location">'+v.location+'</p>');
        }
        // deal with status
        if(typeof v.status !== 'undefined') {
          //console.log(v.status);
          $descriptions_container.find('li[data-legend-age="'+v.age+'"]').append('<p class="status">'+v.status+'</p>');
        }
        // deal with description
        if(typeof v.description !== 'undefined') {
          //console.log(v.description);
          $descriptions_container.find('li[data-legend-age="'+v.age+'"]').append('<p class="description">'+v.description+'</p>');
        }
        // deal with description
        if(typeof v.additional_events !== 'undefined') {
          //console.log(v.additional_events);
          var single_event = [];
          if($.isArray(v.additional_events)) {
            $.each(v.additional_events, function(k, v) {
              single_event.push(v);
            });
            $descriptions_container.find('li[data-legend-age="'+v.age+'"]').append('<ul class="additional-events"></ul>');
          }
          //console.log(single_event);
          additional_eventsies[v.age] = single_event;
        }
        // deal with gallery
        if(typeof v.gallery !== 'undefined') {
          var single_gallery = [];
          if($.isArray(v.gallery)) {
            $.each(v.gallery, function(k, v) {
              single_gallery.push(v);
            });
            //console.log(single_gallery);
            $descriptions_container.find('li[data-legend-age="'+v.age+'"]').append('<div class="gallery-container"><ul class="gallery"></ul></div>');
          }
          galleriez[v.age] = single_gallery;
        }
        
      });
    });
    
    //console.log(additional_eventsies);
    // populate additional events as callback
    LifeTimeLine.add_each_additional_list_item(additional_eventsies);
    
    //console.log(galleriez);
    // populate galleriez as callback
    LifeTimeLine.add_each_gallery_item(galleriez);
    
    // now that all the data is where it needs to be, build the click events for the interactive experience
    LifeTimeLine.listen_to_all_major_click_events(data);
  };
  
  //add additional events to the age they belong to
  LifeTimeLine.add_each_additional_list_item = function(data) {
    $.each(data, function(k, v) {
      var $container = $descriptions_container.find('li[data-legend-age="'+k+'"]').find('ul.additional-events');
      //console.log($container);
      $.each(v, function(inner_k, inner_v) {
        $container.append('<li>'+inner_v+'</li>');
      });
    });
  };
  
  //add additional events to the age they belong to
  LifeTimeLine.add_each_gallery_item = function(data) {
    $.each(data, function(k, v) {
      var $container = $descriptions_container.find('li[data-legend-age="'+k+'"]').find('ul.gallery');
      //console.log($container);
      $.each(v, function(inner_k, inner_v) {
        $container.append('<li><img src="'+inner_v+'" alt="" /></li>');
      });
    });
  };
  
  
  // click events to show the data
  LifeTimeLine.listen_to_all_major_click_events = function(data) {
    // listen for clicks on main legend
    $legend_container.find('a.pin').on('click', function(e) {
      e.preventDefault();
      var legend_age = $(this).parent('li').attr('data-legend-age');
      
      // hide and turn on the right description
      $descriptions_container.find('> li').hide();
      $descriptions_container.find('> li[data-legend-age="'+legend_age+'"]').show();
      
      // hide and turn on the right thumbnail
      $thumbnails_container.find('> li > ol > li').removeClass('active');
      $thumbnails_container.find('li[data-legend-age="'+legend_age+'"]').addClass('active');
      
      // deal with active classes
      $('a.pin').removeClass('active');
      $(this).addClass('active');
    });
  };


  // ok the next bit of code bunches are for the modal gallery
  LifeTimeLine.once_galleries_completed_set_gallery_css = function(callback) {
    var $gallery_lis = $('ul.gallery.prev-next-gallery > li');
    var gallery_container_width = $gallery_lis.size() * 100;
    var gallery_lis_width = 100 / $gallery_lis.size();
    gallery_container_width = gallery_container_width + '%';
    gallery_lis_width = gallery_lis_width + '%';
    // set the widths for the modal
    $gallery_lis.parent().css('width', gallery_container_width);
    $gallery_lis.css('width', gallery_lis_width);
    // setup the pagination for the list items
    if($gallery_lis.size() > 1) {
      $gallery_lis.parents('.message').append('<ul class="pagination"></ul>');
      // setup the pagination if there are more than 1 gallery item
      $gallery_lis.parents('.message').append('<a class="modal-next" href="#">Next</a>');
      callback($gallery_lis);
    }
    // add prev/next buttons
  };
  
  LifeTimeLine.paginate_the_gallery = function(items, callback) {
    for(i = 0; i < items.length; i++) {
      items.parents('.message').find('ul.pagination').append('<li>'+i+'</li>');
    }
    // fuck this callback
    LifeTimeLine.set_the_current_li_in_pagination();
  };
  
  LifeTimeLine.set_the_current_li_in_pagination = function() {
    $('.modal.gallery-wrapper').find('ul.pagination li:first-child').addClass('current');
    LifeTimeLine.listen_for_clicks_on_modal_gallery_pagination_elements();
  };
  
  
  
  LifeTimeLine.listen_for_clicks_on_modal_gallery_pagination_elements = function() {
    
    var index_of_current = $('.modal.gallery-wrapper ul.pagination li.current').index();
    var total_indexes = $('.modal.gallery-wrapper ul.pagination li').length - 1;
    //console.log(total_indexes);
    
    $('.modal.gallery-wrapper a.modal-next').on('click', function() {
      //console.log('clicked next');
      $('.modal.gallery-wrapper ul.pagination li').removeClass();
      if(index_of_current === total_indexes) {
        $('.modal.gallery-wrapper ul.pagination li:first-child').addClass('current');
        index_of_current = 0;
        
      } else {
        $('.modal.gallery-wrapper ul.pagination li').eq(index_of_current + 1).addClass('current');
        index_of_current = index_of_current + 1;
        
      }
      LifeTimeLine.finally_send_the_index_to_know_where_to_slide(index_of_current);
      
    });
    
  };

  LifeTimeLine.finally_send_the_index_to_know_where_to_slide = function(index) {
    console.log(index);
    if(index === 0) {
      $('.modal.gallery-wrapper ul.gallery.prev-next-gallery').animate({
          marginLeft: 0,
          queue: false
      }, 400);
    } else {
      $('.modal.gallery-wrapper ul.gallery.prev-next-gallery').animate({
          marginLeft: '-=100%',
          queue: false
      }, 400);
    }
    
  };
  




  $(document).ready(function() {
    
    // add prev next pubttons
    //LifeTimeLine.add_pagination_for_the_decades();
    // build list items based on age
    LifeTimeLine.add_the_legend_list_items_and_pagination(age, demo);
    
    //demo(LifeTimeLine.next_step);
    
    //LifeTimeLine.populate_the_rest_of_the_data();
    
    var open_close_gallery_associated_to_this_age = function() {
      $btn_open = $('a.open-gallery');
      $btn_closed = $('.modal a.cancel.control');
      $gallery = $('.modal.gallery-wrapper');
      
      $btn_open.on('click touch', function(e) {
        e.preventDefault();
        $gallery.fadeIn(200);
      });
      
      $btn_closed.on('click touch', function(e) {
        e.preventDefault();
        $gallery.fadeOut(100);
      });
    };
    
    open_close_gallery_associated_to_this_age();
    
  });
  
  // add a slider in the modal
  LifeTimeLine.once_galleries_completed_set_gallery_css(LifeTimeLine.paginate_the_gallery);

  
  
})();

