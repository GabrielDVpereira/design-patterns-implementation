import { Cost } from "./cost";

export class CostPerHour implements Cost {
    constructor(private readonly costPerHour: number){}

    calculateCost(hours: number) {
        return this.costPerHour * hours; 
    }  
}