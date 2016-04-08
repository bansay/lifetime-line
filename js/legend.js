LifeTimeLine.add_the_legend_list_items_and_pagination = function(age, callback) {

  // if the age is not on the decade
  var age_decade_remainder = age % 10;
  
  // set it to the next 100th and then a percentage for css
  var legend_and_thumbnail_container_width = Math.ceil((age*10)/100)*100;
  var legend_decade_li_width = (100 / (legend_and_thumbnail_container_width / 100));
  
  // set the width of the legend container dynamically cuz you never know what my age really is right
  $legend_container.css("width", legend_and_thumbnail_container_width + "%");
  $thumbnails_container.css("width", legend_and_thumbnail_container_width + "%");
  // show age to user so they feel reassured
  $('#age').empty();
  $('#age').text(age);


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

  // init the main legend functions
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
  callback(LifeTimeLine.populate_the_skeleton_with_data);
};

// now the skeleten is put together we can push the data to it
LifeTimeLine.populate_the_skeleton_with_data = function(data) {
  
  var decade_to_append_to = 0;
  // populate the pins per lifetime event
  $.each(data, function(key, val) {
    
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

        if(v.age > 10) {
          decade_to_append_to = Math.floor(v.age / 10);
        }
        var thumbnail_html = '<li class="thumb" data-legend-age="'+v.age+'">';
        thumbnail_html += '<a href="#">';
        thumbnail_html += '<img src="'+v.thumbnail+'" alt="Thumbnail Image for Age: '+v.age+'" />';
        thumbnail_html += '</a>';
        thumbnail_html += '</li>';
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
        $descriptions_container.find('li[data-legend-age="'+v.age+'"]').append('<p class="location">'+v.location+'</p>');
      }
      // deal with status
      if(typeof v.status !== 'undefined') {
        $descriptions_container.find('li[data-legend-age="'+v.age+'"]').append('<p class="status">'+v.status+'</p>');
      }
      // deal with description
      if(typeof v.description !== 'undefined') {
        $descriptions_container.find('li[data-legend-age="'+v.age+'"]').append('<p class="description">'+v.description+'</p>');
      }
      // deal with description
      if(typeof v.additional_events !== 'undefined') {
        var single_event = [];
        if($.isArray(v.additional_events)) {
          $.each(v.additional_events, function(k, v) {
            single_event.push(v);
          });
          $descriptions_container.find('li[data-legend-age="'+v.age+'"]').append('<ul class="additional-events"></ul>');
        }
        additional_eventsies[v.age] = single_event;
      }
      // deal with gallery
      if(typeof v.gallery !== 'undefined') {
        var single_gallery = [];
        
        // build the modal for the gallery in each description
        var single_gallery_html = '<div class="gallery-container">';
        single_gallery_html += '<a href="#" class="open-gallery" title="open gallery">Open Gallery</a>';
        single_gallery_html += '<div class="modal gallery-wrapper">';
        single_gallery_html += '<div class="modal-wrap">';
        single_gallery_html += '<div class="message">';
        single_gallery_html += '<a href="#" class="cancel control" title="Close"><i class="fa fa-close">X</i></a>';
        single_gallery_html += '<ul class="gallery prev-next-gallery"></ul>'; // to be made the selector
        single_gallery_html += '</ul>';
        single_gallery_html += '</div>';
        single_gallery_html += '</div>';
        single_gallery_html += '</div>';
        single_gallery_html += '</div>';
        
        
        if($.isArray(v.gallery)) {
          $.each(v.gallery, function(k, v) {
            single_gallery.push(v);
          });
          $descriptions_container.find('li[data-legend-age="'+v.age+'"]').append(single_gallery_html);
        }
        galleriez[v.age] = single_gallery;
      }
      
    });
  });
  
  // populate additional events as callback
  LifeTimeLine.add_each_additional_list_item(additional_eventsies);
  
  // populate galleriez as callback
  LifeTimeLine.add_each_gallery_item(galleriez, LifeTimeLine.open_close_gallery_associated_to_this_age);
  
  // now that all the data is where it needs to be, build the click events for the interactive experience
  LifeTimeLine.listen_to_all_major_click_events(data);
};

//add additional events to the age they belong to
LifeTimeLine.add_each_additional_list_item = function(data, callback) {
  $.each(data, function(k, v) {
    var $container = $descriptions_container.find('li[data-legend-age="'+k+'"]').find('ul.additional-events');
    $.each(v, function(inner_k, inner_v) {
      $container.append('<li>'+inner_v+'</li>');
    });
  });
};

//add additional events to the age they belong to
LifeTimeLine.add_each_gallery_item = function(data, callback) {
  $.each(data, function(k, v) {
    var $container = $descriptions_container.find('li[data-legend-age="'+k+'"]').find('ul.gallery');
    $.each(v, function(inner_k, inner_v) {
      $container.append('<li><img src="'+inner_v+'" alt="" /></li>');
    });
  });
  callback();
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





// pagination function based on age and decades
LifeTimeLine.add_pagination_for_the_decades = function() {
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
};

$(document).ready(function() {
  
  // init the pagination
  LifeTimeLine.add_pagination_for_the_decades();
  // build list items based on age
  LifeTimeLine.add_the_legend_list_items_and_pagination(age, set_data_to_this_unique_object);
  
  
});