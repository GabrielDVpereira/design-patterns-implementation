export interface Device {
    setVolume(value: number): void; 
    getVolume(): number;
    isEnabled(): boolean;
    setEnabled(): void; 
    setDisabled(): void;
}