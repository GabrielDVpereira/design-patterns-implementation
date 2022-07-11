import { Visitable } from "./visitable";
import { Visitor } from "./visitor";

export class StoreManager implements Visitable {
    public price = 1000000;
    public numberOfEmployess = 30;

    someStoreAction(){
        // not important ...
    }

    accept(v: Visitor): number {
        return v.visitStore(this)
    }
}