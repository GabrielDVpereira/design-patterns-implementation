import { Checkbox } from './checkbox'; 

export class BootstrapCheckbox implements Checkbox {
    onSelect(): void {
        console.log('onSelect bootstrap checkbox')
    }

    getElement(): String {
        return '<input type = "checkbox" name = "bootstrap checkbox" value = "bootstrap">'
    }
}