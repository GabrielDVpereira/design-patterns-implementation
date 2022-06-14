import { CatsCollection } from './catsCollection';
import { Iterator } from './iterator'

export class CatsIterator implements Iterator<string> {
    private position = 0
    constructor(
        private readonly collection: CatsCollection
    ){}

    current(): string {
        return this.collection.getItems()[this.position]
    }
    next(): string {
        const item = this.collection.getItems()[this.position]
        this.position++
        return item
    }
    key(): number {
        return this.position
    }
    valid(): boolean {
        return this.position < this.collection.getCount();
    }
}