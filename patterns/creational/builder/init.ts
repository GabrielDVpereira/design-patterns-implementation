import { Builder } from "./builder";
import { Car } from "./car";
import { CarBuilder } from "./carBuilder";
import { Director } from "./director";

class Application {
    makeCar() {
        const director: Director = new Director(); 
        const carBuilder: Builder = new CarBuilder(); 

        director.makeSportCar(carBuilder); 
        
        const sportCar = carBuilder.getProduct<Car>();
        console.log(sportCar);
    }
}