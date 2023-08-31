import { Cupom } from "../types/cupom";
import { DiscountStrategy } from "../types/discountStategy";

/**
 * Discount depending on the value 
 * of the cupom for value above prefined
 */

export class CupomDiscountStrategy implements DiscountStrategy {
    constructor(private readonly cupom: Cupom){}

    applyDiscount(value: number): number {
        if(value >= this.cupom.minValue){
            return value * this.cupom.percentage; 
        }    
        return value;
    }
}