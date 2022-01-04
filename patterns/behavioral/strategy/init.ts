import { Cost } from "./cost";
import { CostPerHour } from "./costPerHour";
import { CostPerDay } from "./costPerDay";

class CostCalculator {
    constructor(private cost: Cost){}
    
    setCost(cost: Cost): void{
        this.cost = cost;
    }

    getCostByHours(hours: number): void {
         console.log(this.cost.calculateCost(hours));
    }
}

const COST_PER_HOUR = 30; 
const COST_PER_DAY = 400; 
const TOTAL_TIME_IN_HOUR = 5000; 

const costByHour = new CostPerHour(COST_PER_HOUR)
const costCalculator  = new CostCalculator(costByHour); 

costCalculator.getCostByHours(TOTAL_TIME_IN_HOUR); 

const costByDay = new CostPerDay(COST_PER_DAY);

costCalculator.setCost(costByDay); 
costCalculator.getCostByHours(TOTAL_TIME_IN_HOUR);

