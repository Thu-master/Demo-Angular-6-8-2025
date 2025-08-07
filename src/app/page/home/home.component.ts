import { Component } from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product/product.service';
import {MatButton} from '@angular/material/button';
import {constructorChecks} from '@angular/cdk/schematics';
import {CardComponent} from '../../component/card/card.component';

@Component({
  selector: 'app-home',
  imports: [
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
//   constructor(
//     private activatedRoute: ActivatedRoute,
//   ) {}

  // constructor(
    // private router:Router,
    // private productService: ProductService,
  // )
  productHome: ProductModel[] = []
  constructor(
    private router: Router,
    //tim vao
    private productService: ProductService,
  ) {
    //console.log(this.productService.productList);
    this.productHome = this.productService.productList;
    console.log(this.productHome)
  }
// productList: ProductModel[]=[
//   {
//     id: "1",
//     name: "Alasdair",
//     price:50000,
//     imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/LUNCH-NANBAN.jpg?v=LNDKjg",
//   },
//   {
//     id: "2",
//     name: "Alasdair",
//     price:50000,
//     imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/D-RICE-ROASTED.jpg?v=LNDKjg",
//   },
//   {
//     id: "3",
//     name: "Alasdair",
//     price:50000,
//     imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/MIGAXUXI-DOI.jpg?v=LNDKjg",
//   },
//   {
//     id: "4",
//     name: "Alasdair",
//     price:50000,
//     imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/1MINH.jpg?v=LNDKjg",
//   },
//   {
//     id: "5",
//     name: "Alasdair",
//     price:50000,
//     imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/D.BUCKET5.jpg?v=LNDKjg",
//   },
//   {
//     id: "6",
//     name: "Alasdair",
//     price:50000,
//     imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/D.BUCKET5.jpg?v=LNDKjg",
//   },
//   {
//     id: "7",
//     name: "Alasdair",
//     price:50000,
//     imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/D.BUCKET5.jpg?v=LNDKjg",
//   },
//   {
//     id: "8",
//     name: "Alasdair",
//     price:50000,
//     imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/D.BUCKET5.jpg?v=LNDKjg",
//   },
//   {
//     id: "9",
//     name: "Alasdair",
//     price:50000,
//     imageUrl:"https://static.kfcvietnam.com.vn/images/items/lg/D.BUCKET5.jpg?v=LNDKjg",
//   }
// ]
  /*
  * naviga toi router duoc khai bao constructr o tren*/
  // navigateToDetails(id: string) {
  // this.router.navigate(['detail',id]).then();
  // }
}
