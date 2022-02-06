import { AdvancedRemoteControl } from "./advancedRemoteControl";
import { Radio } from "./radio";
import { RemoteControl } from "./remoteControl";
import { TV } from "./tv";

const tv = new TV(); 
const remoteControl = new RemoteControl(tv); 
remoteControl.togglePower(); 

const radio = new Radio(); 
const advancedRemoteControl = new AdvancedRemoteControl(radio); 
advancedRemoteControl.togglePower(); 
advancedRemoteControl.mute(); 