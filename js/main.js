function initMap() {
    var msk = {
        lat: 54.7546971,
        lng: 37.6215214
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: msk,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: msk,
        map: map
    });

    var styles = [
  {
    "featureType": "landscape",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "landscape.natural.landcover",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#abced8"
      }
    ]
  }
];

    
    
    map.setOptions({styles: styles});
};


$(function() {
    
    $(".cls-btn").click(function(){
        $(".modal").addClass("modal-close");
    });
   $("#map").removeAttr('style'); 
   
   // select date 

$('.date #day-btn').click(function () {
        $(".date .day-ul").toggle();
    });
$(".date .day-ul li").click(function(){
  var dayCheck = $(this).html();

  $(".date #day-btn").text(dayCheck);
  $(".date .day-ul").toggle();
});

$('.date #month-btn').click(function () {
        $(".date .month-ul").toggle();
    });
$(".date .month-ul li").click(function(){
  var dayCheck = $(this).html();

  $(".date #month-btn").text(dayCheck);
  $(".date .month-ul").toggle();
});

$('.date #year-btn').click(function () {
        $(".date .year-ul").toggle();
    });
$(".date .year-ul li").click(function(){
  var dayCheck = $(this).html();

  $(".date #year-btn").text(dayCheck);
  $(".date .year-ul").toggle();
})

// select date-death 

$('.date-death #day-btn').click(function () {
        $(".date-death .day-ul").toggle();
    });
$(".date-death .day-ul li").click(function(){
  var dayCheck = $(this).html();

  $(".date-death #day-btn").text(dayCheck);
  $(".date-death .day-ul").toggle();
});

$('.date-death #month-btn').click(function () {
        $(".date-death .month-ul").toggle();
    });
$(".date-death .month-ul li").click(function(){
  var dayCheck = $(this).html();

  $(".date-death #month-btn").text(dayCheck);
  $(".date-death .month-ul").toggle();
});

$('.date-death #year-btn').click(function () {
        $(".date-death .year-ul").toggle();
    });
$(".date-death .year-ul li").click(function(){
  var dayCheck = $(this).html();

  $(".date-death #year-btn").text(dayCheck);
  $(".date-death .year-ul").toggle();
})





$('.block-left-2 input').focusout(function(){
  var value = $(this).val();
  if (value.length > 0 ) {
    $(this).css({
      "background-image" : "none"
    });
  };
});
$('.checkbox').click(function(){
    $(this).css({
      "background" : "white"
    });
  });



  $(".toggle-box button").click(function(){
    $(".toggle-box button").removeClass("toggle-box-active");
    $(this).addClass("toggle-box-active");
  });

  $(".panel .input-box .map-ul p").click(function(){
    $(".panel .input-box .map-ul p").removeClass("active-li");
    $(this).addClass("active-li");

    var text = $(this).text();
    $(".map-btn").val(text);
    $(".map-ul").toggle();
  });

  $(".map-btn").click(function(){
    $(".map-btn").val("");
    $(".map-ul").toggle();
  });



});


