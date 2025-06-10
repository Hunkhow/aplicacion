import { Component, OnInit } from '@angular/core';
import { userData } from '../datos';

@Component({
  selector: 'app-mangas-pendientes',
  templateUrl: './mangas-pendientes.page.html',
  styleUrls: ['./mangas-pendientes.page.scss'],
  standalone: false
})
export class MangasPendientesPage implements OnInit {

  mangasPendientes: any[] = [];

  constructor() { }

  ngOnInit() {
    // Obtener el usuario
    const usuario = userData.users.find(u => u.user === 'leonardo');

    if (usuario) {
      // Filtrar los mangas pendientes con base en los IDs guardados por el usuario
      this.mangasPendientes = userData.mangasPendientes.filter(manga => 
        usuario.mangasPendientes.includes(manga.id)
      );
    }
  }
}