import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public home = true;
  public articles = false;
  public add = false;
  public about = false;
  public products: Product[];

  public name = '';
  public price = '';
  public vat = '';
  public amount = '';

  ngOnInit(){
    this.products = new Array;
   }

  homeNav():void {
    this.home = true;
    this.articles = false;
    this.add = false;
    this.about = false;
  }

  articlesNav():void {
    this.home = false;
    this.articles = true;
    this.add = false;
    this.about = false;
  }

  addNav():void {
    this.home = false;
    this.articles = false;
    this.add = true;
    this.about = false;
  }

  aboutNav():void {
    this.home = false;
    this.articles = false;
    this.add = false;
    this.about = true;
  }

  addPoduct():void {
    const product = new ProductDTO();
    product.amount = this.amount;
    product.name = this.name;
    product.vat = this.vat;
    product.price = this.price;
    this.products.push(product);

    this.name = '';
    this.price = '';
    this.vat = '';
    this.amount = '';
  }

  remove(event: any):void {
    this.products = this.products.filter(product => product.name != event.target.name);
  }

}

class ProductDTO implements Product {
  id: number;
  name: string;
  price: string;
  vat: string;
  amount: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  vat: string;
  amount: string;
}



