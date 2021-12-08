import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageAnalyseComponent } from './page-stat/page-analyse/page-analyse.component';
import { PageStatComponent } from './page-stat/page-stat.component';

const routes: Routes = [
  {
    path: 'page-login',
    component: PageLoginComponent,
  },
  {
    path: 'page-stat',
    component: PageStatComponent,

    children: [
      {
        path: 'page-analyse',
        component: PageAnalyseComponent,
      },
      { path: '**', redirectTo: 'page-analyse' },
    ],
  },
  { path: '**', redirectTo: 'page-login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
