import { Checkbox } from './checkbox';  

export class NullCheckbox implements Checkbox {
    onSelect(): void {
   
    }
    getElement(): String {
        return ''
    }
}