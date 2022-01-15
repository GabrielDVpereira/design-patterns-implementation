class Singleton {
    private static instance: Singleton; 

    private constructor() {} // prevents initialization with new operator outside of the class 

    public static getInstance(){ 
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }

        return Singleton.instance; // always sharing the same instance
    }
}


function clientCode(){
     const s1 = Singleton.getInstance(); 
     const s2 = Singleton.getInstance(); 

    if(s1 === s2){
        console.log('singleton works!')
        return; 
    }

    console.log('singleton does not work');
}