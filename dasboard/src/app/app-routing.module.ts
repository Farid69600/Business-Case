import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageStatComponent } from './page-stat/page-stat.component';

const routes: Routes = [
  { path: 'page-login', component: PageLoginComponent },
  { path: 'page-stat', component: PageStatComponent },
  { path: '**', redirectTo: 'page-login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
