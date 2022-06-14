import { CatsIterator } from "./catsIterator";
import { Collection } from "./collection";
import { Iterator } from "./iterator";

export class CatsCollection implements Collection<string> {
    private cats: string[] = []

    getItems(): string[] {
        return this.cats
    }

    getCount(): number {
        return this.cats.length
    }
    addItem(item: string): void {
        this.cats.push(item)
    }
    getIterator(): Iterator<string> {
        return new CatsIterator(this)
    }
}