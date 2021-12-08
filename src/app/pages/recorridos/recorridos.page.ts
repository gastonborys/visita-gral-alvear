import { Component, OnInit } from '@angular/core';
import { Urls } from '../../services/global';
import { RecorridosService } from '../../services/recorridos.service';
import { Recorridos } from '../../models/recorridos';

@Component({
    selector: 'app-recorridos',
    templateUrl: './recorridos.page.html',
    styleUrls: ['./recorridos.page.scss'],
})
export class RecorridosPage implements OnInit {

    public imageURL:    string;
    public items:       Recorridos[];
    public numbers:     any;

    constructor(
        private recorridosSrv: RecorridosService
    ) { 
        this.imageURL   = Urls.img_url;
    }

    ngOnInit() {
        this.loadData();
    }

    loadData(): void{
        this.recorridosSrv.getAll().subscribe(
            response => {
                this.items = response;
            },
            error => {
                console.log(error);
            }
        );
    }

}
