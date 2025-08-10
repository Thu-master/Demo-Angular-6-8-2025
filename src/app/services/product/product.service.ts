import { Injectable } from '@angular/core';
import {ProductModel} from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  productList: ProductModel[]=[
    {
      id: "1",
      name: "Alasdair",
      price:50000,
      imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/LUNCH-NANBAN.jpg?v=LNDKjg",
      quantity: 0,
    },
    {
      id: "2",
      name: "Alasdair",
      price:50000,
      imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/D-RICE-ROASTED.jpg?v=LNDKjg",
      quantity: 0,
    },
    {
      id: "3",
      name: "Alasdair",
      price:50000,
      imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/MIGAXUXI-DOI.jpg?v=LNDKjg",
      quantity: 0,
    },
    {
      id: "4",
      name: "Alasdair",
      price:50000,
      imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/1MINH.jpg?v=LNDKjg",
      quantity: 0,
    },
    {
      id: "5",
      name: "Alasdair",
      price:50000,
      imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/D.BUCKET5.jpg?v=LNDKjg",
      quantity: 0,
    },
    {
      id: "6",
      name: "Alasdair",
      price:50000,
      imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/D.BUCKET5.jpg?v=LNDKjg",
      quantity: 0,
    },
    {
      id: "7",
      name: "Alasdair",
      price:50000,
      imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/D.BUCKET5.jpg?v=LNDKjg",
      quantity: 0,
    },
    {
      id: "8",
      name: "Alasdair",
      price:50000,
      imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/D.BUCKET5.jpg?v=LNDKjg",
      quantity: 0,
    },
    {
      id: "9",
      name: "Alasdair",
      price:50000,
      imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/D.BUCKET5.jpg?v=LNDKjg",
      quantity: 0,
    }
  ]
  getDetailProduct(id: string) :ProductModel {
    let product = this.productList.find(item => item.id === id);
    if (product) {
      return product;
    }    else {
      return {} as ProductModel;
    }
  }
  cartList: ProductModel[] = [];
addProductToCart( id: string){
    let product = this.productList.find(item => item.id === id);
    if (product) {
      let productInCart =this.cartList.find(itemCart => product.id === itemCart.id);
      if(productInCart){
        product.quantity += 1;
      }else{
        product.quantity += 1;
        this.cartList.push(product);
      }
    }
    console.log(this.cartList);
}
}
