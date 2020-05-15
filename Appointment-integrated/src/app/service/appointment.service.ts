import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseAppointment } from '../model/response-appointment';
import { RequestAppointment } from '../model/request-appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  client:HttpClient;
  constructor(client:HttpClient) { 
    this.client = client;
  }

  baseUrl = "http://localhost:8581/appointments" ;

  /**
   * fires post request to server with appointment as body
   * @param a 
   */
  addAppointment(a:ResponseAppointment):Observable<ResponseAppointment>
  {
    let url= this.baseUrl+"/add";
    let result:Observable<ResponseAppointment>= this.client.post<ResponseAppointment>(url,a);
    return result;
  }

  /**
   * fires get request to server to fetch all appointments for center-id mentioned in url
   * @param id of center 
   */
  fetchAppointmentsByCenter(id:String)
  {
    let url = this.baseUrl+"/getByCenter/"+id;
    let result:Observable<RequestAppointment[]> =this.client.get<RequestAppointment[]>(url);
    return result;
  }

  /**
   * fires get request to server to fetch all appointments for user-id mentioned in url
   * @param id of user
   */
  fetchAppointmentsByUser(id:String)
  {
    let url = this.baseUrl+"/getByUser/"+id;
    let result:Observable<RequestAppointment[]> =this.client.get<RequestAppointment[]>(url);
    return result;
  }

  /**
   * fires get request to server to fetch all appointments for centerid mentioned in url
   * @param id of center 
   */
  approveAppointment(id:String)
  {
    let url = this.baseUrl+"/approve/"+id;
    let result:Observable<RequestAppointment> =this.client.put<RequestAppointment>(url,id);
    return result;
  }

}
