import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['admin-products.component.css']
})
export class AdminProductsComponent {
  @ViewChild('pName') pName: ElementRef;

  products;
  model: ProductRepository;
  selectedProduct: Product | null = null;
  constructor() {
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
  }

  getSelected(product: Product): boolean {
    return product == this.selectedProduct;
  }
  
  editProduct(product: Product) {
      this.selectedProduct = product;
  }
  updateSelectedProduct(propertyName: string, newValue: string): void {
    this.selectedProduct[propertyName] = newValue;
  }

  saveChanges(name, description, price, imageUrl){
    this.updateSelectedProduct('description', description);            
    this.updateSelectedProduct('name', name);
    this.updateSelectedProduct('price', price);
    this.updateSelectedProduct('imageUrl', imageUrl);
  }
}
