import { MOCKED_ITEMS } from "./constants/items";
import { NEW_CUSTOMER, NORMAL_CUSTOMER, PREMIUM_CUSTOMER } from './constants/customers'
import { CHRISTMAS_COUPON } from "./constants/christmasCoupon";
import { ShoppingCart } from "./shoppingCarts/cart";
import { Item } from "./types/item";
import { Customer } from "./types/client";
import { Coupon } from "./types/coupon";
import { Cart } from "./types/cart";

/**
 * Shopping System
 *  - Customer 
 *      - new customer: 10% Discount
 *      - premium customer: from 5 to 20% discount
 *                  - 5% discount from 50 to 99 USD
 *                  - 10% discount from 100 to 149 USD
 *                  - 20% discount for >= 150 USD
 *      - normal customer: no discount
 *   - Coupon
 *      - discount varies according to the coupon, and it's applied to a minimum total
 */

class Client {

    constructor(
        private readonly customer: Customer,
        private readonly items: Item[], 
        private readonly coupon?: Coupon, 
    ){}

    cart?: Cart;

    shop(){
        this.cart = new ShoppingCart(this.customer, this.items, this.coupon);
    }

    checkout(){
        const total = this.cart!.calculateTotal()
        console.log(`TOTAL TO PAY: ${total}`);
    }
}


const client = new Client(NEW_CUSTOMER, MOCKED_ITEMS, CHRISTMAS_COUPON); 

/** Customer shops */
client.shop()

/** Customer pays */
client.checkout()



