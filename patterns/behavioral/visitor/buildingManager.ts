import { Visitable } from "./visitable";
import { Visitor } from "./visitor";

export class BuildingManager implements Visitable{
    public price = 10000000;
    public numberOfEmployess = 30;


    someBuildingAction() {
        // not important ....
    }

    accept(v: Visitor): number {
        return v.visitBuilding(this)
    }
}