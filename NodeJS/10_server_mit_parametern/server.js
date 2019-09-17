// express einbinden

const express = require('express');

// den webserver initialisieren
const app = express();


app.get(`/`,(request,response)=>{
    return response.send('server mit parametern')
}); 


app.get(`/hallo/:name`,(request,response)=>{
    return response.send(`
        Hi ${request.params.name}
    `);
}); 

// OutPut : auf http://localhost:3000/hallo/zohir :
// Hi zohir




const products=[
    {id:'10001',name:'HP NIVDIA quadro GTx 1050 TI ',price:150},
    {id:'10002',name:'Geforce  GT 730 TI',price:190},
    {id:'10003',name:'Vodoo 1',price:1},
    {id:'10004',name:'HP NIVDIA quadroGTx GV100 ',price:17000}
]

// Aufgabe :
//
// 1) Erstelle eine Route /productdetail, die ein parameter id erwartet.
//    Auf Basis der id, wird dem Besucher der website alles zum Product ausgegeben als String.
// 2) Erstelle eine neue Route /products, die alle Producte als HTML-Tablle ausgibt.

// 1)
app.get(`/productdetail/:id`,(request,response)=>{

    for (product of products){
        if(product.id===request.params.id){
            return response.send(`
            product of ${product.id} is  ${product.name} and his price is ${product.price}
        `);
        }
    }
    return response.send(`product ID ${request.params.id} not found`);
  
}); 

// OutPut : auf http://localhost:3000/productdetail/10001 :

//          product of 10001 is  HP NIVDIA quadro GTx 1050 TI  and his price is 150    

// OutPut : auf http://localhost:3000/productdetail/1000 :

//          product ID 1000 not found




// 2)

app.get(`/products`,(request,response)=>{

   /* 
   // Andre Löusung :
   
   let stringProducts1='';
    
    for (product of products){stringProducts1 +=` </br> product of id = ${product.id} is  ${product.name} and his price is ${product.price}`};

    return response.send(stringProducts1);  */


    let stringProducts2='';

    for (let i=0;i<products.length;i++){
        stringProducts2+=`
        <tr>
            <td>${products[i].id}</td>
            <td>${products[i].name} </td>
            <td>${products[i].price}</td>
        </tr>
        `
    }
    return response.send(`
        <table>
            <tr>
                <td> id </td>
                <td> name </td>
                <td> price </td>
            </tr>
            ${stringProducts2}
        </table>`); 

});


//Output :
/* 
id	name	price
10001	HP NIVDIA quadro GTx 1050 TI	150
10002	Geforce GT 730 TI	190
10003	Vodoo 1	1
10004	HP NIVDIA quadroGTx GV100	17000
*/

app.listen(3000);

console.log('hallo welt server auf port 3000');
