import { SimpleDataSource } from "./datasource.model";
import { Product } from "./product.model";

export class ProductRepository {
    private dataSource: SimpleDataSource;
    private products: Product[];
    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach(p=> this.products.push(p));
    }
    getProducts(): Product [] {
        return this.products;
    }
    getProductsById(id: number): Product {
        return this.products.find(p => p.id == id);
    }
    getProductCount(): number {
        return this.products.length;
    }
    addProduct(product: Product){
        this.products.push(product);
    }
    deleteProduct(product: Product){
        let index = this.products.indexOf(product);
        this.products.splice(index, 1);
    }
    updateProduct(product: Product, deneme) {
        if (deneme.value.length > 0 && !isNaN(deneme.value.length)) {
            let index = this.products.indexOf(product);
            this.products[index].name = deneme.value;
        } else {
            onmessageerror = new alert('Bir şeyler yazar mısın?');
        } 
    }
}