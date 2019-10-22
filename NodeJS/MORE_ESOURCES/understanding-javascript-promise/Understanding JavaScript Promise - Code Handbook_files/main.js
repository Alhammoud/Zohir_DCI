
var _product0 = document.getElementById('product0'),
_cta0 = document.getElementById('ctaProduct0'),
_loadedImages = 0,
_tl,
_pO4,
autoPlay,
firstPlay = true;

var _URL0, _URL1, _URL2,
_exitURLs = [],
_exitNames = ['Item 1 Exit', 'Item 2 Exit', 'Item 3 Exit'],
_exitName = _exitNames[0],
_exitURL;

// this.addEventListener('DOMContentLoaded', init);

function init(){
    var css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', "main.css" );
    document.getElementsByTagName('head')[0].appendChild(css);

    _tl = new TimelineMax(),
    _pO4 = Power4.easeOut,
    initAnimations();
    addListeners();
}

function addListeners(){
    var _btnExit = document.getElementById('btn-exit');
    document.getElementById('ctaProduct0').addEventListener('click', cta0ExitHandler, false);
    _btnExit.addEventListener('click', bgExitHandler, false);

    function cta0ExitHandler(e) {
        Enabler.exitOverride('Item 1 Exit', _URL0);
    }
    function bgExitHandler(e) {
        Enabler.exitOverride( _exitName, _exitURL);
    }
}

function initAnimations(){
    _tl
    .set("#product0_image_full", {left:-131, scale:0.8})
    .to("#text1", 0.4, {opacity: 1, ease: Power1.easeOut})
    .to("#text1", 0.4, {opacity: 0, ease: Power1.easeOut}, "+=2.5")

    .to("#text2", 0.4, {opacity: 1, ease: Power1.easeOut})
    .to("#text2", 0.4, {opacity: 0, ease: Power1.easeOut}, "+=2.5")

    .to("#product0_image_full", 1, {scale: 0.3, top: 45})
    .to("#whiteContainer", 0.6, {width: 130, height: 490, x: 15, y: 82}, "-=0.4")

    .to("#caroussel", 0.8, {opacity: 1, ease: Power1.easeOut})
    .to(["#controls","#ctaProduct0", "#product0"], 0.8, {opacity: 1, display: "block", ease: Power1.easeOut}, "-=0.8");
}

function elem(id){return document.querySelector(id)}

