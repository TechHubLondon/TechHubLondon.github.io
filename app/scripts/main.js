$('.logo-intro').removeClass('hidden').addClass('animated flipInY');
$('.dot-london-sub').removeClass('hidden').addClass('animated fadeIn');
$('.dot-london').removeClass('hidden').addClass('animated fadeIn');
$('.jumbo-text').removeClass('hidden').addClass('animated fadeInDown');

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    'use strict';
    if ($('.navbar').offset().top > 50) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }
});

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

        var iconSainsbury = new google.maps.MarkerImage('images/6f22efd7.sainsbury-logo.png', null, null, null, new google.maps.Size(100, 38));
        var iconCooperative = new google.maps.MarkerImage('images/faf50b4d.cooperative-logo.png', null, null, null, new google.maps.Size(120, 18));
        var iconTesco = new google.maps.MarkerImage('images/7989b869.tesco-logo.png', null, null, null, new google.maps.Size(100, 67));
        var iconWaitrose = new google.maps.MarkerImage('images/c036f5b3.waitrose-logo.png', null, null, null, new google.maps.Size(100, 28));

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
    }

    if ($('#map-workout').length > 0) {
        var map01 = new google.maps.Map(document.getElementById('map-workout'), mapOptions);

        var iconMarketSports = new google.maps.MarkerImage('//d363bjfyowzbm6.cloudfront.net/images/marketsports-marker.jpg', null, null, null, new google.maps.Size(80, 42));
        var iconVirginActive = new google.maps.MarkerImage('//d363bjfyowzbm6.cloudfront.net/images/virgin-marker.jpg', null, null, null, new google.maps.Size(90, 70));
        var iconFitnessfirst = new google.maps.MarkerImage('//d363bjfyowzbm6.cloudfront.net/images/fitnessfirst-marker.gif', null, null, null, new google.maps.Size(100, 28));
        var iconTechHub = new google.maps.MarkerImage('//d363bjfyowzbm6.cloudfront.net/images/techhub-marker.png', null, null, null, new google.maps.Size(90, 47));

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
            position: new google.maps.LatLng(51.524011, -0.090601),
            map: map01,
            icon: iconFitnessfirst
        });
    }

    if ($('#map-home').length > 0) {
        var map01 = new google.maps.Map(document.getElementById('map-home'), mapOptions);

        var iconTechHub = new google.maps.MarkerImage('//d363bjfyowzbm6.cloudfront.net/images/techhub-marker.png', null, null, null, new google.maps.Size(90, 47));

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
