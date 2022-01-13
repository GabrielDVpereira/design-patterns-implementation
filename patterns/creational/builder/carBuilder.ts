import { Builder } from "./builder";
import { Car } from "./car";

export class CarBuilder implements Builder {
    private car: Car = new Car();

    constructor(){
        this.reset();
    }

    reset(): void {
        this.car = new Car(); 
    }

    setSeats(numberOfSeats: number): void {
        this.car.seats = numberOfSeats; 
    }

    setEngine(engine: "normal" | "sport"): void {
        this.car.engine = engine; 
    }

    setTripComputer(hasTripComputer: boolean): void {
        this.car.tripComputer = hasTripComputer; 
    }

    setGps(hasGps: boolean): void {
        this.car.gps = hasGps;
    }
    
    getProduct<T>(): T {
        const product  = this.car; 
        this.reset(); 
        return product as unknown as T; 
    }
}