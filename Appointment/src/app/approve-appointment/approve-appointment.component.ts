import { Component, OnInit } from '@angular/core';
import { DummydataService } from '../service/dummydata.service';
import { Appointment } from '../model/appointment';
import { Center } from '../model/center';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve-appointment',
  templateUrl: './approve-appointment.component.html',
  styleUrls: ['./approve-appointment.component.css']
})
export class ApproveAppointmentComponent implements OnInit {

  service:DummydataService;
  centers:Array<Center>=[];

  constructor(service:DummydataService, private router:Router) {
      this.service = service;
   }

  ngOnInit(): void {
    this.centers = this.service.getDummyData();
  }

  getAppointments(event){
    this.router.navigate(['approveappointment/details',event.target.value]);
  }

}
