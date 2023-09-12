import { Component } from "@angular/core";
import { ProductRepository } from "./repository.model";
import { Product } from './product.model';
@Component({
    selector: "app",
    templateUrl: 'product.component.html',
    styleUrls: ["product.component.css"]
})

export class ProductComponent {

   model: ProductRepository = new ProductRepository();
   
   addProduct(deneme) {
    this.model.addProduct(new Product(this.model.getProductCount() + 1, deneme.value, "iyi telefon", "1.jpeg",5000));
   }
   deleteProduct(product){
    this.model.deleteProduct(product);
   }
   updateProduct(product, deneme?) {
    this.model.updateProduct(product, deneme);
   }
}