import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-donnees-commerciales',
  templateUrl: './donnees-commerciales.component.html',
  styleUrls: ['./donnees-commerciales.component.css'],
})
export class DonneesCommercialesComponent implements OnInit {
  @Input() public nom!: string;
  @Input() public valeur!: string;

  constructor() {}

  ngOnInit(): void {}
}
