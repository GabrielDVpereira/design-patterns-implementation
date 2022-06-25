import { VideoState } from "./videoState";

export class PlayingState implements VideoState {
    play(): void {
        console.log("Video is already being played...")
    }
    pause(): void {
        console.log("Pausing video...")
    }
    
}