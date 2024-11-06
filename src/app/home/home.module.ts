import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SearchbarComponent } from '../components/searchbar/searchbar.component';
import { CircleButtonsComponent } from 'src/app/components/circle-buttons/circle-buttons.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomePageRoutingModule,
    SearchbarComponent,
    CircleButtonsComponent,
    CarouselComponent,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
