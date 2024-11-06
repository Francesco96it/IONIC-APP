import { Component, OnInit } from '@angular/core';
import { SharedModules } from 'src/app/shared.modules';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  standalone: true,
  imports:[...SharedModules]
})
export class FilterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
