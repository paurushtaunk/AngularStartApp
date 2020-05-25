import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <body>
    <div>
      <app-product-list></app-product-list>
    </div>
  </body>
  <footer>
    <app-footer-copyrights [applicationType]="applicationType"></app-footer-copyrights>
  </footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularStartApp';
  public applicationType:string = "Sample POC app";
}
