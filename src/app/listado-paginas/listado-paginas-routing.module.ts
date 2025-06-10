import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPaginasPage } from './listado-paginas.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoPaginasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoPaginasPageRoutingModule {}
