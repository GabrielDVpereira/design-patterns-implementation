import { Cart, Items } from './cart'; 

export class NullCart implements Cart {
    readonly items: Items[] = [];  
    
    getTotal(): number {
        return 0;
    }
}