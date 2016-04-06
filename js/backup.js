// object of keys that match each age a lifetime event happened
// var lifetime_events = {
//   0 : {
//     "location" : "Rose Medical Center, Denver, CO",
//     "status" : "Birth.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   1 : {
//     "location" : "Snowmass, Colorado",
//     "status" : "Parents Separate.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   2 : {
//     "location" : "Snowmass, Colorado",
//     "status" : "Going to China (the Conoco) with Harry (grandpa). My mother says I carried a strong Brooklyn accent early on because of him.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   3 : {
//     "location" : "Snowmass, Colorado",
//     "status" : "Doing barn kid things. Mom is dating Kenichi who teaches me how to count to 100 in Japanese.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   4 : {
//     "location" : "Maui, Hawaii",
//     "status" : "Watching mother jump off waterfall in pink bikini",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   5 : {
//     "location" : "Snowmass, Colorado",
//     "status" : "Kindergarden at Mrs. Grant's. Jessica Wheeler is one of my besties, she's a picky eater at the time. Another one of my friends had hampsters.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   6 : {
//     "location" : "Aspen, Colorado",
//     "status" : "1st Grade, sharing a bunk bed with Lakshmi Case, coloring/pretending to read in books from the light of an illuminating globe. Wearing Wee Ski harnesses down Buttermilk.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   7 : {
//     "location" : "Orlando, Florida | Roatan, Honduras",
//     "status" : "2nd Grade, the uniform year.",
//     "description" : "went to a Catholic school for a bit, living my dad in FL, and wore a green uniform with blue and red and white. Amazing lightening storms in Florida. 2nd Grade, moved to Roatan where my mom lived/worked with a scuba instructor, Phil Weir. I was basically a gringo kid at an all Spanish-speaking school, who didn't want to learn Spanish. I wore a uniform that was all maroon.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   8 : {
//     "location" : "San Diego, California",
//     "status" : "3rd Grade, the Waldorf School",
//     "description" : "I learn how to knit and crochet. My mom begins to date Phil Merrill, and we live in a house with a spiral staircase. Visit dad in Albequerque, New Mexico in an apartment with orange carpet.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   9 : {
//       "location" : "Crested Butte, Colorado | Houston, Texas",
//       "status" : "End of 3rd Grade, move back to Colorado",
//       "description" : "Beginning to like this place, a small class of about 15-20 kids in total. Kasey Bailey Whitney Lauren Lulu Rita Jessica are all all my besties. Visit dad in Houston, go to the YMCA where a girl had no thumbs. Dad makes me mixed tapes, and to put my hair in a pony tail he throws me backside over the couch, head dangling down.",
//       "thumbnail" : "http://placehold.it/200x400"
//   },
//   10 : {
//     "location" : "Crested Butte, Colorado",
//     "status" : "4th Grade, feeling like I own the town",
//     "description" : "With 4th of July parades everyone decorating their bikes with wild flowers, learning how to snowboard. Dad marries the wench Heidi and her more evil wench daughter Autumn. Good thing that didn't work out. Dad divorces Heidi the wench (thank God). I got double holes in my ears pierced, and thought that was pretty cool for a 10year old. We lived on Belleview.",
//     "thumbnail" : "http://placehold.it/200x400/ff0000"
//   },
//   11 : {
//     "location" : "Crested Butte, Colorado | St. Helena, California",
//     "status" : "5th Grade, first 1-2 months in CB, the rest of the year in St. Helena, California",
//     "description" : "Start attending St. Helena and became a Blue Devil (it was our mascot). We live in a haunted home that's split into 5 separate units. Apparently the man who lived there before us killed himself outside the Office. I loved the movie Harriet the Spy at this point, watched a lot of Scooby Doo on TV, also got pretty good at running and ran a 7min 52second mile in California. My best friend was Pat, he was an upper classman. He had a treehouse and we'd talk on AIM. I meet Molli McKinney (dad's girlfriend) for the first time. Kati and Lyndsi were 2 and 4.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   12 : {
//     "location" : "Calistoga, California",
//     "status" : "6th Grade, move out of haunted house and into town home with viniard in back yard. Our neighbors were british. I was obsessed with hanging out on the roof.",
//     "description" : "Start attending St. Helena Blue Devils. We live in a haunted home that's split into 5 separate units. Apparently the man who lived there before us killed himself outside the Office. I loved the movie Harriet the Spy at this point, watched a lot of Scooby Doo on TV, also got pretty good at running and ran a 7min 52second mile in California. My best friend was Pat, he was an upper classman. ",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   13 : {
//     "location" : "Scottsdale, California",
//     "status" : "7th Grade, move to Carefree/Cave Creek area in Arizona, to start fresh in the desert.",
//     "description" : "We lived in two different houses in the gated community, Terravita. My best friend at the time, Irena Ajic, we'd write countless notes back and forth to eachother, discussing boys in code language. Her family is from Yugoslavia and I remember loving hearing them all talk back and forth to eachother. We'd play a lot of billiards, her and I both had a table at home. I was also good friends with Lisa Davis, she went to Lake Powell with us once.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   14 : {
//     "location" : "Scottsdale, California | Telluride, Colorado",
//     "status" : "8th Grade, left AZ a couple months into the school year, moved back to the mountains.",
//     "description" : "I ran track and field. I played basketball but was really quite awful at it. We had ski PE which was pretty amazing. My friend Al Tuck &amp; Patti played at our school after one of our classmates almost died from alcohol poisoning, which was a good treat to a very sad and scary incident. Dad and Molli since have married on the Beach, they come to my 8th grade School House Rock musical, to announce they are pregnant with Mitch.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   15 : {
//     "location" : "Littleton, Colorado",
//     "status" : "Freshman, start brand new school,Heritage High School, with a class of 400+ students in the 9th grade, by far the largest I've been to at this point",
//     "description" : "My dad promised me 4 years at the same school, plus a family life, so I took it. Mitch was born. Kati and Lyndsi are 7 and 5 now. We live on Grant Street. Start working at Paradise Bakery &amp; Cafe in the old Southglenn mall. Go to a dance with Nicholas Denning. Get my first kiss from a friend of my cousin.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   16 : {
//     "location" : "Littleton, Colorado",
//     "status" : "Sophomore, Move into home on Briarwood Street",
//     "description" : "Start working at Sears Roebuck &amp; Co., then Wet Seal in Park Meadows. Get my first car, a maroon Jetta the same age as me. Go to a dance with Brandon Burge. Dated cute boy from all boys school for a minute, but best friend stole boyfriend at the time. Went to all boys school Homecoming.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   17 : {
//     "location" : "Littleton, Colorado",
//     "status" : "Junior, get invited to the Prom by a Senior.",
//     "description" : "Start working at Beau Jo's Pizza in Highlands Ranch as a Hostess. Get invited to Prom by a Senior, kinda big deal at the time. Get my first serious high school boyfriend (that lasted longer than 3 weeks), Jani Brackett, from Arvada.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   18 : {
//     "location" : "Littleton, Colorado",
//     "status" : "Senior, working at Beau Jo's, taking AP classes, getting good grades.",
//     "description" : "Serving tables as a waitress now, applied to ASU, CSU, CU-Boulder, and was grateful to get into CU-Boulder as I knew I'd want to live in Boulder the first time I visited.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   19 : {
//     "location" : "Boulder, Colorado",
//     "status" : "Freshmen at CU, living in Farrand Hall.",
//     "description" : "Psych major. Lived in the tower facing the East. Beautiful sunrises. There was a creepy hallway that connected the two towers East and West, with a mural where apparently someone killed themself in that hallway but made the mural before they died. Go to Cancun, Mexico with Katie Sturges. Work at Pasta Jay's, Zolo Bar &amp; Grill.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   20 : {
//     "location" : "Boulder, Colorado",
//     "status" : "Sophomore at CU, living with Lauren Maggiore, Jessica Drozd, and Katie Sturges in our first apartment in the Goss/Grove neighborhood. Added Studio Art as a major, drop Psych 1/2 way in to add Journalism.",
//     "description" : "Big joint birthday party for Lauren and I (both born March 10), begin dating Alexei, first serious college boyfriend. Work at Zolo Bar &amp; Grill, started working at Radda Trattoria.",
//     "thumbnail" : "http://placehold.it/200x400/00ff00"
//   },
//   21 : {
//     "location" : "Boulder, Colorado | Denver Tech Center",
//     "status" : "Junior at CU. Living in studio apartment until Summer.",
//     "description" : "Worked at a random AntiPasti restaurant, 14th Street Bar &amp; Grill, back to Zolo Bar &amp; Grill for bussing and food running, then Folsom St. Coffee Co. Worked in DTC for the summer at The Tavern, living with my Mom and her boyfriend at the time Pete Carter. I get PRK (Photo Refractive Karetectomy) surgery, which is similar to Lasik. I used to be almost legally 1/2 blind, near-sighted but now see almost 15/20.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   22 : {
//     "location" : "Boulder, Colorado",
//     "status" : "Senior at CU, lived in studio, with 2 guys from Craigslist, then a couple months with Maya Weinstein",
//     "description" : "Mom got into a car accident this year and was air lifted to a hospital with a mild brain injury.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   23 : {
//     "location" : "Boulder, Colorado",
//     "status" : "Super Senior at CU, live with Kate Whiteneck",
//     "description" : "We end up adopting a cat named Oreo. I get a DWAI after working at Radda, driving my friend Lexi Steele.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   24 : {
//     "location" : "Boulder, Colorado",
//     "status" : "Super Duper Senior at CU, took 1 semester off due to DWAI.",
//     "description" : "Live off Folsom St. with Denise, Kim, Jeremy, to start. Smitha moved in later. Our rent was an amazing $338/month when I first moved in. The place did however have a sewage leak in the basement after 3 weeks of moving in. Worked 60hr weeks to pay for the DWAI, took 1 semester off to focus on alcohol classes, etc. Was working at Ideal Market, owned by Whole Foods, and Folsom St. Coffee Co.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   25 : {
//     "location" : "Boulder, Colorado",
//     "status" : "After a semester off, my final semester, BFA &amp; Capstone Thesis.",
//     "description" : "Graduated in Spring 2011 with BFA in Integrated Arts, BA in Journalism, MTAM (Minor in Technology, Arts &amp; Media) from Atlas Institute. Took out extra loans to be able to work only 1 day per week, to focus on school. Started dating David Schaal upon graduating.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   26 : {
//     "location" : "Boulder, Colorado",
//     "status" : 'Got my first career job, working $15/hr as a contractor at Bing Maps, Microsoft, as an Image Specialist.',
//     "description" : "QA/QC on Aerial and Satellite photography from around the world. DEM Stiching/ Color Correcting / Data Ingesting. Began building HTML/CSS newsletters for B2B and B2C marketing purposes. Realize I want to write more code.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   27 : {
//     "location" : "Boulder, Colorado",
//     "status" : 'Small career stint at post-grad program, BDW, makes me realize I want to be a programmer.',
//     "description" : "Worked a few months with a very progressive school that teaches Creative Techonologies, I meet people in the field and realize I want to be in it. Meet Richard Jones a developer mentor. Start an internship at CP+B as an Interactive Developer. Started to freelance as a web developer while working at a co-working space called Scrib.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   28 : {
//     "location" : "Boulder, Colorado",
//     "status" : 'Became a web developer, frontend',
//     "description" : "Began working professionally as a web developer in Denver, at SpireMedia. Started working back in Boulder at Tap Influence, a SAAS company. Interviewed at Gnip, now owned by Twitter. Not quite there yet. Started working at Vermilion in May, 2014.",
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   29 : {
//     "location" : "Boulder, Colorado",
//     "status" : 'Became a web developer, more backend but still mostly frontend. Started teaching at Front Range Community College',
//     "description" : 'First year of teaching once a week. In Spring: "Complete Web Authoring", in Fall: "Web Architecture: Open Source"',
//     "thumbnail" : "http://placehold.it/200x400"
//   },
//   30 : {
//     "location" : "Boulder, Colorado",
//     "status" : 'Became a web developer, more backend but still mostly frontend. Started teaching at Front Range Community College',
//     "description" : 'Second year of teaching once a week, same classes. A co-worker takes my class.',
//     "thumbnail" : "http://placehold.it/200x400/0000ff"
//   }
// };














// (function LifeTimeLineGlobal() {

// var current_age = 30;
// var legend_li_html = '<li><span class="age"></span></li>';
// var legend_link_html = '<a class="pin" href="#"><span class="screen-reader-text">lifetime event</span></a>';
// var $legend_list_container = $('ol.legend');
// var $descriptions_list_container = $('ol.descriptions');
// var $thumbnails_list_container = $('ol.thumbnails');

// // object for all the functions for scoping
// LifeTimeLine = {};

// LifeTimeLine.get_the_data_add_it_to_page = function() {
//   //console.log('hey');
  
//   var $legend_data_wrapper = $('ol.legend');
//   var $thumbnail_data_wrapper = $('ol.thumbnails');
//   var $description_data_wrapper = $('ol.descriptions');
  
//   // loop over json data
//   $.getJSON('data/lifetime-events.json', function(data) {
    
//     console.log(data);
    
//     $.each(data, function(key, val) {
//       // // setup object for each lifetime event
//       // var obj = data[key];
//       // //console.log(obj);
//       // var lifetime_event = {};
//       // var thumbnail_html = '';
//       // var legend = '';
//       // // containers
      
      
//       // //lifetime_event[key] = data[key];
      
//       // // assign keys
//       // lifetime_event[key] = val;
      
//       // if (typeof obj =='object') {
//       //   //console.log('yep an object indeed');
        
//       //   $.each(obj, function() {
//       //     // setup thumbnail html
//       //     thumbnail_html = '<li>';
//       //     thumbnail_html += '<img src="'+obj.thumbnail+'">';
//       //     thumbnail_html += '</li>';
//       //   });
//       // }
      
//       // $thumbnails_list_container.append(thumbnail_html);
      
      
//       // round 2
      
      
      
//     });
    
//   });
// };


// // add the legend links based on the lifetime_events
// LifeTimeLine.add_legend_links_based_on_lifetime_events = function(callback) {
//   // loop over lifetime_events
//   for (var key in lifetime_events) {
//     if (lifetime_events.hasOwnProperty(key)) {
//       //console.log(key + " -> " + lifetime_events[key]);
//       $legend_list_container.find('li').eq(key).append(legend_link_html);
//     }
//   }
//   // callback
//   callback();
// };

// LifeTimeLine.add_descriptions_links_based_on_lifetime_events = function() {
//   // foreach key in lifetime
//   for (var key in lifetime_events) {
    
//     // skip loop if the property is from prototype
//     if (!lifetime_events.hasOwnProperty(key)) continue;

//     var obj = lifetime_events[key];
//     var these_lifetime_events = {};
//     var descriptions_html = '';
//     var thumbnail_html = '';
      
//     for (var prop in obj) {
//         // skip loop if the property is from prototype
//         if(!obj.hasOwnProperty(prop)) continue;
//         // your code
//         //console.log(prop + " = " + obj[prop]);
//         these_lifetime_events[prop] = obj[prop];
//     }
    
//     //console.log(these_lifetime_events);
    
//     descriptions_html = '<li data-age="'+key+'">';
//     descriptions_html += '<span>'+key+'</span>';
//     descriptions_html += '<p class="location">'+ these_lifetime_events['location']+ '</p>';
//     descriptions_html += '<p class="status">'+ these_lifetime_events['status']+ '</p>';
//     // not all lifetime events have a description
//     if(these_lifetime_events.hasOwnProperty("description")) {
//       descriptions_html += '<p class="description">'+ these_lifetime_events['description']+ '</p>';
//     }
//     descriptions_html += '</li>';
    
//     thumbnail_html = '<li>';
//     thumbnail_html += '<img src="'+these_lifetime_events['thumbnail']+'">';
//     thumbnail_html += '</li>';
    
//     $thumbnails_list_container.append(thumbnail_html);
    
//     $descriptions_list_container.append(descriptions_html);
    
        
    
//   }
  
  
// };

// // function to append to the legend the number of list items per age including birth
// LifeTimeLine.add_the_legend_list_items = function(age, container) {
//     for (i = 0; i <= age; i++) {
//         container.append(legend_li_html);
//     }
    
//     // define function to add the age number to each age class
//     function add_the_age_to_the_list_item() {
//       $age_container = container.find('li');
      
//       // add the age value to the container
//       $.each($age_container, function(i) {
//         $(this).find('.age').text(i);
//       });
//     }
    
//     // do the above function
//     add_the_age_to_the_list_item();
// };


// LifeTimeLine.add_pagination_for_the_decades = function() {
//     var current_decade = 0;
//     var $prev = $('a.prev');
//     var $next = $('a.next');
    
//     var $legend_container = $('ol.legend');
//     var $thumbnails_container = $('ol.thumbnails');

//     function showPreviousButton() {
//         $('a.prev').addClass('show');
//     }
    
    
    
//     // next click event
//     $next.on('click', function(e) {
        
//         e.preventDefault();
        
//         // animate the container
//         $legend_container.animate({
//             marginLeft: '-=99%',
//             queue: false
//         }, 400, showPreviousButton);
//         // animate the container
//         $thumbnails_container.animate({
//             marginLeft: '-=99%',
//             queue: false
//         }, 400, showPreviousButton);
        
//         // increment the current decade count
//         current_decade = current_decade +1;
        
//         // ensure it's still showing
//         $prev.css('display', 'inline-block');
        
//         // when it's the end hide the next button
//         if(current_decade === 2) {
//             $(this).hide();
//         }
//     });

//     // previous click event
//     $prev.on('click', function(e) {
//         e.preventDefault();
        
//         // animate it back to 0
//         $legend_container.animate({
//             marginLeft: '+=99%',
//             queue: false
//         }, 400);
//         // animate it back to 0
//         $thumbnails_container.animate({
//             marginLeft: '+=99%',
//             queue: false
//         }, 400);
        
//         // reset the next
//         current_decade = current_decade -1;
        
//         // ensure it's still showing
//         $next.css('display', 'inline-block');
        
//         // if it's all the way back hide prev
//         if(current_decade === 0) {
//             $(this).hide();
//         }
//     });
    
// };


// // when jquery is loaded and document is ready
// $(document).ready(function() {
//   // initialize functions
  
//   // add the legend
//   LifeTimeLine.add_the_legend_list_items(current_age, $legend_list_container);
  
//   // // add prev/next buttons
//   LifeTimeLine.add_pagination_for_the_decades();
  
//   // // add lifetime events
//   // LifeTimeLine.add_legend_links_based_on_lifetime_events(LifeTimeLine.add_descriptions_links_based_on_lifetime_events);
  
//   // testing new things
//   LifeTimeLine.get_the_data_add_it_to_page();
  
// });


// })();