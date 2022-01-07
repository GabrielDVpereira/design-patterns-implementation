import { BoostrapButton } from "../buttons/bootstrapButton";
import { Button } from "../buttons/button";
import { BootstrapCheckbox } from "../checkboxes/bootstrapCheckbox";
import { Checkbox } from "../checkboxes/checkbox";
import { Factory } from "./factory";

export class BootstrapFactory implements Factory{
    createButton(): Button {
        return new BoostrapButton(); 
    }
    createCheckbox(): Checkbox {
        return new BootstrapCheckbox(); 
    }
}