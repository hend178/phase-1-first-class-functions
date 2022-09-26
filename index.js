function receivesAFunction(arg){
    arg();
    return 'unknown';
}
function returnsANamedFunction(){
    return Hello;
}
function Hello(){
}

function returnsAnAnonymousFunction(){
    return function(){
        
    };
}