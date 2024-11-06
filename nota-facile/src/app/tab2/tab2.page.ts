import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor() {}

  onSignUp() {
    // Basic validation: Check if passwords match
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Add more validation logic if necessary (e.g., check if email is valid)
    if (this.fullName && this.email && this.password && this.confirmPassword) {
      // Sign-up logic here (e.g., send data to a backend API)
      console.log('Sign up successful', {
        fullName: this.fullName,
        email: this.email,
        password: this.password,
      });
      alert('Sign up successful!');
    } else {
      alert('Please fill in all fields.');
    }
  }

  goToLogin() {
    // Logic to navigate to the login page (if applicable)
    console.log('Redirecting to login...');
  }
}


