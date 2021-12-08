import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  private router: Router;

  constructor(routerAngular: Router) {
    this.router = routerAngular;
  }

  ngOnInit(): void {}

  naviguerPageStat() {
    this.router.navigate(['page-stat']);
    console.log();
  }
}
