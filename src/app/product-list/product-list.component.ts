import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  pageNumber:number = 1;

  constructor() {  };

  getPageNumbers(pageNumber = 1): number{
    this.pageNumber = pageNumber + 1
    return this.pageNumber
  };
  
  ngOnInit() {
  }

}
