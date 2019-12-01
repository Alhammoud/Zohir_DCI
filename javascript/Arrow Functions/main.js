 

 // Aufgabe : Konvertiere dies ES5-Syntax in eine ES6-Syntax.
 
 
 function A(x){
     return x* B(x)+C(x,2*x);
 }

// const A=(x)=> x*B(x)+C(x,2*x);
// const A= x => x*B(x)+C(x,2*x);
 console.log(A(5));



 function B(x){
    return x*2*C(x,2*x);
}

// const b=(x)=>x*2*C(x,2*x);


function C(x,y){

    const obj={
        z:5,
        getZ:function(){
            return this.z*4;
        }
    }
    return 4*x+y+obj.getZ();    
}

// const C=(x,y)=>{

//     const obj={
//         z:5,
//         getZ:()=>{
//             return this.z*4;
//         }
//     }
//     return 4*x+y+obj.getZ();    
// }