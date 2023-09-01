import { Coupon } from "../types/coupon";
import { DiscountStrategy } from "../types/discountStategy";

/**
 * Discount depending on the value 
 * of the cupom for value above prefined
 */

export class CupomDiscountStrategy implements DiscountStrategy {
    constructor(private readonly coupon: Coupon){}

    applyDiscount(value: number): number {
        return value;
    }
}