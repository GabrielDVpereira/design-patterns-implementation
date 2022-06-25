import { VideoState } from "./videoState";

export class LoadingState implements VideoState {
    play(): void {
        console.log("Can't play while loading...")
    }
    pause(): void {
        console.log("Can't pause while loading...")
    }
    
}