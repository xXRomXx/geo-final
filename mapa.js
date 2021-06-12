var informacion ="<h1>Ubicación actual</h1>"
var map = document.getElementById("map");
var fondo = document.getElementById("body");
var respuesta;
var clima;
var tiempo;
var primeraVez = true;

var coordenadas = {
    lat: 21.106382,
    lng: -101.649501
};

var propiedades = {
    center: coordenadas,
    zoom: 20
};

function iniciaMapa() {

    map = new google.maps.Map(document.getElementById("map"), propiedades);

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

        var ruta = 'https://api.openweathermap.org/data/2.5/onecall?lat='+coordenadas.lat+'&lon='+coordenadas.lng+'&exclude=hourly,daily&appid=4e942cfe2a4b3162c8fa0b02a533afed';
        respuesta = await fetch(ruta);
        clima = tiempo.current.weather[0].main;
        console.log(clima);
        //body.style.backgroundImage = "sisisi"

        //Nublado
        if (clima == "Clouds"){
            body.style.backgroundImage = "url('img/dia/muy-nublado.gif')";
            console.log("Nublado");
        }
        console.log("Nublado");

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



        tiempo = await clima.json();

        navigator.geolocation.getCurrentPosition( posicion => {
            var pos = {
                lat: posicion.coords.latitude,
                lng: posicion.coords.longitude
            }

            marker.setPosition(pos);
            map.panTo(pos);
            map.setCenter(pos);

        });
    }

    /*
    var propiedades = {
        center: {
            lat : 21.106382, lng : -101.649501
        },
        zoom: 14
    };
    const mapa = document.getElementById("map");
    const map = new google.maps.Map(mapa, propiedades);
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            let posicion = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            let propiedadesMarcador = {
                position: posicion,
                map,
                title: "Marcador"
            };
            const marcador = new google.maps.Marker(propiedadesMarcador);
            map.setCenter(posicion);
            const infowindow = new google.maps.InfoWindow({
                content : informacion
            })
            marcador.addListener("click", ()=>{
                infowindow.open(map.marcador)
            })
        });
    }
    */
}