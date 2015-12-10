<!DOCTYPE html>
<html>
<head>
    <!--Import Google Icon Font-->
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="/css/materialize.min.css"  media="screen,projection"/>

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body>
<!--Import jQuery before materialize.js-->
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="js/materialize.min.js"></script>
</body>
</html>


<!DOCTYPE html>
<html>
<head>
    <style type="text/css">
        html, body { height: 100%; margin: 0; padding: 0; }
        #map { height: 100%; }
    </style>
</head>
<body>
<a href="/cadastrar" >Cadastrar Imovel</a>

<form action="">
    Titulo
    <input type="text" name="titulo" id="titulo" />
    <br />
    Lat
    <input type="text" name="lat" id="lat" />
    <br />
    Lng
    <input type="text"  name="lng" id="lng" />

</form>
<div id="map" style="width:500px;"></div>
<script type="text/javascript">

    var map;
    var markers = [];

    function removeMarkers(){
        for(var i = 0; i<markers.length; ++i){
            markers[i].setMap(null);
        }
    }

    function addMarker(pos, map){
        debugger;
        //document.getElementById("lat").value = pos.lat();
        debugger;
        //document.getElementById("long").value = pos.lng();

        debugger;




        var marker = new google.maps.Marker({
            position: pos,
            animation: google.maps.Animation.BOUNCE,
            icon: 'img/marker.png'
        });

        marker.setMap(map);

        markers.push(marker);
    }

    var imoveis = [];

    @foreach($imoveis as $r)
        imoveis.push({id: {{$r->id}},
                titulo: '{{$r->titulo}}',
                lat: '{{$r->lat}}',
                lng:'{{$r->lng}}' });
    @endforeach

function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 51.508742, lng: -0.120850},
            zoom: 12,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        });

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){

                localizacao = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                map.setCenter(localizacao);
                map.setZoom(12);
                /*addMarker(
                            {   lat: position.coords.latitude,
                                lng: position.coords.longitude
                            },
                            map
                );*/

                /*google.maps.event.addListener(marker, 'click', function(){
                    info.setContent('teste');
                    info.open(map, this);
                });*/
            });

        }

        for(imovel of imoveis){

            var html = '<div style="width:300px;">'+
                    '<h3>'+imovel.titulo+'</h3>'+
                    '<a href="#'+imovel.id+'">Veja mais</a>'+
                    '</div>';

            var marker = new google.maps.Marker({
                position : new google.maps.LatLng(imovel.lat, imovel.lng),
                icon:'img/marker.png',
                html: html
            });

            marker.setMap(map);

            var info = new google.maps.InfoWindow({
                content : "Carregando..."
            });

            google.maps.event.addListener(marker, 'click', function(){
                info.setContent(this.html);
                info.open(map, this);
            });
        }

        google.maps.event.addListener(map,'click', function (event) {
            removeMarkers();
            document.getElementById('lat').value = event.latLng.lat();
            document.getElementById('lng').value = event.latLng.lng();
            console.log('Lat: '+event.latLng.lat()+' - Long: '+event.latLng.lng());
            debugger;

            addMarker(event.latLng, map);
        });
    }


</script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQqN0CDt6YSPm3GJo82c0W0H99okSk0wE&callback=initMap">
</script>
</body>
</html>