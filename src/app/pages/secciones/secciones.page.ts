import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeccionItem } from 'src/app/models/secciones';
import { SeccionesService } from 'src/app/services/secciones.service';
import { Urls } from '../../services/global';

@Component({
    selector: 'app-secciones',
    templateUrl: './secciones.page.html',
    styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage implements OnInit {

    public id:          string;
    public data:        SeccionItem;
    public imageURL:    string;
    constructor(
        private _route: ActivatedRoute,
        private _seccionesSrv: SeccionesService,
    ) 
    {

        this.imageURL = Urls.img_url;

        this._route.params.subscribe(params => {
            let uid = params['id'];
            if (uid == undefined)
            {
                this.id = "0";
            }
            else
            {
                this.id = uid;
                this.loadData(this.id);
            }
        });
    }

    ngOnInit(): void {

    }

    loadData(id: string): void{
        this._seccionesSrv.getSeccionesItems(id).subscribe(
            response => {
                this.data = response;
            },
            error => {
                console.log(error);
            }
        );
    }

}
