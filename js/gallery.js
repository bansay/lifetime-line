LifeTimeLine.open_close_gallery_associated_to_this_age = function() {
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
  
  $('.modal.gallery-wrapper a.modal-next').on('click', function() {
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

  // open modal
  LifeTimeLine.open_close_gallery_associated_to_this_age();
  // add a slider in the modal
  LifeTimeLine.once_galleries_completed_set_gallery_css(LifeTimeLine.paginate_the_gallery);
  
});