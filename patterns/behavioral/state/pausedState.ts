import { VideoState } from "./videoState";

export class PauseState implements VideoState {
    play(): void {
        console.log("Playing video...")
    }
    pause(): void {
        console.log("Video is already paused...")
    }
    
}