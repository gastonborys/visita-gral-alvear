import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecorridosPageRoutingModule } from './recorridos-routing.module';
import { RecorridosPage } from './recorridos.page';

import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { BottomBarComponent } from '../../components/bottom-bar/bottom-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecorridosPageRoutingModule
  ],
  declarations: [RecorridosPage, TopBarComponent, BottomBarComponent]
})
export class RecorridosPageModule {}
