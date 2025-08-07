import {Component, OnInit} from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';
import {ProductService} from '../../services/product/product.service';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-cart',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent
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
