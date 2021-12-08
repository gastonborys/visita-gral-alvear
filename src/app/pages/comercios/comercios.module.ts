import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComerciosPageRoutingModule } from './comercios-routing.module';
import { ComerciosPage } from './comercios.page';

import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { BottomBarComponent } from '../../components/bottom-bar/bottom-bar.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComerciosPageRoutingModule,
    ],
    declarations: [ComerciosPage,TopBarComponent, BottomBarComponent,]
        
})
export class ComerciosPageModule {}
