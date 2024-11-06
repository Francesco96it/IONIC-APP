import { Component, OnInit } from '@angular/core';
import { SharedModules } from 'src/app/shared.modules';
import { addIcons } from 'ionicons';
import { arrowBack } from "ionicons/icons";

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  imports:[...SharedModules],
  standalone:true
})
export class BackButtonComponent  implements OnInit {

  constructor() { 
    addIcons({
      arrowBack
  })
  }

  ngOnInit() {}

}
