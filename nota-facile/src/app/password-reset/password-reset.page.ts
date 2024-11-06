import { Component } from '@angular/core';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage {

  email: string = '';

  constructor() { }
  resetPassword() {
    console.log('Password reset requested for:', this.email);
  }
}
