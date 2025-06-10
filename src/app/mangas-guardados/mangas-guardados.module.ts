import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangasGuardadosPageRoutingModule } from './mangas-guardados-routing.module';

import { MangasGuardadosPage } from './mangas-guardados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangasGuardadosPageRoutingModule
  ],
  declarations: [MangasGuardadosPage]
})
export class MangasGuardadosPageModule {}
