import { Component, OnInit } from '@angular/core';
import { BackButtonComponent } from 'src/app/components/back-button/back-button.component';
import { SharedModules } from 'src/app/shared.modules';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { search } from "ionicons/icons";
import { addIcons } from 'ionicons';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
  standalone:true,
  imports:[BackButtonComponent, ...SharedModules, FilterComponent, ProductCardComponent, ProductListComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductListingComponent  implements OnInit {

  constructor() { 
    addIcons({
      search
    })
  }

  ngOnInit() {}

}
