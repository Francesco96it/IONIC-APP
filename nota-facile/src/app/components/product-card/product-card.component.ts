import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModules } from 'src/app/shared.modules';
import {register} from 'swiper/element/bundle';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';

register();

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone:true,
  imports:[...SharedModules],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductCardComponent  implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true, 
  };
  constructor() { 
    addIcons({
      star
    })
  }

  ngOnInit() {}

}
