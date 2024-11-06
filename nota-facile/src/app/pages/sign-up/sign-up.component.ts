import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonContent,
  IonText,
  IonButton,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [IonContent,
    IonText,
    IonButton,]
})
export class SignUpComponent {
  constructor(private router: Router) {}

  navigateToForm() {
    this.router.navigate(['/form']);
  }
}
