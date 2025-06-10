import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoPaginasPageRoutingModule } from './listado-paginas-routing.module';

import { ListadoPaginasPage } from './listado-paginas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPaginasPageRoutingModule
  ],
  declarations: [ListadoPaginasPage]
})
export class ListadoPaginasPageModule {}
