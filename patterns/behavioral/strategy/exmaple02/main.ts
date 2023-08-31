import { MOCKED_ITEMS } from "./constants/items";
import { NEW_CUSTOMER, NORMAL_CUSTOMER, PREMIUM_CUSTOMER } from './constants/customers'
import { CHRISTMAS_CUPOM } from "./constants/christmasCupom";
import { ShoppingCart } from "./shoppingCarts/normal";
import { ShoppingCartWithStrategy } from "./shoppingCarts/good";


/** NORMAL */
const shoppingCartNewCustomer = new ShoppingCart(MOCKED_ITEMS, NEW_CUSTOMER); // new customer 
const shoppingCartNormalCustomer = new ShoppingCart(MOCKED_ITEMS, NORMAL_CUSTOMER); // normal customer 
const shoppingCartPremiumCustomer = new ShoppingCart(MOCKED_ITEMS, PREMIUM_CUSTOMER); // premium customer 
const shoppingCartCupom = new ShoppingCart(MOCKED_ITEMS, NEW_CUSTOMER, CHRISTMAS_CUPOM); // Cupom


/** STRATEGY */
const shoppingCartStrategyNewCustomer = new ShoppingCartWithStrategy(MOCKED_ITEMS, NEW_CUSTOMER); // new customer 
const shoppingCartStrategyNormalCustomer = new ShoppingCartWithStrategy(MOCKED_ITEMS, NORMAL_CUSTOMER); // normal customer 
const shoppingCartStrategyPremiumCustomer = new ShoppingCartWithStrategy(MOCKED_ITEMS, PREMIUM_CUSTOMER); // premium customer 
const shoppingCartStrategyCupom = new ShoppingCartWithStrategy(MOCKED_ITEMS, NEW_CUSTOMER, CHRISTMAS_CUPOM); // Cupom


console.log(`Normal - New Customer: ${shoppingCartNewCustomer.calculateTotal()}`)
console.log(`Normal - Normal Customer: ${shoppingCartNormalCustomer.calculateTotal()}`)
console.log(`Normal - Premium Customer: ${shoppingCartPremiumCustomer.calculateTotal()}`)
console.log(`Normal - Cupom: ${shoppingCartCupom.calculateTotal()}`)

console.log('\n')

console.log(`Strategy - New Customer: ${shoppingCartStrategyNewCustomer.calculateTotal()}`)
console.log(`Strategy - Normal Customer: ${shoppingCartStrategyNormalCustomer.calculateTotal()}`)
console.log(`Strategy - Premium Customer: ${shoppingCartStrategyPremiumCustomer.calculateTotal()}`)
console.log(`Strategy - Cupom: ${shoppingCartStrategyCupom.calculateTotal()}`)



