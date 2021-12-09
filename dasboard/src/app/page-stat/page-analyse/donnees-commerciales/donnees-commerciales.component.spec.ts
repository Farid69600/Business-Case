import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneesCommercialesComponent } from './donnees-commerciales.component';

describe('DonneesCommercialesComponent', () => {
  let component: DonneesCommercialesComponent;
  let fixture: ComponentFixture<DonneesCommercialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonneesCommercialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneesCommercialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
