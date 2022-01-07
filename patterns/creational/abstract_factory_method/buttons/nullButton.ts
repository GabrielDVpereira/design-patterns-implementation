import { Button } from './button';  

export class NullButton implements Button {
    onClick(): void {
    }
    getElement(): String {
        return ''
    }
}