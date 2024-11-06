import { Component } from '@angular/core';

import { addIcons } from 'ionicons';
import {
  wallet,
  home,
  notifications,
  person,
  reader,
  walletOutline,
  personOutline,
  notificationsOutline,
  readerOutline,
} from 'ionicons/icons';
import {
  IonTabs,
  IonTab,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tab.component.html',
  styleUrls: ['tab.component.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonTab,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
  ],
})
export class TabComponent {
  constructor() {
    addIcons({
      walletOutline,
      personOutline,
      home,
      notificationsOutline,
      readerOutline,
      wallet,
      person,
      notifications,
      reader,
    });
  }
}
