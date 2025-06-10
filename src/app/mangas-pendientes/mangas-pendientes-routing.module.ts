import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangasPendientesPage } from './mangas-pendientes.page';

const routes: Routes = [
  {
    path: '',
    component: MangasPendientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangasPendientesPageRoutingModule {}
