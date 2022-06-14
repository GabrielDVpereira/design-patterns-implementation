import { Collection } from './collection'
import { Iterator } from './iterator';

class Item {
    constructor(
          public value?: string,
          public next?: Item,
    ){}
}

export class DogsCollection implements Collection<string> {

    private size = 0 
    constructor(private dogs?: Item){}

    getNext(){
        this.dogs = this.dogs?.next
        return this.dogs
    }

    getCurrent(){
        return this.dogs
    }

    getCount(): number {
        return this.size
    }

    addItem(item: string): void {
        this.size++
        if(!this.dogs){
            this.dogs = new Item(item)
            return
        }

        this.dogs.next = new Item(item)
    }
    getIterator(): Iterator<string> {
        throw new Error('Method not implemented.');
    }
    
}