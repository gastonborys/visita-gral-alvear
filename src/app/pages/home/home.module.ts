import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { BottomBarComponent } from '../../components/bottom-bar/bottom-bar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
    ],
    declarations: [HomePage, TopBarComponent, BottomBarComponent],
})
export class HomePageModule {}
