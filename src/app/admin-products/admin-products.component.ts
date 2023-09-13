import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['admin-products.component.css']
})
export class AdminProductsComponent {
  //pName: string;
  products;
  pName: any;
  pPrice: any;
  pImageUrl: any;
  pDescription: any;
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
  
  saveChanges(){
    const p = this.model.getProductsById(this.selectedProduct.id);
    p.name = this.selectedProduct.name;
    p.description = this.selectedProduct.description;
    p.price = this.selectedProduct.price;
    p.imageUrl = this.selectedProduct.imageUrl;
    this.selectedProduct = null;
    /** 
    this.updateSelectedProduct('name',name);
    this.updateSelectedProduct('description', description);
    this.updateSelectedProduct('price',price);
    this.updateSelectedProduct('imageUrl', imageUrl);*/
  }
}
