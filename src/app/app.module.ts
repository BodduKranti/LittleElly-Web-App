import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { LeaveApplicationComponent } from './pages/leave-application/leave-application.component';
import { AssignedBatchesComponent } from './pages/assigned-batches/assigned-batches.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { LeftSidebarComponent } from './component/left-sidebar/left-sidebar.component';
import { ProfileComponent } from './component/profile/profile.component';
import { CardsComponent } from './component/cards/cards.component';
import { DashboardCardTableComponent } from './component/dashboard-card-table/dashboard-card-table.component';
import { BounchedChequesComponent } from './component/Dashboard/bounched-cheques/bounched-cheques.component';
import { TodayPDCComponent } from './component/Dashboard/today-pdc/today-pdc.component';
import { TodayEnquiryComponent } from './component/Dashboard/today-enquiry/today-enquiry.component';
import { TodayBirthdayComponent } from './component/Dashboard/today-birthday/today-birthday.component';
import { LeaveApplicationDashboardComponent } from './component/Dashboard/leave-application-dashboard/leave-application-dashboard.component';
import { TopHeaderComponent } from './component/top-header/top-header.component';
import { AlertComponent } from './component/alert/alert.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdmissionsComponent,
    LeaveApplicationComponent,
    AssignedBatchesComponent,
    AttendanceComponent,
    LeftSidebarComponent,
    ProfileComponent,
    CardsComponent,
    DashboardCardTableComponent,
    BounchedChequesComponent,
    TodayPDCComponent,
    TodayEnquiryComponent,
    TodayBirthdayComponent,
    LeaveApplicationDashboardComponent,
    TopHeaderComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
