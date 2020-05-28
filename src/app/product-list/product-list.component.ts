import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  pageNumber:number = 1;

  constructor(private router : Router) { }  

  getPageNumbers(pageNumber = 1): number{
    this.pageNumber = pageNumber + 1
    return this.pageNumber
  };
  
  ngOnInit() {
    // this.router.navigate(['/Dashboard']); 
  }

}
