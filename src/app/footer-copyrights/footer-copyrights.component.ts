import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-copyrights',
  templateUrl: './footer-copyrights.component.html',
  styleUrls: ['./footer-copyrights.component.css']
})
export class FooterCopyrightsComponent implements OnInit {

  constructor() { }
  public applicationType:string = "Sample POC app";
  
  ngOnInit() {
  }

}
