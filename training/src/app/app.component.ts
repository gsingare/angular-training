import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html'
})

export class AppComponent {
  private users = {
    columns: [
      {label:"Name",key:"name"},
      {label:"Id",key:"id"},
      {label:"Dep",key:"dep"},
      {label:"",key:"true"}
    ],
    data: [
      {name:"Jyothsna",id:"4",dep:"it",view:true},
      {name:"Jyo",id:"6",dep:"it",view:true}
  ]
 }
 private companies= { 
  columns: [
    {label:"company name",key:"CompanyName"},
    {label:"Id",key:"id"},
    {label:"Dep",key:"dep"}
  ],
  data: [
    {CompanyName:"infotech", id:"4", dep:"it"},
    {CompanyName:"soft",id:"6",dep:"it"}
]
 }
}
