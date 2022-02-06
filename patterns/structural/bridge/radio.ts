import { Device } from "./device";

export class Radio implements Device {
    private volume: number = 15; 
    private enabled: boolean = true;

    getVolume(): number {
        return this.volume;
    }

    setVolume(value: number): void {
        this.volume = value; 
    }
    isEnabled(): boolean {
        return this.enabled;
    }
    setDisabled(): void {
        this.enabled = false; 

    }

    setEnabled(): void {
        this.enabled = true; 
    }
}