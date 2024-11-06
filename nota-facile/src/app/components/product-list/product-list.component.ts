import { Component, OnInit } from '@angular/core';
import { SharedModules } from 'src/app/shared.modules';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone:true,
  imports: [...SharedModules]
})
export class ProductListComponent  implements OnInit {

  constructor() { }
  ngOnInit() {}

}
