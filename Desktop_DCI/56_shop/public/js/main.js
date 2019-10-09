const thumbnailObj = document.getElementsByClassName('thumbnail');
const thumbnailContainerObj = document.getElementById('thumbnail-container');
const productDetailsObj = document.getElementById('product-details');
const cartObj = document.getElementById('cart');
const thankyouObj = document.getElementById('thankyou');
const cartBuyButtonObj = document.getElementById('cart-buy-button');
const logoObj = document.getElementById('logo');


// in den Warenkorb legen - Button
const putItemCartObj = document.getElementById('put-item-cart');

const loadProducts = async (category) => {

    // standardmäßig keine category
    let url = 'http://localhost:3000/product';
    
    // falls die category existiert, dann hänge
    // sie dran
    if(typeof category !== 'undefined') {
        url += '?category=' + category;
    }
    
    // 1. fetch-aufruf abfeuern
    const response = await fetch(url);
    // 2. das objekt als json interpretieren -> wir bekommen ein objekt
    const responseJson = await response.json();
    
    // <div class="thumbnail">
    //    <div class="thumbnail-name">Beethoven</div>
    //    <div class="thumbnail-price">100 €</div>
    // </div>    
    
    thumbnailContainerObj.innerHTML = '';

    for(product of responseJson.products) {
        const newDiv = document.createElement('div');
        newDiv.className = 'thumbnail';
        newDiv.style.background = `url(public/${product.imgurl}) center center`;
        newDiv.innerHTML = `
           <div class="thumbnail-name">${product.name}</div>
           <div class="thumbnail-price">${product.price} €</div>            
        `;
        thumbnailContainerObj.appendChild(newDiv);
    }
}

loadProducts();

const showStartpage = () => {
    loadProducts();
    productDetailsObj.style.display = 'none';
    thumbnailContainerObj.style.display = 'flex';
    cartObj.style.display = 'none';
    thankyouObj.style.display = 'none';
}

const showProductDetails = () => {
    productDetailsObj.style.display = 'block';
    thumbnailContainerObj.style.display = 'none';
    cartObj.style.display = 'none';
    thankyouObj.style.display = 'none'
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

for (let i = 0; i < thumbnailObj.length; i++) {
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
