import { Component, OnInit } from '@angular/core';
import { Urls } from '../../services/global';


@Component({
    selector: 'app-info',
    templateUrl: './info.page.html',
    styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

    public imageURL:    string;
    public item:        any;
    constructor() { 
        this.imageURL   = Urls.img_url;
        this.item       = {imagen: 'f9cc6664879ccd4a7fae07c9ef94acb0d2cb6b5b.jpg'};
    }

    ngOnInit() {
    }

}
