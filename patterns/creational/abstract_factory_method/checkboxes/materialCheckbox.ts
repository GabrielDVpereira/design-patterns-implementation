import { Checkbox } from './checkbox'; 

export class MaterialCheckbox implements Checkbox {
    onSelect(): void {
        console.log('onSelect material checkbox')
    }

    getElement(): String {
        return '<input type = "checkbox" name = "material checkbox" value = "material">'
    }
}