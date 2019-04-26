import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VoteComponent } from './vote/vote.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ClusterManagementComponent } from './admin/cluster-management/cluster-management.component';
import { UserViewComponent } from './admin/user-view/user-view.component';
import { LogoutComponent } from './logout/logout.component';
import { SystemManagementComponent } from './admin/system-management/system-management.component';
import { ChartComponent } from './admin/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    VoteComponent,
    UserManagementComponent,
    AdminHomeComponent,
    ClusterManagementComponent,
    UserViewComponent,
    LogoutComponent,
    SystemManagementComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HighchartsChartModule
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
