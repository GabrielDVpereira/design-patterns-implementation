export class Items {
   constructor(public name: string, public price: number){}
}

export interface Cart {
    items: Items[]; 
    getTotal(): number; 
}

export interface Promotion {
    value: number;
    name: string; 
}