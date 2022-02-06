import { Device } from "./device";

export class RemoteControl {
    constructor(protected device: Device){}
    togglePower(){
        if(this.device.isEnabled()){
            this.device.setDisabled(); 
        } else{   
            this.device.setEnabled(); 
        }
    }

    volumeUp(){
        const currentVolume = this.device.getVolume(); 
        this.device.setVolume(currentVolume  + 10); 
    }

    volumeDown(){
        const currentVolume = this.device.getVolume(); 
        this.device.setVolume(currentVolume  - 10); 
    }
}