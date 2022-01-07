import { Button } from './button';  

export class BoostrapButton implements Button {
    onClick(): void {
        console.log('Clicked on a bootstrap button'); 
    }
    getElement(): String {
        return '<button> BootstrapButton </button>'
    }
}