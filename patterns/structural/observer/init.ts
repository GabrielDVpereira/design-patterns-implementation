import { PricesManager } from "./pricesManager";
import { IbmStock } from "./IbmStock";
import { AppleStock } from "./appleStock";
import { AmazonStock } from "./amazonStock";

const pricesManager = new PricesManager()
const imbStock = new IbmStock()
const appleStock = new AppleStock()
const amazonStock = new AmazonStock()

pricesManager.subscribe([imbStock, appleStock, amazonStock])

pricesManager.setAmazonPrice(10)
pricesManager.setIbmPrice(20)
pricesManager.setApplePrice(30)

console.log('------------ UNSUBUSCRIBE LISTENERS ----------------')

pricesManager.unsubscribe([appleStock, amazonStock])

pricesManager.setAmazonPrice(40)
pricesManager.setIbmPrice(50)
pricesManager.setApplePrice(60)




