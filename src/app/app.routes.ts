import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./page/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./page/detail/detail.component').then(m => m.DetailComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./component/cart/cart.component').then(m => m.CartComponent),
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '**',
    loadComponent: () => import('./page/not-found/not-found.component').then(m => m.NotFoundComponent),
  }
];

//setup routing
/* 1. app.routes: tao duong path va tro toi cac component theo duong dan path do
*  2. them the router outlet vao file app.component.html
*  3. test routing
*
*  4. */
