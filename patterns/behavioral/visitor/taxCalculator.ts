import { BuildingManager } from "./buildingManager";
import { HouseManager } from "./houseManager";
import { StoreManager } from "./storeManager";
import { Visitor } from "./visitor";

export class TaxtCalculator implements Visitor {
    private HOUSE_TAX_CONST = 0.1; 
    private STORE_TAX_CONST = 0.25; 
    private BUILDING_TAX_CONST = 1.15;

    visitStore(store: StoreManager): number {
        return store.price * this.STORE_TAX_CONST
    }
    visitHouse(house: HouseManager): number {
        return house.price * this.HOUSE_TAX_CONST
    }
    visitBuilding(building: BuildingManager): number {
        return building.price * this.BUILDING_TAX_CONST
    }
}