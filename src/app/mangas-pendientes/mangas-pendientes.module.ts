import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangasPendientesPageRoutingModule } from './mangas-pendientes-routing.module';

import { MangasPendientesPage } from './mangas-pendientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangasPendientesPageRoutingModule
  ],
  declarations: [MangasPendientesPage]
})
export class MangasPendientesPageModule {}
