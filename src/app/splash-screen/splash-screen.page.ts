import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: 'splash-screen.page.html',
  styleUrls: ['splash-screen.page.scss'],
  standalone: true,
})
export class SplashScreenPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/tabs/home']);
    }, 2000);
  }
}
