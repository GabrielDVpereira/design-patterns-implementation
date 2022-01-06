import { Cart, Items } from './cart'; 

export class RegularCart implements Cart {
    
    constructor(
         readonly items: Items[], 
    ){}

    getTotal(): number {
        return this.items.reduce((acc, item) => item.price + acc, 0);
    }
}