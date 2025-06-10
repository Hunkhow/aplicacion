import { Component, OnInit } from '@angular/core';
import { userData } from '../datos';

@Component({
  selector: 'app-mangas-guardados',
  templateUrl: './mangas-guardados.page.html',
  styleUrls: ['./mangas-guardados.page.scss'],
  standalone: false
})
export class MangasGuardadosPage implements OnInit {

  mangasGuardados: any[] = [];

  constructor() { }

  ngOnInit() {
    // Aquí sacamos los mangas guardados del usuario "leonardo"
    // Primero obtener la lista de IDs de mangas guardados del usuario
    const usuario = userData.users.find(u => u.user === 'leonardo');

    if (usuario) {
      // Luego filtrar los mangasGuardados para que solo aparezcan los que el usuario tiene guardados
      this.mangasGuardados = userData.mangasGuardados.filter(manga => 
        usuario.mangasGuardados.includes(manga.id)
      );
    }
  }
}