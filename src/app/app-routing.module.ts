import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './component/alert/alert.component';
import { CardTemlateComponent } from './component/card-temlate/card-temlate.component';
import { FormComponent } from './component/form/form.component';
import { ListGroupComponent } from './component/list-group/list-group.component';
import { ModalComponent } from './component/modal/modal.component';
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
  { path:'attendance', component:AttendanceComponent },
  { path:'component', children:[
    { path:'alert', component:AlertComponent },
    { path:'form', component:FormComponent },
    { path:'card-template',component:CardTemlateComponent },
    { path:'modal',component:ModalComponent },
    { path:'list-group',component:ListGroupComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
