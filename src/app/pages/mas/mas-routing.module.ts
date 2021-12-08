import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasPage } from './mas.page';

const routes: Routes = [
  {
    path: '',
    component: MasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasPageRoutingModule {}
