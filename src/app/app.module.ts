import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterCopyrightsComponent } from './footer-copyrights/footer-copyrights.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes, Router } from '@angular/router';

const routes: Routes = [
  { path: 'db', component: DashboardComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FooterCopyrightsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
  
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private router : Router) { }  
  
  ngOnInit() {
    this.router.navigate(['/Dashboard']); 
  }
}

