var informacion ="<h1>Ubicación actual</h1>"
var map = document.getElementById("map");
var clima;
var primeraVez = true;

var comoquieras;

var coordenadas = {
    lat: 21.106382,
    lng: -101.649501
};

var propiedades = {
    center: coordenadas,
    zoom: 2
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
        clima = await fetch(ruta);
        console.log(ruta);
        comoquieras = await JSON.stringify(clima);
        console.log(comoquieras);

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