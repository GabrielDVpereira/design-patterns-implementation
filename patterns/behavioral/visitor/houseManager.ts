import { Visitable } from "./visitable";
import { Visitor } from "./visitor";

export class HouseManager implements Visitable{
    public price = 100000;
    public numberOfEmployess = 2;


    someHouseAction(){
        // not important ...
    }

    accept(v: Visitor): number {
        return v.visitHouse(this)
    }
}