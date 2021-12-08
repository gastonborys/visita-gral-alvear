import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    },
    {
        path: 'mapa',
        loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
    },
    {
        path: 'secciones/:id',
        loadChildren: () => import('./pages/secciones/secciones.module').then( m => m.SeccionesPageModule)
    },
    {
        path: 'recorridos',
        loadChildren: () => import('./pages/recorridos/recorridos.module').then( m => m.RecorridosPageModule)
    },
    {
        path: 'info',
        loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
    },
    {
        path: 'comercios',
        loadChildren: () => import('./pages/comercios/comercios.module').then( m => m.ComerciosPageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
  {
    path: 'mas',
    loadChildren: () => import('./pages/mas/mas.module').then( m => m.MasPageModule)
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
