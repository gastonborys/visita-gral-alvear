import { Component, OnInit } from '@angular/core';
import { Secciones } from '../../models/secciones';
import { SeccionesService } from '../../services/secciones.service';
import { Urls } from '../../services/global';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage  implements OnInit{

    public main_img:    string     = "assets/galvear.jpg";
    public imageURL:    string; 
    public items:       Secciones[];


    constructor(
        private srvSecciones: SeccionesService
    ) {
        this.imageURL   = Urls.img_url;
    }

    ngOnInit(): void{
        this.loadSecciones();
    }

    loadSecciones():void{
        this.srvSecciones.getSecciones().subscribe(
            response => {
                this.items = response;
            },
            error => {
                console.log(error);
            }
        );
    }
}
