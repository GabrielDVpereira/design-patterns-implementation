import { DiscountStrategy } from "../types/discountStategy";

export class NoDiscountStrategy implements DiscountStrategy {
    applyDiscount(value: number): number {
        return value;
    }
}