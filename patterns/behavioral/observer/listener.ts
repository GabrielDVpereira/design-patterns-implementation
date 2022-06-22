export interface Listener<T = any> {
    update(data: T): void
}