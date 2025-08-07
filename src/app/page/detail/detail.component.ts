import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product/product.service';
import {ProductModel} from '../../models/product.model';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-detail',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatButton,
    MatCardActions,
    MatCardImage
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
productDetail!: ProductModel
  /*
  * Tuc la ban dau ben app.routes.ts chon duong da path
  *  1 trang index dung chung cho cac componnet cho nen ben file app.routes.ts la de tao path tro toi component
  *  ben nay khai bai contructor de detail lay id san pham tu home(lay tren url) */
constructor(private activatedRoute: ActivatedRoute,
            private productService: ProductService,) {
  let{id} = this.activatedRoute.snapshot.params;
  console.log(id)
  this.productDetail = this.productService.getDetailProduct(id)
  console.log(this.productDetail)
}

}
