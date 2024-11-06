import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CarouselComponent } from './carousel.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CarouselComponent],
  imports: [CommonModule, IonicModule],
  exports: [CarouselComponent],
})
export class CarouselModule {}
