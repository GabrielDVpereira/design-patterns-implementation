import { Builder } from "./builder";
import { NullBuilder } from "./nullBuilder";

// Using director is optional 
export class Director {
    makeSportCar(builder: Builder): void {
        builder.reset();
        builder.setSeats(2); 
        builder.setEngine('sport'); 
        builder.setGps(true); 
        builder.setTripComputer(true); 
    }

    makeSuvCar(builder: Builder): void {
        builder.reset();
        builder.setSeats(6); 
        builder.setEngine('normal'); 
        builder.setGps(true); 
        builder.setTripComputer(true); 
    }
}