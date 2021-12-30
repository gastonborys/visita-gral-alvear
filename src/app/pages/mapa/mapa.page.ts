import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"
import { environment } from '../../../environments/environment';


@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.page.html',
    styleUrls: ['./mapa.page.scss'],
})

export class MapaPage implements OnInit {

    constructor() { 

    }

    ngOnInit() {
        this.loadMap();
    }

    ionViewDidEnter(){
        this.loadMap();
    }

    loadMap(): void {
        const locations = [
            { titulo: "<b>Item 1</b><p>Abierto de 9 a 13hs y de 17 a 21hs</p>", lat: -34.978041, lng: -67.689916 },
            { titulo: "Item 2", lat: -34.978109, lng: -67.696259 },
            { titulo: "Item 3", lat: -34.975930, lng: -67.689386 },
        ];

        let loader = new Loader({
            apiKey: environment.firebaseConfig.apiKey
        });

        loader.load().then(()  => {
            const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: -34.978041, lng: -67.689350 },
                zoom: 12,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.TOP_CENTER,
                },
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER,
                },
                scaleControl: true,
                streetViewControl: true,
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP,
                },
                fullscreenControl: true,
            });


            const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            const infoWindow = new google.maps.InfoWindow({
                content: "",
                disableAutoPan: true,
            });


            for (let i:number = 0; i < locations.length; i++)
            {
                const label = locations[i].titulo;

                const LatLng = {lat: locations[i].lat, lng: locations[i].lng};

                let marker = new google.maps.Marker({
                    label: labels[i % labels.length],
                    position: LatLng,
                    map,
                });
                
                marker.addListener('click', () => {
                    infoWindow.setContent(label),
                    infoWindow.open({
                        anchor: marker,
                        map,
                        shouldFocus: false
                        
                    });
                });
            }

            const locationButton = document.createElement("button");

            locationButton.innerHTML = '<ion-icon name="locate"></ion-icon>';
            locationButton.classList.add("current-pos");

            map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(locationButton);

            let first: boolean = true;
            let marker: google.maps.Marker;

            setInterval(function(){
                if (navigator.geolocation) 
                {
                    let posIcon: any = {
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: "#005eb8",
                        fillOpacity: 1,
                        scale: 10,
                        strokeColor: "#EEE",
                        strokeWeight: 3
                    };
                        navigator.geolocation.getCurrentPosition(

                            (position: GeolocationPosition) => {
                                const pos = {
                                    lat: position.coords.latitude,
                                    lng: position.coords.longitude,
                                };
                                if (marker != null)
                                {
                                    if (pos.lat != marker.getPosition().lat() && pos.lng != marker.getPosition().lng())
                                    {
                                        marker.setMap(null);
                                        marker = new google.maps.Marker({
                                            icon: posIcon,
                                            position: pos,
                                            map,
                                        });
                                    }

                                }
                                else
                                {
                                    marker = new google.maps.Marker({
                                        icon: posIcon,
                                        position: pos,
                                        map,
                                    });
                                }

                                locationButton.addEventListener("click", () => {
                                    map.setCenter(pos);
                                });

                            },
                            () => {
                                if (first)
                                {
                                    first = false;
                                    console.log("error mapa");
                                    alert ('Error al obtener la posición actual');
                                }
            
                            }
                        );
                } else {
                    if (first)
                    {
                        first = false;
                        alert ('El dispositivo no soporta la geolocalización.');
                    }
                }
            }, 1000);
        });


    }

}

