import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  private router: Router;
  // private auth: AuthService;

  constructor(routerAngular: Router, private auth: AuthService) {
    this.router = routerAngular;
  }

  ngOnInit(): void {}

  naviguerPageStat() {
    this.auth.login();

    this.router.navigate(['page-stat']);
    console.log();
  }
}
