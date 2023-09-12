import { Component } from "@angular/core";
import { ProductRepository } from "./repository.model";
import { Product } from './product.model';
@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]
})

export class ProductComponent {
    model: ProductRepository = new ProductRepository();
    disabled=false;

    getClasses(id: number): string {
       let product = this.model.getProductsById(id);
       return (product.price <=1000 ? "bg-info" : "bg-secondary") + " m-2 p-2 text-white";
    }

    getClassMap(id: number): Object {
        let product = this.model.getProductsById(id);

        return {
            "bg-info": product.price <= 1000,
            "bg-secondary": product.price > 1000,
            "text-center text-white": product.name == "Samsung S6" 
        }
    }

    color: string = this.model.getProductsById(1).price <= 2000 ? "green" : "red";
    fontSize: string = "25px";

    getStyles(id: number) {
        let product = this.model.getProductsById(id);
        return {
            fontSize: "25px",
            color: product.price <=1000 ? "green" : "red"
        }
    }
}