import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummydataService } from './service/dummydata.service';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { ApproveAppointmentComponent } from './approve-appointment/approve-appointment.component';
import { UserAppointmentComponent } from './user-appointment/user-appointment.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeAppointmentComponent,
    ApproveAppointmentComponent,
    UserAppointmentComponent,
    AppointmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DummydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
