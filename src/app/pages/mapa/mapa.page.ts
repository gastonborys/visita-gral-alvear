import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"


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
            { titulo: "Item 1", lat: -34.978041, lng: -67.689916 },
            { titulo: "Item 2", lat: -34.978109, lng: -67.696259 },
            { titulo: "Item 3", lat: -34.975930, lng: -67.689386 },
        ];

        let loader = new Loader({
            apiKey: ''
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

            locationButton.addEventListener("click", () => {
                // Try HTML5 geolocation.
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position: GeolocationPosition) => {
                            const pos = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                            };

                            let marker = new google.maps.Marker({
                                position: pos,
                                map,
                            });
 
                            map.setCenter(pos);

                            marker.addListener('click', () => {
                                infoWindow.setContent("Posición Actual"),
                                    infoWindow.open({
                                        anchor: marker,
                                        map,
                                        shouldFocus: false
                                    });
                            });

                        },
                        () => {
                            console.log("error mapa");
                        }
                    );
                } else {
                    // Browser doesn't support Geolocation
                    console.log("browser doesn't support geolocation")    
                }
            });
        });


    }

}

