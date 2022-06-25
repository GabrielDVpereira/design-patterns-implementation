import { VideoState } from "./videoState";

type videoQuality = '144p' | '360p' | '480p'

export class VideoPlyer {
    
    private videoState: VideoState; 
    private volume: number = 0; 
    private videoQuality: videoQuality = '360p'

    constructor(videoState: VideoState){
        this.videoState = videoState
    }

    changeState(state: VideoState) {
        this.videoState = state
    }

    play(): void {
        this.videoState.play()
    }

    pause(): void {
        this.videoState.pause()
    }

    volumeUp(){
        this.volume+=1
    }

    volumeDown(){
        if(this.volume){
            this.volume-=1
        }
    }

    changeQuality(quality: videoQuality){
        this.videoQuality = quality
    }
}