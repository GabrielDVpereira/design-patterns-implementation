import { Component } from "./component";

export interface Mediator {
    notify(sender: Component, event: string): void
}