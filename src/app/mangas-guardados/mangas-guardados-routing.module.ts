import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangasGuardadosPage } from './mangas-guardados.page';

const routes: Routes = [
  {
    path: '',
    component: MangasGuardadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangasGuardadosPageRoutingModule {}
