import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { ApproveAppointmentComponent } from './approve-appointment/approve-appointment.component';
import { UserAppointmentComponent } from './user-appointment/user-appointment.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';


const routes: Routes = [
  {path:'makeappointment', component: MakeAppointmentComponent},
  {path: 'approveappointment', component: ApproveAppointmentComponent,children:[{path: 'details/:centerId', component: AppointmentDetailsComponent}]},
  {path: 'userappointment',component: UserAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
