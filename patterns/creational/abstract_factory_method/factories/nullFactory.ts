import { Button } from "../buttons/button";
import { Checkbox } from "../checkboxes/checkbox";
import { Factory } from "./factory";
import { NullCheckbox } from "../checkboxes/nullCheckbox";
import { NullButton } from "../buttons/nullButton";

export class NullFactory implements Factory{
    createButton(): Button {
        return new NullButton(); 
    }
    createCheckbox(): Checkbox {
        return new NullCheckbox(); 
    }
}