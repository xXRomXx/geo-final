var informacion ="<h1>Ubicación actual</h1>"
var map = document.getElementById("map");
var fondo = document.getElementById("body");
var txtLatitud = document.getElementById("txtLatitud");
var txtLongitud = document.getElementById("txtLongitud");
var respuesta, clima;

var luz = true;

var primeraVez = true;

var coordenadas = {
    lat: 21.106382,
    lng: -101.649501
};

var propiedades = {
    center: coordenadas,
    zoom: 30
};

function iniciaMapa() {

    map = new google.maps.Map(document.getElementById("map"), propiedades);

    var fecha = new Date()

    console.log(fecha.getHours() + " horas");

    if(fecha.getHours() >=20 || fecha.getHours() < 8){
        var styledMapTypeOscuro = new google.maps.StyledMapType(
            [
                {
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#8ec3b9"
                    }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#1a3646"
                    }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#4b6878"
                    }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#64779e"
                    }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#4b6878"
                    }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#334e87"
                    }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#023e58"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#283d6a"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#6f9ba5"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                    {
                        "color": "#023e58"
                    }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#3C7680"
                    }
                    ]
                },
                {
                    "featureType": "poi.school",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#ff40ff"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#304a7d"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#98a5be"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#2c6675"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#255763"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#b0d5ce"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#023e58"
                    }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#98a5be"
                    }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry.fill",
                    "stylers": [
                    {
                        "color": "#283d6a"
                    }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#3a4762"
                    }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#0e1626"
                    }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#4e6d70"
                    }
                    ]
                }
                ],
                    {name: 'Mapa Oscuro'}
        );
        map.mapTypes.set('style_map', styledMapTypeOscuro);
        map.setMapTypeId('style_map');

        luz = false;
    }
    else{
        luz = true;
    }

    var icono = {
        url: "./img/circle.png",
        scaledSize: new google.maps.Size(35,35),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,0)
    }

    var marker = new google.maps.Marker({
        position: coordenadas,
        icon: icono,
        map: map
    });

    if(navigator.geolocation){

        setInterval( async () => {
            moverPosicion(marker);
        }, 5000);
    
    }

    async function moverPosicion(marker){

        navigator.geolocation.getCurrentPosition( posicion => {
            var pos = {
                lat: posicion.coords.latitude,
                lng: posicion.coords.longitude
            }

            coordenadas = pos;
            marker.setPosition(pos);
            map.panTo(pos);
            map.setCenter(pos);

        });

        txtLatitud.innerText = "Latitud: " + coordenadas.lat
        txtLongitud.innerText = "Longitud: " + coordenadas.lng

        var ruta = 'https://api.openweathermap.org/data/2.5/onecall?lat='+coordenadas.lat+'&lon='+coordenadas.lng+'&exclude=hourly,daily&appid=4e942cfe2a4b3162c8fa0b02a533afed';
        respuesta = await fetch(ruta);
        tiempo = await respuesta.json();
        clima = await tiempo.current.weather[0].main;
        console.log(clima)
        
        //Nublado
        if (clima == "Clouds"){
            if(luz){
                body.style.backgroundImage = "url('img/dia/nublado.jpg')";
            }
            else{
                body.style.backgroundImage = "url('img/noche/nublado.gif')";
            }
            console.log("Nublado");
        }

        //Despejado
        if (clima == "Clear")
        console.log("Cielo despejado");

        //Tormenta eléctrica
        if (clima == "Thunderstorm")
        console.log("Tormenta eléctrica");

        //Llovizna
        if (clima == "Drizzle")
        console.log("Llovizna");

        //Lluvioso
        if (clima == "Rain")
        console.log("Lluvioso");

        //Nieve
        if (clima == "Snow")
        console.log("Nieve");

        //Neblina
        if (clima == "Mist")
        console.log("Neblina");

        //Humo en el ambiente
        if (clima == "Smoke")
        console.log("Humo en el ambiente");

        //Polvo en el ambiente
        if (clima == "Dust")
        console.log("Neblina");
        
        //Calina(partículas de polvo suspendidas en el aire)
        if (clima == "Haze")
        console.log("Calina");

        //Niebla
        if (clima == "Fog")
        console.log("Niebla");

        //Tormenta de arena
        if (clima == "Sand")
        console.log("Tormenta de arena");

        //Lluvia de ceniza
        if (clima == "Ash")
        console.log("Lluvia de ceniza");

        //Tormenta
        if (clima == "Squall")
        console.log("Tormenta");

        //Tornado
        if (clima == "Tornado")
        console.log("Tornado");

    }



}