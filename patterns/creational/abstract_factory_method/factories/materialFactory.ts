import { MaterialButton } from "../buttons/materialButton";
import { Button } from "../buttons/button";
import { MaterialCheckbox } from "../checkboxes/materialCheckbox";
import { Checkbox } from "../checkboxes/checkbox";
import { Factory } from "./factory";

export class MaterialFactory implements Factory{
    createButton(): Button {
        return new MaterialButton(); 
    }
    createCheckbox(): Checkbox {
        return new MaterialCheckbox(); 
    }
}