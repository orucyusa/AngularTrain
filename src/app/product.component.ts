import { Component } from "@angular/core";
import { ProductRepository } from "./repository.model";
import { Product } from './product.model';
@Component({
    selector: "app",
    template: `
                <input [(ngModel)] = "email" (keyup.enter) = "onKeyUp()" />
                <br>
                <span> {{email}} </span>
    `,  
    styleUrls: ["product.component.css"]
})

export class ProductComponent {
    model: ProductRepository = new ProductRepository();

    email = "email@sadikturan.com";

    onKeyUp() {
        //if($event.keyCode === 13) { console.log($event.target.value); }
        console.log(this.email);
    }

}