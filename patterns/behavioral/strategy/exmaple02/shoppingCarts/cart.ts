import { Cart } from "../types/cart";
import { Customer } from "../types/client";
import { Coupon } from "../types/coupon";
import { Item } from "../types/item";

export class ShoppingCart implements Cart {
    constructor(
        private readonly customer: Customer,
        private readonly items: Item[], 
        private readonly coupon?: Coupon, 
    ){}
    
    calculateTotal(): number {
        let total = this.items.reduce((acc, item) => item.price + acc, 0)

        if(this.coupon && total >= this.coupon.minValue){
            return total - total * this.coupon.percentage; 
        } else if(this.customer.type === 'premium_customer'){
            if(total >= 150) return (total - total * 0.2);
            if(total >= 100) return (total - total * 0.1);
            if(total >= 50) return (total - total * 0.05);
        } else if(this.customer.type === 'new_customer'){
            return total - total * 0.1;
        }
        return total;
    }
}