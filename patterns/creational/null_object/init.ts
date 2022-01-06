import { Cart, Items, Promotion } from './cart'; 
import { NullCart } from './null_cart';
import { PromotionalCart } from './promotional_cart';
import { RegularCart } from './regular_cart';

class Store {
    cart: Cart = new NullCart(); 

    createCart(items: Items[], promotion?: Promotion) {
        this.cart  = promotion  ? new PromotionalCart(items, promotion) : new RegularCart(items); 
    }

    finishBuy(): number {
        return this.cart.getTotal(); // we don't have to check for the cart  being null since we have null object
    }
}