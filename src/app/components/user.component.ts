import { Component } from '@angular/core';


@Component({
  selector: 'user',
   template: `
    <span>Personal Details</span>
  
  <h1>Hi: {{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Door number:</strong> {{address.doorNum}}</p>
  <p><strong>Street:</strong> {{address.street}}</p>
  <p><strong>City:</strong> {{address.city}}</p>
  <p><strong>State:</strong> {{address.state}}</p>
        `,
   //templateUrl: './user.component.html',
})
export class UserComponent {
  title = 'My first angular app!!!';
  name: String;
  email: String;
  address: address;
  
  constructor(){
    
    this.name = 'john samy';
    this.email = 'john@gmail.com';
    this.address = {
        doorNum: 'No 4',
        street: 'hallen killer st',
        city: 'chennai',
        state: 'TN'
  }
  this.address.city= 'banglore'
  }
}
interface address {
    doorNum: String;
    street: String;
    city: String;
    state: String;
  }
