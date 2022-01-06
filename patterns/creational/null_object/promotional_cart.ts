import { Cart, Items, Promotion } from './cart'; 

export class PromotionalCart implements Cart {
    
    constructor(
         readonly items: Items[], 
         readonly promotion: Promotion, 
    ){}

    getTotal(): number {
        return this.items.reduce((acc, item) => item.price + acc, 0) * this.promotion.value;
    }
}