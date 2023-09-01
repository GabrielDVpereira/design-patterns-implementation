import { DiscountStrategy } from "../types/discountStategy";

/**
 * For special customers, we apply: 
 *  - 5% discount for items >= 50 USD
 *  - 10% discount for items >= 100 USD
 *  - 20% discount for items >= 150 USD
 */

const MIN_DISCOUNT = 0.05;
const NORMAL_DISCOUNT = 0.1; 
const MAX_DISCOUNT = 0.2;


export class PremiumCustomerDiscountStategy implements DiscountStrategy {
    applyDiscount(value: number): number {
        return value;
    }
}