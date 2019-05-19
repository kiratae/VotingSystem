import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ChartComponent } from './admin/chart/chart.component';
import { MoneyChartComponent } from './scrum/money-chart/money-chart.component';
import { EventManagementComponent } from './scrum/event-management/event-management.component';
import { DashboardComponent } from './scrum/dashboard/dashboard.component';
import { ScrumBarComponent } from './scrum/scrum-bar/scrum-bar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
  },
  {
    path: 'money_line_chart',
    component: MoneyChartComponent
  },
  {
    path: 'money_bar_chart',
    component: ScrumBarComponent
  },
  {
    path: 'money_dashboard',
    component: DashboardComponent
  },
  {
    path: 'scrum',
    component: EventManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
