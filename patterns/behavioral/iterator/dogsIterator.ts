import { DogsCollection } from './dogsCollection';
import { Iterator } from './iterator'

export class DogsIterator implements Iterator<string> {
    private current_key:number = 0
    constructor(
        private readonly collection: DogsCollection
    ){

    }

    current(): string {
        return this.collection.getCurrent()?.value || ''
    }

    next(): string {
        this.current_key++
        return this.collection.getNext()?.value || ''
    }
    key(): number {
        return this.current_key
    }
    valid(): boolean {
        return !!this.collection.getCurrent()
    }
}