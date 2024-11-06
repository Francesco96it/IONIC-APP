import { Component } from '@angular/core';
import { IonHeader, IonText, IonButton, IonLabel, IonInput, IonItem, IonContent, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonText,
    IonButton,
    IonLabel,
    IonInput,
    IonItem,
    IonContent,
    IonTitle,
    IonToolbar,
    FormsModule,          // Required for using [(ngModel)]
    ReactiveFormsModule,   // Optional: for reactive forms if needed
  ],
})
export class FormComponent {
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
