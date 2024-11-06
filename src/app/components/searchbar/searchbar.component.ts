import { Component } from '@angular/core';
import { IonSearchbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { micOutline, trashBin } from 'ionicons/icons';

@Component({
  selector: 'app-search',
  templateUrl: 'searchbar.component.html',
  styleUrls: ['searchbar.component.scss'],
  standalone: true,
  imports: [IonSearchbar, IonButton, IonIcon],
})
export class SearchbarComponent {
  constructor() {
    addIcons({ micOutline, trashBin });
  }
  onMicClick() {
    console.log('Mic clicked');
  }
}
