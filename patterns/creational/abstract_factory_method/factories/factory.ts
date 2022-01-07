import { Button } from '../buttons/button'
import { Checkbox } from '../checkboxes/checkbox'; 

export interface Factory {
    createButton(): Button; 
    createCheckbox(): Checkbox;
}