import { NumberGenerator } from './number_generator'; 

const number = new NumberGenerator({min: 10, max: 100}); 
console.log(number); 

const numberMin =  NumberGenerator.min(10); 
console.log(numberMin); 

const numberMax  = NumberGenerator.max(100); 
console.log(numberMax); 
