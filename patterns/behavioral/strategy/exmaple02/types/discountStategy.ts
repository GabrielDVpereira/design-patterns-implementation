export interface DiscountStrategy {
    applyDiscount(value: number): number;
} 