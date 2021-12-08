import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InfoPageRoutingModule } from './info-routing.module';
import { InfoPage } from './info.page';

import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { BottomBarComponent } from '../../components/bottom-bar/bottom-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPageRoutingModule
  ],
  declarations: [InfoPage, TopBarComponent, BottomBarComponent]
})
export class InfoPageModule {}
