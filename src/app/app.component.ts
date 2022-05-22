import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  email ="";
  firstname="";
  lastname = "";
  pwd="";
  mobNo = "";
  address = "";

  submitted = false;

  constructor(){

  }

  submitForm(){
    this.submitted = true;
    console.log("Email",this.email);
    console.log("FirstName",this.firstname);
    console.log("Lastname",this.lastname);
    console.log("Password",this.pwd);
    console.log("Mobile No",this.mobNo);
    console.log("Address",this.address);

  }












































  
}
