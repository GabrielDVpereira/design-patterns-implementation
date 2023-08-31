import { DiscountStrategy } from "../types/discountStategy";

/**
 * 10% of for any price
 */

const NEW_CUSTOMER_DISCOUNT = 0.9;

export class NewCustomerDiscountStrategy implements DiscountStrategy{
    applyDiscount(value: number): number {
        return value * NEW_CUSTOMER_DISCOUNT;
    }
}