import { Injectable } from '@angular/core';
import { Center } from '../model/center';
import { Test } from '../model/test';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class DummydataService {
  centers: Array<Center> = [];
  appointments:Array<Appointment> = [];

  constructor() {
    let center1 = new Center("101","Vedanta",[new Test("1011","Bp"),new Test("1012","Sugar"),new Test("1013","Blood")]);
    let center2 = new Center("102","AIIMS",[new Test("1021","Blood"),new Test("1022","Mri"),new Test("1023","Bp")]);
    let center3 = new Center("103","Apollo",[new Test("1031","Mri"),new Test("1032","Corona"),new Test("1033","Thyroid")]);
    this.centers.push(center1);
    this.centers.push(center2);
    this.centers.push(center3);
  }

  getDummyData()
  {
    return this.centers;
  }

  addAppointment(appointment:Appointment)
  {
    this.appointments.push(appointment);
  }

  fetchAppointments()
  {
    return this.appointments;
  }


  
}
