import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl : "/app.component.html"


})

export class AppComponent {
  private users = {
    columns : [
      {label : "First Name", key : "firstName"},
      {label : "Last Name",key : "lastName"},
      {label : "Address", key: "address"},
      {label : "Phnno",key :"phnno"}
    ],
    data :
[
  {firstName : "Ravali", lastName : "s", address : "hyd"},
  {firstName : "Arun", lastName : "s"},
  {firstName : "Swetha", lastName : "s", phnno : "9676165336"}

] }
private carmodels = {
columns : [
  {label : "Car Name", key : "carName"},
  {label : "Model",key : "model"},
  {label : "Year", key: "year"}
  
],
data :
[
{carName : "Maruthi", model : "Dzire", year : "2015"},
{carName : "Honda", model : "City", year : "2018"},
{carName : "Hundai", model : "i20", year : "2017"}

] }}



 
