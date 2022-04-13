export interface Command {
    execute(value: number): number;
    undo(value: number): number;
}