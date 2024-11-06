import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CircleButtonsComponent } from './circle-buttons.component';

@NgModule({
  declarations: [CircleButtonsComponent],
  imports: [CommonModule, IonicModule],
  exports: [CircleButtonsComponent],
})
export class CustomButtonModule {}
