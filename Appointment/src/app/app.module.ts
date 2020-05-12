import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummydataService } from './service/dummydata.service';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DummydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
