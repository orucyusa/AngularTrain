import { Component } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['admin-products.component.css']
})
export class AdminProductsComponent {
  products;
  model: ProductRepository;
  selectedProduct: any;
  constructor() {
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
  }

  getSelected(product: Product): boolean {
    return product.name == this.selectedProduct;
  }

}
