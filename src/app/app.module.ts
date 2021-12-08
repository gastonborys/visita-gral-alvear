import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage'
import { environment } from '../environments/environment';

//import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
    ],
    providers: [
        { 
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy,
        },
        {
            provide: AngularFirestore,
            useClass: AngularFirestore,
        },
        {
            provide: BUCKET,
            useValue: 'gs://visita-gral-alvear.appspot.com',
        },
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}
/*
        {
            provide: APP_BASE_HREF,
            useValue: '/visita'
        },
        */

