import { Component, Input } from '@angular/core';
import { IonButton, IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-circle-buttons',
  templateUrl: './circle-buttons.component.html',
  styleUrls: ['./circle-buttons.component.scss'],
  imports: [IonButton, IonIcon, IonLabel],
  standalone: true,
})
export class CircleButtonsComponent {
  @Input() label: string = '';
  @Input() iconName: string = '';
}
