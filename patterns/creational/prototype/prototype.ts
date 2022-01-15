class Prototype {
    public width: number = 0; 
    public height: number = 0; 

    // this clone method crates a new reference to the class
    clone(): this {
       return {...this};  
    }
}