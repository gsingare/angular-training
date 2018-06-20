import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  private users = {
    columns: [
      { label: "First Name", key: "firstName" },
      { label: "Last Name", key: 'lastName' },
      { label: "Pet Name", key: "petName" },
      { label: "Address", key: "address" }
    ],
    data: [
      { firstName: "Govardhan", lastName: "singareddy", petName: "Gov" },
      { firstName: "Mohan", lastName: "Pon", address: "Fremont" },
      { firstName: "Rvali" },
    ]
  }

  private companies = {
    columns: [
      { label: "Company Name", key: "companyName" },
      { label: "Address", key: 'address' }
    ],
    data: [
      { companyName: "Company1", address: "Address1" },
      { companyName: "Company2", address: "Address2" },
      { companyName: "Company3", address: "Address3" }
    ]
  }
}
