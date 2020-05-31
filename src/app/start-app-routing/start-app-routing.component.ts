import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-app-routing',
  templateUrl: './start-app-routing.component.html',
  styleUrls: ['./start-app-routing.component.css']
})
export class StartAppRoutingComponent implements OnInit {

  LoginStatus: string = "NotLoggedin"; 
  constructor() { }

  ngOnInit() { }

  Login(Status: string){
    this.LoginStatus = "Loggedin";
  }
}
