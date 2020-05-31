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
  currDiv: string = 'ProdList';

  constructor(private router : Router) { }  

  getPageNumbers(pageNumber = 1): number{
    this.pageNumber = pageNumber + 1
    return this.pageNumber
  };
  
  ngOnInit() {
  }

  //Close Button
  CloseProdList(event){
    this.router.navigate(['/db']); 
  }
  //Minimize the Product List
  ShowDiv(divVal: string) {
    this.currDiv = divVal;
    this.currDiv = 'ShowProdList';
  }
  ShowProdL(divVal: string){
    this.currDiv = 'ProdList';
  }

}
