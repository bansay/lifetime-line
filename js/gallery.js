LifeTimeLine.open_close_gallery_associated_to_this_age = function() {
  var $btn_open = $('a.open-gallery');
  var $btn_closed = $('.modal a.cancel.control');
  var $gallery = $('.modal.gallery-wrapper');
  
  $btn_open.on('click touch', function(e) {
    console.log('clicked');
    e.preventDefault();
    //$gallery.fadeIn(200);
    $(this).parent('.gallery-container').find('.modal.gallery-wrapper').fadeIn(200);
  });
  
  $btn_closed.on('click touch', function(e) {
    e.preventDefault();
    $gallery.fadeOut(100);
  });
  LifeTimeLine.once_galleries_completed_set_gallery_css(LifeTimeLine.paginate_the_gallery);
};

// ok the next bit of code bunches are for the modal gallery
LifeTimeLine.once_galleries_completed_set_gallery_css = function(callback) {
  var $each_gallery_container = $('.gallery-container');
  var $gallery_lis = $('ul.gallery.prev-next-gallery > li');
  
  
  $.each($each_gallery_container, function() {
    var gallery_container_width = $(this).find('ul.gallery.prev-next-gallery > li').size() * 100;
    var gallery_lis_width = 100 / $(this).find('ul.gallery.prev-next-gallery > li').size();
    gallery_container_width = gallery_container_width + '%';
    gallery_lis_width = gallery_lis_width + '%';
    // set the widths for the modal
    $(this).find('ul.gallery.prev-next-gallery').css('width', gallery_container_width);
    $(this).find('ul.gallery.prev-next-gallery > li').css('width', gallery_lis_width);
    // setup the pagination for the list items
    if($(this).find('ul.gallery.prev-next-gallery > li').size() > 1) {
      $(this).find('.message').append('<ul class="pagination"></ul>');
      // setup the pagination if there are more than 1 gallery item
      $(this).find('.message').append('<a class="modal-next" href="#">Next</a>');
      
    }
  });
  callback($each_gallery_container);
};

LifeTimeLine.paginate_the_gallery = function(items) {
  
  $.each(items, function() {
    var $these_gallery_items = $(this).find('ul.gallery.prev-next-gallery > li');
    for(i = 0; i < $these_gallery_items.length; i++) {
      $(this).find('.message').find('ul.pagination').append('<li>'+i+'</li>');
    }
  });
  // fuck this callback
  //LifeTimeLine.set_the_current_li_in_pagination();
  LifeTimeLine.set_the_current_li_in_pagination();
};

LifeTimeLine.set_the_current_li_in_pagination = function() {
  $('.modal.gallery-wrapper').find('ul.pagination li:first-child').addClass('current');
  LifeTimeLine.listen_for_clicks_on_modal_gallery_pagination_elements();
};



LifeTimeLine.listen_for_clicks_on_modal_gallery_pagination_elements = function() {
  
  var finally_send_the_index_to_know_where_to_slide = function(index, context) {
    console.log(context);
    
    var $context = $(context);
    
    console.log($context);
    if(index === 0) {
      $context.parent().find('ul.gallery.prev-next-gallery').animate({
          marginLeft: 0,
          queue: false
      }, 400);
    } else {
      $context.parent().find('ul.gallery.prev-next-gallery').animate({
          marginLeft: '-=100%',
          queue: false
      }, 400);
    }
    
  };
  
  $('.modal.gallery-wrapper a.modal-next').on('click', function(event) {
    event.preventDefault();
    var self = this;
    var total_indexes = $(this).parent().find('ul.pagination > li').size() - 1;
    var index_of_current = $(this).parent().find('ul.pagination li.current').index();
    var presumably_next_slide = $(this).parent().find('ul.pagination li.current').index() + 1;
    
    console.log('total_indexes 74: '+total_indexes);
    console.log('index_of_current 75: '+index_of_current);
    console.log('presumably_next_slide 75: '+presumably_next_slide);
    
    //$('.modal.gallery-wrapper ul.pagination li').removeClass();
    
    if(index_of_current === total_indexes) {
      $(this).parent().find('ul.pagination li').removeClass('current');
      $(this).parent().find('ul.pagination li:first-child').addClass('current');
      index_of_current = 0;
    } else {
      $(this).parent().find('ul.pagination li').removeClass('current');
      $(this).parent().find('ul.pagination li').eq(index_of_current + 1).addClass('current');
      index_of_current = index_of_current + 1;
    }
    
    finally_send_the_index_to_know_where_to_slide(index_of_current, self);
    
  });
  
};


$(document).ready(function() {

  // open modal
  LifeTimeLine.open_close_gallery_associated_to_this_age();
  // // add a slider in the modal
  // LifeTimeLine.once_galleries_completed_set_gallery_css(LifeTimeLine.paginate_the_gallery);
  
});