export interface Builder {
    reset(): void; 
    setSeats(numberOfSeats: number): void; 
    setEngine(engine: 'normal' | 'sport'): void; 
    setTripComputer(hasTripComputer: boolean): void; 
    setGps(hasGps: boolean): void; 
    getProduct<T>() : T;
}