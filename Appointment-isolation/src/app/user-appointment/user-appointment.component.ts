import { Component, OnInit } from '@angular/core';
import { DummydataService } from '../service/dummydata.service';
import { Appointment } from '../model/appointment';

@Component({
  selector: 'app-user-appointment',
  templateUrl: './user-appointment.component.html',
  styleUrls: ['./user-appointment.component.css']
})
export class UserAppointmentComponent implements OnInit {

  service:DummydataService;
  appointments:Array<Appointment>=[];
  showappointments:Array<Appointment>=[];
  constructor(service:DummydataService) {
    this.service = service;
   }

  ngOnInit(): void {
    this.appointments = this.service.fetchAppointments();
    this.appointments.forEach(a => {
      if(a.userId === "501")
        this.showappointments.push(a);
    });
  }

}
