import { CupomDiscountStrategy } from "../strategies/cupomDiscountStrategy";
import { NewCustomerDiscountStrategy } from "../strategies/newCustomerDiscountStrategy";
import { NoDiscountStrategy } from "../strategies/noDiscountStrategy";
import { PremiumCustomerDiscountStategy } from "../strategies/premiumCustomerDiscountStrategy";
import { Customer } from "../types/client";
import { Cupom } from "../types/cupom";
import { Item } from "../types/item";

export class ShoppingCartWithStrategy {
    constructor(
        private readonly items: Item[], 
        private readonly customer: Customer,
        private readonly cupom?: Cupom, 
    ){}
    
    calculateTotal(): number {
        let total = this.items.reduce((acc, item) => item.price + acc, 0)
        
        const discountStategy = this.getDiscountStrategy(); 
        
        return discountStategy.applyDiscount(total);
    }


    getDiscountStrategy(){
        if(this.cupom) 
            return new CupomDiscountStrategy(this.cupom); 
        if(this.customer.type === 'premium_customer') 
            return new PremiumCustomerDiscountStategy()
        if(this.customer.type === 'new_customer') 
            return new NewCustomerDiscountStrategy()

        return new NoDiscountStrategy();
    }
}