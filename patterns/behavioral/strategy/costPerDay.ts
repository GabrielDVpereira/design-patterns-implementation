import { Cost } from "./cost";

export class CostPerDay implements Cost {
    constructor(private readonly costPerDay: number){}

    calculateCost(hours: number) {
        return this.costPerDay * (hours / 24 ); 
    }  
}