import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SeccionesPageRoutingModule } from './secciones-routing.module';
import { SeccionesPage } from './secciones.page';

import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { BottomBarComponent } from '../../components/bottom-bar/bottom-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeccionesPageRoutingModule
  ],
  declarations: [
      SeccionesPage,
      TopBarComponent,
      BottomBarComponent,
  ]
})
export class SeccionesPageModule {}
