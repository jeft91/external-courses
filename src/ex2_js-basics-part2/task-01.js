function NumberStringCheck(NumOrString){

    if(Number.isNaN(NumOrString)){
    let NumOrString;
    return NumOrString;
    }
    if((typeof NumOrString)=='string' || (typeof NumOrString)=='number' ){
    return(typeof NumOrString);
    }
    
    
    
    
    }

    module.exports = NumberStringCheck;