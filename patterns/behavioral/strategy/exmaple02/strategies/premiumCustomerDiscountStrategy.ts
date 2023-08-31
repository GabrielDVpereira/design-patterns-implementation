import { DiscountStrategy } from "../types/discountStategy";

/**
 * For special customers, we apply: 
 *  - 5% discount for items >= 50 USD
 *  - 10% discount for items >= 100 USD
 *  - 20% discount for items >= 150 USD
 */

const MIN_DISCOUNT = 0.95;
const NORMAL_DISCOUNT = 0.9; 
const MAX_DISCOUNT = 0.8;


export class PremiumCustomerDiscountStategy implements DiscountStrategy {
    applyDiscount(value: number): number {
        if(value >= 150) return value * MAX_DISCOUNT;
        if(value >= 100) return value * NORMAL_DISCOUNT;
        if(value >= 50) return value * MIN_DISCOUNT;
        return value;
    }
}