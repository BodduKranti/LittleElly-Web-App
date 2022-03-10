import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { AssignedBatchesComponent } from './pages/assigned-batches/assigned-batches.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeaveApplicationComponent } from './pages/leave-application/leave-application.component';

const routes: Routes = [
  { path:'',component:DashboardComponent },
  { path:'admissions', component:AdmissionsComponent },
  { path:'leave-application', component:LeaveApplicationComponent },
  { path:'assigned-batches', component:AssignedBatchesComponent },
  { path:'attendance', component:AttendanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
