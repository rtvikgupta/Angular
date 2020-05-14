import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User;
  flag:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  submit(userform:any) {
      let details = userform.value;
      let name = details.name;
      let password = details.password;
      let email = details.email;
      let contact = details.contact;
      let age = details.age;
      let gender = details.gender;
      this.user = new User("101",password,name,contact,email,age,gender);
      this.flag = true;
  }

}
