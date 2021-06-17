var informacion ="<h2>CLIMA</h2>"
var map = document.getElementById("map");
var fondo = document.getElementById("body");

var txtInfo = document.getElementById("txtInfo");

var txtTemperatura = document.getElementById("txtTemperatura");
var txtHumedad = document.getElementById("txtHumedad");
var txtPrecipitacion = document.getElementById("txtPrecipitacion");
var txtLatitud = document.getElementById("txtLatitud");
var txtLongitud = document.getElementById("txtLongitud");
var txtTimezone = document.getElementById("txtTimezone");

var respuesta, clima, tiempo, minutos;
var visualizarClima;
var llamadasAPI = 0;
var primeraVez = true;
var sesionIniciada = false;
var fecha;
var calculoFecha;
var calculo = 0;
var fotoGuardada = "url('img/null.jpg')";
var datosClimaticos ={
    clima: "",
    hora: "",
    temperatura: ""
};
var temp = 0;
var luz = true;

var coordenadas = {
    lat: 21.106382,
    lng: -101.649501
};

var propiedades = {
    center: coordenadas,
    zoom: 14
};

function iniciarSesion(variable){
    sesionIniciada = variable
    if(!sesionIniciada)
    {
        body.style.backgroundImage = "url('img/null.jpg')";
    }
    else
    {
        body.style.backgroundImage = fotoGuardada;
    }
}

function iniciaMapa() {

    map = new google.maps.Map(document.getElementById("map"), propiedades);

    fecha = new Date()

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
                        "color": "#712B79"
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
    else {
        luz = true;
    }

    var icono = {
        url: "./img/circle.png",
        scaledSize: new google.maps.Size(30,30),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,0)
    }

    var marker = new google.maps.Marker({
        position: coordenadas,
        icon: icono,
        map: map
    });

    var infowindow = new google.maps.InfoWindow({
        content : informacion
    })

    marker.addListener("click", () => {
        infowindow.open(map, marker)
    })

    if(navigator.geolocation){

        setInterval( async () => {
            moverPosicion(marker);
        }, 10000);


    }

    async function moverPosicion(marker){
        if(sesionIniciada)
        {
            txtInfo.innerText = "Datos climatológicos";
            llamadasAPI++;
            console.log("LLAMADAS LOCALES A API: " + llamadasAPI);
    
            infowindow = new google.maps.InfoWindow({
                content : informacion
            })
    
            //informacion = "<h3>Latitud: " + coordenadas.lat + "\nLongitud: " + coordenadas.lng + "</h5";
    
            infowindow = new google.maps.InfoWindow({
                content : informacion,
                backgroundColor: 'rgb(75,124,152)',
            })
    
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
    
            var ruta = 'https://api.openweathermap.org/data/2.5/onecall?lat='+coordenadas.lat+'&lon='+coordenadas.lng+'&exclude=hourly,daily&appid=c9346d5f0a34b62820ec7edf808ba721';
            respuesta = await fetch(ruta);
            tiempo = await respuesta.json();
            clima = await tiempo.current.weather[0].main;

            txtHumedad.innerText = "Humedad: " + await tiempo.current.humidity + "%";
            txtPrecipitacion.innerText = "Precipitación: " + await tiempo.minutely[0].precipitation + "mm";
            txtTimezone.innerText = "Zona horaria: " + await tiempo.timezone;
            temp = await (Math.floor(parseFloat(tiempo.current.temp) - 273.15)) + "°C";
            txtTemperatura.innerText = "Temperatura: " + temp;

            //Despejado
            if (clima == "Clear"){
                if(luz){
                    body.style.backgroundImage = "url('img/dia/despejado.jpg')";
                }
                else{
                    body.style.backgroundImage = "url('img/noche/despejado.gif')";
                }
                visualizarClima = "Cielo despejado";
            }
            
            //Nublado
            if (clima == "Clouds"){
                if(luz){
                    body.style.backgroundImage = "url('img/dia/nublado.jpg')";
                }
                else{
                    body.style.backgroundImage = "url('img/noche/nublado.gif')";
                }
                visualizarClima = "Nublado";
            }
    
            //Tormenta eléctrica
            if (clima == "Thunderstorm"){
                body.style.backgroundImage = "url('img/tormenta.jpg')";
                visualizarClima = "Tormenta eléctrica";
            }
    
            //Llovizna o Lluvia
            if (clima == "Drizzle" || clima == "Rain"){
                body.style.backgroundImage = "url('img/lluvia.gif')";
                visualizarClima = "Lluvioso";
            }
    
            //Nieve
            if (clima == "Snow"){
                if(luz){
                    body.style.backgroundImage = "url('img/dia/nieve.gif')";
                }
                else{
                    body.style.backgroundImage = "url('img/noche/nieve.gif')";
                }
                visualizarClima = "Nieve";
            }
    
            //Neblina o polvo en el ambiente o calina(partículas de polvo suspendidas en el aire)
            if (clima == "Mist" || clima == "Dust" || clima == "Haze"){
                if(luz){
                    body.style.backgroundImage = "url('img/dia/neblina.gif')";
                }
                else{
                    body.style.backgroundImage = "url('img/noche/neblina.gif')";
                }
                visualizarClima = "Neblina";
            }
    
            //Humo en el ambiente
            if (clima == "Smoke"){
                body.style.backgroundImage = "url('img/humo.gif')";
                visualizarClima = "Humo en el ambiente";
            }
            
            //Niebla
            if (clima == "Fog"){
                if(luz){
                    body.style.backgroundImage = "url('img/dia/niebla.jpg')";
                }
                else{
                    body.style.backgroundImage = "url('img/noche/niebla.jpg')";
                }
                visualizarClima = "Niebla";
            }
    
            //Tormenta de arena
            if (clima == "Sand"){
                body.style.backgroundImage = "url('img/arena.gif')";
                visualizarClima = "Tormenta de arena";
            }
    
            //Lluvia de ceniza
            if (clima == "Ash"){
                body.style.backgroundImage = "url('img/ash.jpg')";
                visualizarClima = "Lluvia de ceniza";
            }
    
            //Tormenta
            if (clima == "Squall"){
                if(luz){
                    body.style.backgroundImage = "url('img/dia/chubasco.jpg')";
                }
                else{
                    body.style.backgroundImage = "url('img/tormenta.jpg')";
                }
                visualizarClima = "Tormenta";
            }
    
            //Tornado
            if (clima == "Tornado"){
                body.style.backgroundImage = "url('img/tornado.gif')";
                visualizarClima = "Tornado";
            }
            informacion = "<h2>"+visualizarClima+"</h2>";
    
            if(primeraVez){
                datosClimaticos.clima = visualizarClima;
                datosClimaticos.temperatura = temp;
                
                calculoFecha = new Date(tiempo.current.dt * 1000);
                minutos = calculoFecha.getMinutes();
                minutos = minutos < 10 ? '0' + minutos : minutos
                
                datosClimaticos.hora = calculoFecha.getHours()+":"+minutos
                
                console.log(datosClimaticos);
                guardarDatos(datosClimaticos);
                primeraVez = false;
            }
            fotoGuardada = body.style.backgroundImage;
        }

    }

}