import { Component, OnInit } from '@angular/core';
import { userData } from '../datos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false
})
export class PerfilPage implements OnInit {

  nombreUsuario: string = '';
  totalGuardados: number = 0;
  totalPendientes: number = 0;

  ngOnInit() {
    // Simulamos que está logueado el primer usuario
    const usuario = userData.users[0];

    this.nombreUsuario = usuario.user;
    this.totalGuardados = usuario.mangasGuardados.length;
    this.totalPendientes = usuario.mangasPendientes.length;
  }
}