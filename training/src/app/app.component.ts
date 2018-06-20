import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html'
})

export class AppComponent {
  private users = {
    columns : [
      {label : "First Name", key: "firstName"},
      {label : "Last Name", key: "lastName"},
      {label : "Pet Name", key: "petName"},
      {label : "Address", key: "address"},
      {}
    ],
    
    data : [    
      {firstName: "Pooja", lastName: "k", petName: "poo",  property1: "view", property2: "delete"},
      {firstName: "lakshmi", lastName: "poojitha", address:"NJ", delete: "true"},
      {firstName: "Govardhan", lastName: "s",  view: "true"}
    ]
  }
  private companies = {
    columns : [
      {label : "Company name", key: "companyName"},
      {label : "Address", key: "address"},
      {label : "Zip Code", key: "zip"}
        ],
    
    data : [    
      {companyName: "RDtech", address: "nj"},
      {companyName: "RDtech", address: "nj", zip: "08817"},
      {companyName: "RDtech", address: "nj"}
    ]
  }
  
}


