import { Builder } from "./builder";

export class NullBuilder implements Builder {
    constructor(){
        this.reset();
    }
    reset(): void {
    }
    setSeats(numberOfSeats: number): void {
    }

    setEngine(engine: "normal" | "sport"): void {
    }

    setTripComputer(hasTripComputer: boolean): void {
    }
    setGps(hasGps: boolean): void {
    }

    getProduct<T>(): T {
        return {} as T;
    }
}