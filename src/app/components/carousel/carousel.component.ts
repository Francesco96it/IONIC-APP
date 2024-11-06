import { register } from 'swiper/element/bundle';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

register(); // Register Swiper's custom elements globally

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this to recognize custom elements like <swiper-container>
})
export class CarouselComponent {}
