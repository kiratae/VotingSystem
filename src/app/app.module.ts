import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HighchartsChartModule } from 'highcharts-angular';
import { DatePipe } from '@angular/common'
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

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
import { ScoreViewComponent } from './admin/score-view/score-view.component';
import { UserTypeManagementComponent } from './admin/user-type-management/user-type-management.component';
import { EventManagementComponent } from './scrum/event-management/event-management.component';
import { MoneyChartComponent } from './scrum/money-chart/money-chart.component';
import { DashboardComponent } from './scrum/dashboard/dashboard.component';

/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 8
		},
		vertical: {
			position: 'top',
			distance: 8,
			gap: 10
		}
	},
  theme: 'material', 
  behaviour: {
    autoHide: 3000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: false,
    stacking: 2
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

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
    ChartComponent,
    ScoreViewComponent,
    UserTypeManagementComponent,
    EventManagementComponent,
    MoneyChartComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    NgbModule,
    NgbAlertModule,
    NotifierModule.withConfig(customNotifierOptions)
    // AngularFontAwesomeModule
  ],
  providers: [ DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
