import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MasPageRoutingModule } from './mas-routing.module';
import { MasPage } from './mas.page';

import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { BottomBarComponent } from '../../components/bottom-bar/bottom-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasPageRoutingModule
  ],
  declarations: [MasPage, TopBarComponent, BottomBarComponent]
})
export class MasPageModule {}
