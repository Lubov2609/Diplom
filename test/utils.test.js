const {add,square,asyncAdd,asyncSquare} = require('./utils');
// const expect = require('expect');

it("Should add two numbers",()=>{
    var res=add(11,33);
    if(res!==44) {
        throw new Error('Expexted 44, but got $(res)');
    }
});

it("Should square a number",()=>{
    var res =square(4);
    if(res!=16) {
        throw new Error('Expexted 16, but got $(res)');
    }
});

it("Should asyncAdd two numbers",()=>{
   asyncAdd(4,8,(sum)=>{
      if(sum!=12){
          throw new Error('Expexted 12, but got $(res)');
      }
   })
});

it("Should asyncSquare a number",()=>{
    asyncSquare(3,(square)=>{
        if(square!=9){
            throw new Error('Expexted 9, but got $(res)');
        }
    })
});