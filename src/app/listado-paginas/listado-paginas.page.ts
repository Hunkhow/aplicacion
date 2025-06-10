import { Component, OnInit } from '@angular/core';
import { userData } from '../datos';

@Component({
  selector: 'app-listado-paginas',
  templateUrl: './listado-paginas.page.html',
  styleUrls: ['./listado-paginas.page.scss'],
  standalone: false
})
export class ListadoPaginasPage implements OnInit {

  paginasNombres: string[] = [];

  ngOnInit() {
    const paginasSet = new Set<string>();

    userData.mangasGuardados.forEach(manga => paginasSet.add(manga.pagina));
    userData.mangasPendientes.forEach(manga => paginasSet.add(manga.pagina));

    this.paginasNombres = Array.from(paginasSet);
  }
}