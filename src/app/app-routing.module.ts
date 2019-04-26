import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VoteComponent } from './vote/vote.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ClusterManagementComponent } from './admin/cluster-management/cluster-management.component';
import { ChartComponent } from './admin/chart/chart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo  : 'home'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminHomeComponent
  },
  {
    path: 'chart',
    component: ChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
