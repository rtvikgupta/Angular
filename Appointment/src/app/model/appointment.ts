import { Center } from './center';
import { Test } from './test';

export class Appointment {
    id:number;
    dateTime: Date;
    userId: String;
    center: Center;
    test: Test;
    status:boolean;

    constructor(id:number,dateTime:Date,userId:String,center:Center,test:Test,status:boolean){
        this.id = id;
        this.dateTime = dateTime;
        this.userId = userId;
        this.center = center;
        this.test = test;
        this.status = status;
    }
}
