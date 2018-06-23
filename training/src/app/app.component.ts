import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl : "./app.component.html"
})

export class AppComponent {
  private users = {
    buttons: [
      {label:"submit"},
      {label:"click"},
    ]
  }
/*
    data: [
      {name:"divya",id:"3",dep:"cs",view:true},
      {name:"dp",id:"9",dep:"cs",view:true}
  ]
 
 private companies= { 
  columns: [
    {label:"company name",key:"CompanyName"},
    {label:"Id",key:"id"},
    {label:"Dep",key:"dep"}
  ],
  data: [
    {CompanyName:"capgemini", id:"3", dep:"cs"},
    {CompanyName:"idc",id:"9",dep:"cs"}
]
}*/
}