function enablerInitHandler() {
    // Dynamic Content variables and sample values
     Enabler.setProfileId(10029349);
    var devDynamicContent = {};

        devDynamicContent.Volumes_EMEA_1P_DE= [{}];
    devDynamicContent.Volumes_EMEA_1P_DE[0]._id = 0;
    devDynamicContent.Volumes_EMEA_1P_DE[0].step_1_text = "Die besten Angebote von HPE.";
    devDynamicContent.Volumes_EMEA_1P_DE[0].step_2_text = "Optimal dimensionierte Produkte f\u00FCr Ihr Unternehmen.";
    devDynamicContent.Volumes_EMEA_1P_DE[0].step_2_footnote = "";
    devDynamicContent.Volumes_EMEA_1P_DE[0].Save = "";
    devDynamicContent.Volumes_EMEA_1P_DE[0].Starting_at = "Schon ab";
    devDynamicContent.Volumes_EMEA_1P_DE[0].product_1_headline = "Rechenzentrumsspezifikationen, Einstiegspreis";
    devDynamicContent.Volumes_EMEA_1P_DE[0].product_1_description = "HPE ProLiant DL380 Gen10 Server";
    devDynamicContent.Volumes_EMEA_1P_DE[0].product_1_imageURL = {};
    devDynamicContent.Volumes_EMEA_1P_DE[0].product_1_imageURL.Type = "file";
    devDynamicContent.Volumes_EMEA_1P_DE[0].product_1_imageURL.Url = "https://s0.2mdn.net/ads/richmedia/studio/60003579/60003579_20171110130304033_MicroServer_ProLiant_Gen10_300x232.jpg";
    devDynamicContent.Volumes_EMEA_1P_DE[0].product_1_isCentralized = false;
    devDynamicContent.Volumes_EMEA_1P_DE[0].product_1_save_visible = false;
    devDynamicContent.Volumes_EMEA_1P_DE[0].product_1_sale_at_price = "";
    devDynamicContent.Volumes_EMEA_1P_DE[0].product_1_save_price = "";
    devDynamicContent.Volumes_EMEA_1P_DE[0].product_1_save_price_percent = "";
    devDynamicContent.Volumes_EMEA_1P_DE[0].product_1_new_price = "2.585 \u20AC";
    devDynamicContent.Volumes_EMEA_1P_DE[0].product_1_cta = "Angebote ansehen";
    devDynamicContent.Volumes_EMEA_1P_DE[0].product_1_exitURL = {};
    devDynamicContent.Volumes_EMEA_1P_DE[0].product_1_exitURL.Url = "https://marketplace.hpe.com/urlSearch?country=US&locale=en&promo&queryString=sku:K2R80SB,K2R84SB,K2R80A,K2R79SB&pp=false&jumpid=ba_xpt5naghfz_aid-510315204";
    devDynamicContent.Volumes_EMEA_1P_DE[0].legalText = "";
    Enabler.setDevDynamicContent(devDynamicContent);

    // CONTROL SAVE PRICE VISIBLE
    var savePrice0 = dynamicContent.Volumes_EMEA_1P_DE[0].product_1_save_visible;
    var savePrice1 = dynamicContent.Volumes_EMEA_1P_DE[0].product_2_save_visible;
    var savePrice2 = dynamicContent.Volumes_EMEA_1P_DE[0].product_3_save_visible;

   if (savePrice0 == true){
        document.getElementById('save_price_control_0').style.display = "block";
        document.getElementById('priceContainer1').style.border = "none";
        document.getElementById('priceContainer1').style.top = "0";
    }
    //CONTROL ALIGN MAIN IMAGE
    var isCentralized = dynamicContent.Volumes_EMEA_1P_DE[0].product_1_isCentralized;

    if (isCentralized)
    {


    document.getElementById('product0_image_full').setAttribute('class', 'centralized');
  }
    // STEP 1 AND 2 CONFIG
    document.getElementById('text1').innerHTML = dynamicContent.Volumes_EMEA_1P_DE[0].step_1_text;
    document.getElementById('text2').innerHTML = dynamicContent.Volumes_EMEA_1P_DE[0].step_2_text;
    document.getElementById('product0_image_full').style.backgroundImage = 'url(' +dynamicContent.Volumes_EMEA_1P_DE[0].product_1_imageURL.Url +')';
    document.getElementById('staring').innerHTML = dynamicContent.Volumes_EMEA_1P_DE[0].Starting_at;

    // PRODUCT 1 CONFIG
    document.getElementById('prod_0_headline').innerHTML = dynamicContent.Volumes_EMEA_1P_DE[0].product_1_headline;
    document.getElementById('prod_0_description').innerHTML = dynamicContent.Volumes_EMEA_1P_DE[0].product_1_description;
    document.getElementById('product0_image').style.backgroundImage = 'url(' +dynamicContent.Volumes_EMEA_1P_DE[0].product_1_imageURL.Url +')';
    document.getElementById('sale_at_price_0').innerHTML = dynamicContent.Volumes_EMEA_1P_DE[0].product_1_sale_at_price;
    document.getElementById('save_price_0').innerHTML = dynamicContent.Volumes_EMEA_1P_DE[0].product_1_save_price;
    document.getElementById('prod_0_price').innerHTML = dynamicContent.Volumes_EMEA_1P_DE[0].product_1_new_price;
    document.getElementById('ctaText0').innerHTML = dynamicContent.Volumes_EMEA_1P_DE[0].product_1_cta;


        // SET CTA FONT SIZE
    var ctaLength;
    var currentCta;



    for (var i = 0; i < 1; i++) {
        currentCta = document.getElementById('ctaText'+i);
        ctaLength = currentCta.innerHTML.length;

        if (ctaLength <= 10){
            currentCta.style.fontSize = '18px';
        } else if (ctaLength <= 15){
            currentCta.style.fontSize = '15px';
        }  else if (ctaLength <= 20){
            currentCta.style.fontSize = '12px';
        }
    }

    // SET Products font size
    var priceTextLength;
    var currentPriceText;
    
    for (var i = 0; i < 1; i++) {
          currentPriceText = document.getElementById('prod_'+i+'_price');

          priceTextLength = currentPriceText.innerText.length;
          console.log("PRICE LENGTH "+ priceTextLength + "i " + i)
          if (priceTextLength >= 7){
            currentPriceText.style.fontSize = '18px';
          }  else {
            currentPriceText.style.fontSize = '26px';
          }
      }
    // SET savePrice font size
    var saveTextLength;
    var currentSaveText;
    
    for (var i = 0; i < 1; i++) {
          currentSaveText = document.getElementById('save_price_'+i);

          saveTextLength = currentSaveText.innerText.length;
          console.log("Save LENGTH "+ saveTextLength + "i " + i)
          if (saveTextLength >= 7){
            currentSaveText.style.fontSize = '18px';
          }  else {
            currentSaveText.style.fontSize = '26px';
          }
      }
    var HeadTextLength;
    var currentHeadText;

            for (var i = 0; i < 1; i++) {
                currentHeadText = document.getElementById('prod_'+i+'_headline');
                HeadTextLength = currentHeadText.innerHTML.length;
                console.log("texto es " + HeadTextLength + " i "+i)
                if (HeadTextLength <= 39){
                    currentHeadText.style.fontSize = '13px';
                    currentHeadText.style.lineHeight = '14px';
                }  else {
                    currentHeadText.style.fontSize = '7px';
                    currentHeadText.style.lineHeight = '9px';

                } 
            }

    _URL0 = dynamicContent.Volumes_EMEA_1P_DE[0].product_1_exitURL.Url;
    _exitURLs = [_URL0];
    _exitURL = _URL0;

    init();

}
