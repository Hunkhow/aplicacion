import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: 'listado-paginas', loadChildren: () => import('../listado-paginas/listado-paginas.module').then(m => m.ListadoPaginasPageModule) },
      { path: 'mangas-guardados', loadChildren: () => import('../mangas-guardados/mangas-guardados.module').then(m => m.MangasGuardadosPageModule) },
      { path: 'mangas-pendientes', loadChildren: () => import('../mangas-pendientes/mangas-pendientes.module').then(m => m.MangasPendientesPageModule) },
      { path: 'perfil', loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule) },
      { path: '', redirectTo: 'listado-paginas', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
