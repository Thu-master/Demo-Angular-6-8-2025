import { Component } from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product/product.service';
import {MatButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';

@Component({
  selector: 'app-cart',
  imports: [

    MatButton,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,

  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {


  shopping: ProductModel[] = []
  constructor(private productService: ProductService) {
    this.shopping = this.productService.cartList
    console.log(this.shopping)
  }
}
