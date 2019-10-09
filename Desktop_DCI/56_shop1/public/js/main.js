const thumbnailObj = document.getElementsByClassName('thumbnail');

const thumbnailContainerObj = document.getElementById('thumbnail-container');

const productDetailsObj = document.getElementById('product-details');

const cartObj = document.getElementById('cart');

const thankyouObj = document.getElementById('thankyou');

const cartBuyButtonObj = document.getElementById('cart-buy-button');

const logoObj = document.getElementById('logo');

// in den Warenkorb legen - Button
const putItemCartObj = document.getElementById('put-item-cart');

const showStartpage = () => {
    productDetailsObj.style.display = 'none';
    thumbnailContainerObj.style.display = 'flex';        
    cartObj.style.display = 'none';
    thankyouObj.style.display = 'none';    
}

const showProductDetails = () => {
    productDetailsObj.style.display = 'block';
    thumbnailContainerObj.style.display = 'none';        
    cartObj.style.display = 'none';
    thankyouObj.style.display = 'none';    
}

const showCart = () => {
    productDetailsObj.style.display = 'none';
    thumbnailContainerObj.style.display = 'none';        
    cartObj.style.display = 'block';
    thankyouObj.style.display = 'none';    
}

const showThankYou = () => {
    productDetailsObj.style.display = 'none';
    thumbnailContainerObj.style.display = 'none';        
    cartObj.style.display = 'none';
    /*
    analog zu:

    .thankyou {
        display: flex
    }
    */
    thankyouObj.style.display = 'flex';    
}

putItemCartObj.onclick = () => {
    showCart();
}

cartBuyButtonObj.onclick = () => {
    showThankYou();
}

for(let i=0; i<thumbnailObj.length; i++) {
    thumbnailObj[i].onclick = () => {
        showProductDetails();
    }
}


// Aufgabe:
//
// Implementiere
// 1) Klick aufs Logo -> Startseite

logoObj.onclick = () => {
    showStartpage();
}
// 2) Klick auf All -> Startseite

// siehe HTML

// 3) Klick auf Cart -> Warenkorb

