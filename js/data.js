// set an age
var age = 31;
var username = "Brittany";
// know how many decades, for the legend and thumbnails containers
var num_of_decades = Math.ceil(age / 10);
// main containers
var $legend_container = $('#legend-container ol.legend');
var $thumbnails_container = $('#thumbnails-container ol.thumbnails');
var $descriptions_container = $('#descriptions-container ol.descriptions');

// major decade markup
var legend_decade_li_html = '<li class="legend-decade-list-item"><ol></ol></li>';
var thumbnail_decade_li_html = '<li class="thumbnail-decade-list-item"><ol></ol></li>';

// object to hold major functions
var LifeTimeLine = {};
// object to hold data from json
var LifeTimeEventsData = {};



var set_data_to_this_unique_object = function(callback) {
  
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













