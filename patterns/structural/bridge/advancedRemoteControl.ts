import { Device } from "./device";
import { RemoteControl } from "./remoteControl";

export class AdvancedRemoteControl extends RemoteControl {
    constructor(device: Device){
        super(device); 
    }

    mute(){
        super.device.setVolume(0);
    }
}