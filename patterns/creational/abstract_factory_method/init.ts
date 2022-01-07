import { Button } from "./buttons/button";
import { NullButton } from "./buttons/nullButton";
import { Checkbox } from "./checkboxes/checkbox";
import { NullCheckbox } from "./checkboxes/nullCheckbox";
import { BootstrapFactory } from "./factories/bootstrapFactory";

import { Factory } from "./factories/factory";
import { MaterialFactory } from "./factories/materialFactory";
import { NullFactory } from "./factories/nullFactory";

class App { 
    public button: Button = new NullButton(); 
    public checkbox: Checkbox = new NullCheckbox(); 
    private readonly uiFactory: Factory; 

    constructor(factory: Factory){
        this.uiFactory = factory; 
    }

    createUi(): void {
        this.button = this.uiFactory.createButton(); 
        this.checkbox = this.uiFactory.createCheckbox(); 
    }
}


 enum UiConfig {
     bootstrap, 
     material
 } 


export class AppConfiguration {
    main() : void {
        const config = this.getAppUiConfig(); 
        let factory: Factory = new NullFactory(); 

        if(config === UiConfig.bootstrap){
            factory = new BootstrapFactory(); 
        } else if(config === UiConfig.material){
            factory = new MaterialFactory(); 
        }

        const app = new App(factory); 
        app.createUi();
    }

    getAppUiConfig(): UiConfig {
        const configs  = [UiConfig.bootstrap, UiConfig.material]
        return configs[Math.floor(Math.random())]
    }
}


