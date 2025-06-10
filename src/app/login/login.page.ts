import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { userData } from '../datos';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private alertCtrl: AlertController) {}

  async login() {
    const user = userData.users.find(
      (u) => u.user === this.username && u.pass === this.password
    );

    if (user) {
      // Puedes almacenar info en localStorage o pasarla a otro servicio
      console.log('Login correcto:', user);

      // Ir a home o donde quieras
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}