import { Component, OnInit } from '@angular/core';
import { DummydataService } from '../service/dummydata.service';
import { Appointment } from '../model/appointment';
import { ActivatedRoute, Router } from '@angular/router';
import { Center } from '../model/center';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {

  service:DummydataService;
  appointments:Array<Appointment>=[];
  centers:Array<Center>=[];
  showappointments:Array<Appointment>=[];
  centerName:String;

  constructor(service:DummydataService, private router:Router, private route:ActivatedRoute) {
      this.service = service;
   }

  ngOnInit(): void {
    this.centers = this.service.getDummyData();
    this.appointments = this.service.fetchAppointments();
    let centerId = this.route.snapshot.paramMap.get('centerId');
    this.appointments.forEach(a => {
      if(a.center.id == centerId && a.status == false)
      {
        this.centerName = a.center.name;
        this.showappointments.push(a);
      }
    });
  }
  
  approve(Id){
    let id = Id.value;
    this.appointments.forEach(a => {
      if(a.id == id)
      {
        a.status = true;
      }
    });
  }
}
