import { Component, OnInit } from '@angular/core';
import { Urls } from '../../services/global';
import { Comercios } from '../../models/comercios';
import { ComerciosService } from '../../services/comercios.service';

@Component({
    selector: 'app-comercios',
    templateUrl: './comercios.page.html',
    styleUrls: ['./comercios.page.scss'],
})
export class ComerciosPage implements OnInit {

    public imageURL:    string;
    public item:        any;
    public numbers:     any;
    public items:       Comercios[];

    constructor(
        private comerciosSrv: ComerciosService
    ) { 
        this.imageURL   = Urls.img_url;
        this.item       = {imagen: 'f9cc6664879ccd4a7fae07c9ef94acb0d2cb6b5b.jpg'};
        this.numbers = Array(10).fill(1).map((x, i) => i+1);
    }

    ngOnInit() {
        this.loadData();
    }

   
    loadData(): void{
        this.comerciosSrv.getAll().subscribe(
            response => {
                this.items = response;
            },
            error => {
                console.log(error);
            }
        );
    }
 
}
