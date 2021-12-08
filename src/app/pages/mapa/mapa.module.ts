import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MapaPageRoutingModule } from './mapa-routing.module';
import { MapaPage } from './mapa.page';

import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { BottomBarComponent } from '../../components/bottom-bar/bottom-bar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MapaPageRoutingModule
    ],
    declarations: [MapaPage, TopBarComponent, BottomBarComponent]
})
export class MapaPageModule {}
