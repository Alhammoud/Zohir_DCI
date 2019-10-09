const thumbnailObj = document.getElementsByClassName(`thumbnail`);
const thumbnailContainerObj = document.getElementsByClassName(`thumbnail-container`)[0];
const productDetailObj = document.getElementsByClassName(`product-details`)[0];
const cartObj = document.getElementsByClassName(`cart`)[0];
const thankyouObj = document.getElementsByClassName(`thankyou`)[0];

const putItemCartObj = document.getElementById(`put-item-cart`);
const cartBuyButtonObj = document.getElementsByClassName(`cart-buy-button`)[0];
const logoObj = document.getElementsByClassName(`logo`)[0];
const linkObj = document.getElementsByTagName(`a`);

const showProductDetails = (singleProductShown) => {
    thumbnailContainerObj.style.display = `none`;
    cartObj.style.display = `none`;
    thankyouObj.style.display = `none`;
    productDetailObj.style.display = `block`;

    productDetailObj.innerHTML="";
    const singleProduct = document.createElement(`div`);
    singleProduct.classList.add(`product-container`);
    singleProduct.innerHTML = `
    <div class="product-image">
                        <img src="public/${singleProductShown.imgurl}" alt="">
                    </div>

                    <div class="product-description">
                        <h2>${singleProductShown.name}</h2>
                        <p>${singleProductShown.description}</p>

                        <div class="product-buy">
                            <div>Quantity: <input type="number" min="1" max="9" class="quantity" value="1" /> x
                                <span>${singleProductShown.price}</span> / each<span></span>
                                <div id="put-item-cart"><button>In den Warenkorb legen</button></div>
                            </div>

                        </div>

                    </div>`
    productDetailObj.appendChild(singleProduct);

    const putItemCartObj = document.getElementById(`put-item-cart`);


    putItemCartObj.onclick = () => {
    showCart();
}




}

const showCart = () => {
    thumbnailContainerObj.style.display = `none`;
    cartObj.style.display = `block`;
    thankyouObj.style.display = `none`;
    productDetailObj.style.display = `none`;
}

const showThankYou = () => {
    thumbnailContainerObj.style.display = `none`;
    cartObj.style.display = `none`;
    thankyouObj.style.display = `flex`;
    productDetailObj.style.display = `none`;
}

const showAll = () => {
    thumbnailContainerObj.style.display = `flex`;
    cartObj.style.display = `none`;
    thankyouObj.style.display = `none`;
    productDetailObj.style.display = `none`;
    loadProducts('http://localhost:3000/product');
}




cartBuyButtonObj.onclick = () => {
    showThankYou();
}

logoObj.onclick = () => {
    showAll();
}

linkObj[0].onclick = () => {
    showAll();
}
linkObj[1].onclick = () => {
    thumbnailContainerObj.style.display = `flex`;
    cartObj.style.display = `none`;
    thankyouObj.style.display = `none`;
    productDetailObj.style.display = `none`;
    loadProducts('http://localhost:3000/product?category=Books');
    
}
linkObj[2].onclick = () => {
    thumbnailContainerObj.style.display = `flex`;
    cartObj.style.display = `none`;
    thankyouObj.style.display = `none`;
    productDetailObj.style.display = `none`;
    loadProducts('http://localhost:3000/product?category=Movies');
}
linkObj[3].onclick = () => {
    thumbnailContainerObj.style.display = `flex`;
    cartObj.style.display = `none`;
    thankyouObj.style.display = `none`;
    productDetailObj.style.display = `none`;
    loadProducts('http://localhost:3000/product?category=Music');
}



// Alternativ wird der onclick-event im HTML gesetzt:
// linkObj[4].onclick = () => {
    //     showCart();
    // }
    
    const loadProducts = async (url) => {
        const response = await fetch(url);
        const responseJson = await response.json();
        const responseStr = JSON.stringify(responseJson);

        createProducts(responseStr);
    }


    const createProducts = (allproducts) => {
        thumbnailContainerObj.innerHTML="";

        let productsArray = [...JSON.parse(allproducts).products];

        for (elem of productsArray) {
            const newDivObj = document.createElement(`div`);
            newDivObj.classList.add(`thumbnail`);
            newDivObj.style.background = `url(public/${elem.imgurl}) center center`;
            newDivObj.innerHTML = `<div class="thumbnail-name">${elem.name}</div><div class="thumbnail-price">${elem.price} €</div>`;
            thumbnailContainerObj.appendChild(newDivObj);
            
        };
        
        for (let i = 0; i < thumbnailObj.length; i++) {
            thumbnailObj[i].onclick = () => {
                console.log(productsArray[i]);
                showProductDetails(productsArray[i])
            }
        }
    }

    loadProducts('http://localhost:3000/product');