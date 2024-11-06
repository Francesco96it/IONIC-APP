import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(
    private router: Router,
    private navCtrl: NavController) { }

  

  goToBack() {
    this.navCtrl.back();
  }
  goToRegister() {
    this.router.navigate(['register']);
  }
  goToHome() {
    this.navCtrl.navigateRoot(['tabs']);
  }
  forgotPassword() {
    this.router.navigate(['password-reset']); 
  }

}
