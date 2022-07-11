import { BuildingManager } from "./buildingManager";
import { HouseManager } from "./houseManager";
import { StoreManager } from "./storeManager";
import { Visitor } from "./visitor";

export class PaymentCalculator implements Visitor {
    private STORE_MIN_WAGE = 1200; 
    private BUILDING_MIN_WAGE = 1100; 
    private HOUSE_MIN_WAGE = 900;

    visitStore(store: StoreManager): number {
        return store.numberOfEmployess * this.STORE_MIN_WAGE
    }
    visitHouse(house: HouseManager): number {
        return house.numberOfEmployess * this.HOUSE_MIN_WAGE
    }
    visitBuilding(building: BuildingManager): number {
        return building.numberOfEmployess * this.BUILDING_MIN_WAGE
    }
    
}