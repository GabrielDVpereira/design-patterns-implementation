import { Button } from './button';  

export class MaterialButton implements Button {
    onClick(): void {
        console.log('Clicked on a material button'); 
    }
    getElement(): String {
        return '<button> MaterialButton </button>'
    }
}