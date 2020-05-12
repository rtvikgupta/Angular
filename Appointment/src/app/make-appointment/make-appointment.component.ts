import { Component, OnInit } from '@angular/core';
import { Center } from '../model/center';
import { DummydataService } from '../service/dummydata.service';
import { Test } from '../model/test';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {

  service:DummydataService;
  centers:Array<Center>=[];
  tests:Array<Test>=[];
  centerId:String;
  dateTime:Date = new Date();

  constructor(service:DummydataService) {
        this.service = service;
   }

  ngOnInit(): void {
    this.centers = this.service.getDummyData();
    
  }

  getTest(event){
    this.centerId = event.target.value;
    this.centers.forEach(c => {
      if(c.id === this.centerId)
        {
          this.tests = c.tests
        }
    });
  }

}
