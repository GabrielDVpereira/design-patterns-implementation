import { BuildingManager } from "./buildingManager";
import { HouseManager } from "./houseManager";
import { StoreManager } from "./storeManager";

export interface Visitor {
    visitStore(store: StoreManager): number;
    visitHouse(house: HouseManager): number;
    visitBuilding(building: BuildingManager): number;
}