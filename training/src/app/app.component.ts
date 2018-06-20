import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html'
})

export class AppComponent {
  private users = {
    columns : [
      {label : "First Name", key: "firstName"},
      {label : "Last Name", key: "lastName"},
      {label : "ID", key: "id"},
      {}
    ],
    
    data : [    
      {firstName: "Pooja", lastName: "k", id: "100",view: "true", edit: "true", delete: "true" },
      {firstName: "lakshmi", lastName: "poojitha", id:"110", view: "true", edit: "true", delete: "true"},
      {firstName: "Govardhan", lastName: "s", id: "120",  view: "true", edit: "true", delete: "true"}
    ]
  }  
} 


