import { sleep } from "../../../utils/sleep";
import { LoadingState } from "./loadingState";
import { PauseState } from "./pausedState";
import { PlayingState } from "./playingState";
import { VideoPlyer } from "./videoPlayer";

class VideoPlayback {
    private videoPlayer: VideoPlyer  = new VideoPlyer(new LoadingState())
    async initVideo(){
        this.videoPlayer.play()
        sleep(500)
        this.videoPlayer.changeState(new PlayingState())
        this.videoPlayer.play()
        this.videoPlayer.pause()

        this.videoPlayer.changeState(new PauseState())
        this.videoPlayer.play()
    }
}

const video = new VideoPlayback()
video.initVideo()


