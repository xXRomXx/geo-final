
var informacion ="<h1>Ubicación actual</h1>"

function iniciaMapa() {
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
    
}