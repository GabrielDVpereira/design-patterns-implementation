import { BuildingManager } from "./buildingManager";
import { HouseManager } from "./houseManager";
import { PaymentCalculator } from "./paymentCalculator";
import { StoreManager } from "./storeManager";
import { TaxtCalculator } from "./taxCalculator";

const taxCalculator = new TaxtCalculator()

const houseManager  = new HouseManager()
const storeManager = new StoreManager()
const buildingManager = new BuildingManager()


console.log(`house tax: ${houseManager.accept(taxCalculator)}`)
console.log(`store tax: ${storeManager.accept(taxCalculator)}`)
console.log(`building tax: ${buildingManager.accept(taxCalculator)}`)

// Switching the visitor to one that calculates employee's payments

const paymentCalculator = new PaymentCalculator()

console.log(`house total payment: ${houseManager.accept(paymentCalculator)}`)
console.log(`store total payment: ${storeManager.accept(paymentCalculator)}`)
console.log(`building total payment: ${buildingManager.accept(paymentCalculator)}`)

