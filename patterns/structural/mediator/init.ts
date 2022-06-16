import { ComponentA } from "./componentA";
import { ComponentB } from "./componentB";
import { ConcreteMediator } from "./concreteMediator";

const componentA = new ComponentA()
const componentB = new ComponentB()

const mediator = new ConcreteMediator(componentA, componentB)

componentA.execute()