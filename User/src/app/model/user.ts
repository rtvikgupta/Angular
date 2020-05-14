export class User {
    userId:String;
    userPassword:String;
    userName:String;
    contactNo:String;
    userEmail:String;
    age:number;
    gender:String;

    constructor(userId:String,userPassword:String,userName:String,contactNo:String,userEmail:String,age:number,gender:String){
        this.userId = userId;
        this.userPassword = userPassword;
        this.userName = userName;
        this.contactNo = contactNo;
        this.userEmail = userEmail;
        this.age = age;
        this.gender =gender;
    }
}
