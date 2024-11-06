import { Component } from '@angular/core';
import { addIcons } from 'ionicons';

import {
  logoApple,
  settingsSharp,
  star,
  qrCode,
  qrCodeOutline,
  card,
  wallet,
  addCircle,
  bus,
  bagHandle,
  fastFood,
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    addIcons({
      qrCodeOutline,
      card,
      wallet,
      addCircle,
      logoApple,
      settingsSharp,
      star,
      qrCode,
      bus,
      bagHandle,
      fastFood,
    });
  }
}
