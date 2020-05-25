import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-copyrights',
  templateUrl: './footer-copyrights.component.html',
  styleUrls: ['./footer-copyrights.component.css']
})
export class FooterCopyrightsComponent implements OnInit {

  constructor() { }
  @Input() applicationType:string;
  ngOnInit() {
  }

}
