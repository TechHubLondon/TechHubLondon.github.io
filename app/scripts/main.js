'use strict';
$('.logo-intro').removeClass('hidden').addClass('animated flipInY');
$('.logo-four-oh-four').addClass('animated hinge');
$('.dot-london-sub').removeClass('hidden').addClass('animated fadeIn');
$('.dot-london').removeClass('hidden').addClass('animated fadeIn');
$('.jumbo-text').removeClass('hidden').addClass('animated fadeInDown');

$('.navbar-toggle').click(function() {
    $('.navbar').toggleClass('navbar-on');
});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($('.navbar').offset().top > 50) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }
});

/* jshint ignore:start */
// Google Analytics
(function(b, o, i, l, e, r) {
    'use strict';
    b.GoogleAnalyticsObject = l;
    b[l] || (b[l] =
        function() {
            (b[l].q = b[l].q || []).push(arguments)
        });
    b[l].l = +new Date;
    e = o.createElement(i);
    r = o.getElementsByTagName(i)[0];
    e.src = '//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e, r)
}(window, document, 'script', 'ga'));
ga('create', 'UA-33525349-3', 'techhub.london');
ga('send', 'pageview');
/* jshint ignore:end */

if ($('.map').length > 0) {
    var mapOptions = {
        zoom: 16,
        disableDefaultUI: true,
        center: new google.maps.LatLng(51.52467, -0.087562),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            'featureType': 'water',
            'stylers': [{
                'color': '#021019'
            }]
        }, {
            'featureType': 'landscape',
            'stylers': [{
                'color': '#08304b'
            }]
        }, {
            'featureType': 'poi',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#0c4152'
            }, {
                'lightness': 5
            }]
        }, {
            'featureType': 'road.highway',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#000000'
            }]
        }, {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'color': '#0b434f'
            }, {
                'lightness': 25
            }]
        }, {
            'featureType': 'road.arterial',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#000000'
            }]
        }, {
            'featureType': 'road.arterial',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'color': '#0b3d51'
            }, {
                'lightness': 16
            }]
        }, {
            'featureType': 'road.local',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#000000'
            }]
        }, {
            'elementType': 'labels.text.fill',
            'stylers': [{
                'color': '#ffffff'
            }]
        }, {
            'elementType': 'labels.text.stroke',
            'stylers': [{
                'color': '#000000'
            }, {
                'lightness': 13
            }]
        }, {
            'featureType': 'administrative',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#000000'
            }]
        }, {
            'featureType': 'administrative',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'color': '#144b53'
            }, {
                'lightness': 14
            }, {
                'weight': 1.4
            }]
        }]
    };

    // Supermarket map in eat.html page
    if ($('#map-supermarket').length > 0) {
        var map01 = new google.maps.Map(document.getElementById('map-supermarket'), mapOptions);

        var iconSainsbury = new google.maps.MarkerImage('images/sainsbury-logo.png', null, null, null, new google.maps.Size(100, 38));
        var iconCooperative = new google.maps.MarkerImage('images/cooperative-logo.png', null, null, null, new google.maps.Size(150, 25));
        var iconTesco = new google.maps.MarkerImage('images/tesco-logo.png', null, null, null, new google.maps.Size(100, 67));
        var iconWaitrose = new google.maps.MarkerImage('images/waitrose-logo.png', null, null, null, new google.maps.Size(100, 28));

        new google.maps.Marker({
            position: new google.maps.LatLng(51.52475, -0.087369),
            map: map01,
            icon: iconSainsbury
        });
        new google.maps.Marker({
            position: new google.maps.LatLng(51.525656, -0.090517),
            map: map01,
            icon: iconCooperative
        });
        new google.maps.Marker({
            position: new google.maps.LatLng(51.522691, -0.086807),
            map: map01,
            icon: iconTesco
        });
        new google.maps.Marker({
            position: new google.maps.LatLng(51.521846, -0.092363),
            map: map01,
            icon: iconWaitrose
        });

        new google.maps.Marker({
            position: new google.maps.LatLng(51.525646, -0.082518),
            map: map01,
            icon: iconCooperative
        });

        new google.maps.Marker({
            position: new google.maps.LatLng(51.526497, -0.084256),
            map: map01,
            icon: iconSainsbury
        });

        new google.maps.Marker({
            position: new google.maps.LatLng(51.524535, -0.077432),
            map: map01,
            icon: iconTesco
        });
    }

    if ($('#map-workout').length > 0) {
        mapOptions.zoom = 16;
        var map01 = new google.maps.Map(document.getElementById('map-workout'), mapOptions);

        var iconMarketSports = new google.maps.MarkerImage('images/marketsports-marker.jpg', null, null, null, new google.maps.Size(80, 42));
        var iconVirginActive = new google.maps.MarkerImage('images/virgin-marker.jpg', null, null, null, new google.maps.Size(90, 70));
        var iconFitnessfirst = new google.maps.MarkerImage('images/fitnessfirst-marker.gif', null, null, null, new google.maps.Size(100, 28));
        var iconNationalCircus = new google.maps.MarkerImage('images/nationalcircus-marker.png', null, null, null, new google.maps.Size(120, 41));
        var iconTechHub = new google.maps.MarkerImage('images/techhub-marker.png', null, null, null, new google.maps.Size(90, 47));
        var iconIronmonger = new google.maps.MarkerImage('images/better-logo.jpg', null, null, null, new google.maps.Size(120, 63));
        var iconBodytraining = new google.maps.MarkerImage('images/bodywise-logo.jpg', null, null, null, new google.maps.Size(120, 37));

        new google.maps.Marker({
            position: new google.maps.LatLng(51.520942, -0.090712),
            map: map01,
            icon: iconBodytraining
        });
        new google.maps.Marker({
            position: new google.maps.LatLng(51.525831, -0.089141),
            map: map01,
            icon: iconTechHub
        });
        new google.maps.Marker({
            position: new google.maps.LatLng(51.522685, -0.085222),
            map: map01,
            icon: iconTechHub
        });
        new google.maps.Marker({
            position: new google.maps.LatLng(51.525529, -0.079451),
            map: map01,
            icon: iconMarketSports
        });
        new google.maps.Marker({
            position: new google.maps.LatLng(51.522593, -0.089665),
            map: map01,
            icon: iconVirginActive
        });
        new google.maps.Marker({
            position: new google.maps.LatLng(51.5273222, -0.0828048),
            map: map01,
            icon: iconNationalCircus
        });
        new google.maps.Marker({
            position: new google.maps.LatLng(51.524011, -0.090601),
            map: map01,
            icon: iconFitnessfirst
        });
        new google.maps.Marker({
            position: new google.maps.LatLng(51.526457, -0.094817),
            map: map01,
            icon: iconIronmonger
        });
    }

    if ($('#map-home').length > 0) {
        var map01 = new google.maps.Map(document.getElementById('map-home'), mapOptions);

        var iconTechHub = new google.maps.MarkerImage('images/techhub-marker.png', null, null, null, new google.maps.Size(90, 47));

        new google.maps.Marker({
            position: new google.maps.LatLng(51.525831, -0.089141),
            map: map01,
            icon: iconTechHub
        });
        new google.maps.Marker({
            position: new google.maps.LatLng(51.522685, -0.085222),
            map: map01,
            icon: iconTechHub
        });
    }
}
