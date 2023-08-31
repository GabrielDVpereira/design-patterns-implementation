import { Customer } from "../types/client";
import { Cupom } from "../types/cupom";
import { Item } from "../types/item";

export class ShoppingCart {
    constructor(
        private readonly items: Item[], 
        private readonly customer: Customer,
        private readonly cupom?: Cupom, 
    ){}
    
    calculateTotal(): number {
        let total = this.items.reduce((acc, item) => item.price + acc, 0)

        if(this.cupom){
            if(total >= this.cupom.minValue){
                return total * this.cupom.percentage; 
            }
        } else if(this.customer.type === 'premium_customer'){
            if(total >= 150) return total * 0.8;
            if(total >= 100) return total * 0.9;
            if(total >= 50) return total * 0.95;
        } else if(this.customer.type === 'new_customer'){
            return total * 0.9;
        }
        return total;
    }
}