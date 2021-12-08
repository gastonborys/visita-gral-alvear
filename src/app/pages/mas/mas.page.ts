import { Component, OnInit } from '@angular/core';
import { Urls } from '../../services/global';

@Component({
    selector: 'app-mas',
    templateUrl: './mas.page.html',
    styleUrls: ['./mas.page.scss'],
})
export class MasPage implements OnInit {

    public imageURL:    string;
    public item:        any;
    constructor() { 
        this.imageURL   = Urls.img_url;
        this.item       = {imagen: 'sample.jpg'};
    }

    ngOnInit() {
    }
}
