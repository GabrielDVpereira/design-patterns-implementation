export class NumberGenerator  {
    public readonly number :number; 
    
    constructor({min, max} : {min: number, max: number}){
        this.number = Math.random() * max  + min; 
    }

    static max(max: number){
        return new NumberGenerator({min: 0, max }); 
    }

    static min(min: number){
        return new NumberGenerator({min, max: Infinity }); 
    }

}