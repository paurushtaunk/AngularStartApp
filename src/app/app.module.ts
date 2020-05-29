import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterCopyrightsComponent } from './footer-copyrights/footer-copyrights.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { StartAppRoutingComponent } from './start-app-routing/start-app-routing.component';

const routes: Routes = [
  { path: 'db', component: DashboardComponent },
  { path: 'ProdList' , component: ProductListComponent},
  // { path: 'foo' , component: FooterCopyrightsComponent},
  { path: 'Homescreen' , component: StartAppRoutingComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FooterCopyrightsComponent,
    DashboardComponent,
    StartAppRoutingComponent
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
    this.router.navigate(['/Homescreen']); 
  }
}

