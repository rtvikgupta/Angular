import { Component, OnInit } from '@angular/core';
import { Center } from '../model/center';
import { DummydataService } from '../service/dummydata.service';
import { Test } from '../model/test';
import { Appointment } from '../model/appointment';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {

  service:DummydataService;
  centers:Array<Center>=[];
  tests:Array<Test>=[];
  center : Center;
  test : Test;
  dateTime:Date = new Date();
  id:number = 0;

  constructor(service:DummydataService) {
        this.service = service;
   }

  ngOnInit(): void {
    this.centers = this.service.getDummyData();
    
  }

  getTest(event){
    let centerId:String = event.target.value;
    this.centers.forEach(c => {
      if(c.id === centerId)
        {
          this.tests = c.tests
          this.center = c;
        }
    });
  }

  makeAppointment(form:any){
    let details = form.value;
    let center = this.center;
    let testId = details.test;
    this.tests.forEach(t => {
      if(t.id === testId)
        this.test = t;
    });
    this.dateTime = details.dateTime;
    let app = new Appointment(++this.id,this.dateTime,"501",center,this.test,false);
    this.service.addAppointment(app);
    console.log(this.service.fetchAppointments());
  }

}
