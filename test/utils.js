module.exports.add= (a,b) =>a+b;

module.exports.asyncAdd=(a,b, callback)=>{
    setTimeout(()=>{
    return callback(a+b);
    },1000)
}

module.exports.asyncSquare=(a, callback)=>{
    setTimeout(()=>{
        return callback(a*a);
    },1000)
}

module.exports.square =(x)=>Math.pow(x,2);