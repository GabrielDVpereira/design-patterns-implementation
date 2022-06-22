import { Iterator } from './iterator'; 

export interface Collection<T> {
    getIterator(): Iterator<T>
}