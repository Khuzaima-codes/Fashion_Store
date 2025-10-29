function searchDown() {
    var searchBox = document.getElementById("searchBox");
    searchBox.classList.add("searchbar-down");
    document.body.classList.add("shade")
}
function closeSearch() {
    var searchBox = document.getElementById("searchBox");
    searchBox.classList.remove("searchbar-down");
    document.body.classList.remove("shade")
}

var cardSliderTabs = document.getElementsByClassName("card-sliding-tabs");
var newCollectImages = document.getElementsByClassName("new-collect-img");
var newCollectTitles = document.getElementsByClassName("new-collect-title");
var newCollectPrices = document.getElementsByClassName("new-collect-price");
function changingCards(cardType, element) {
    for (let i = 0; i < cardSliderTabs.length; i++) {
        cardSliderTabs[i].classList.remove("active-sliding-tab");
    }
    element.classList.add("active-sliding-tab");
  if (cardType == "allCards") {
    var allNewImages = [
      "images/new-collection/product-item_1.jpg",
      "images/new-collection/product-item_2.jpg",
      "images/new-collection/product-item_3.jpg",
      "images/new-collection/product-item_4.jpg",
      "images/new-collection/product-item_5.jpg",
      "images/new-collection/product-item_6.jpg",
      "images/new-collection/product-item_7.jpg",
      "images/new-collection/product-item_8.jpg",
    ];
    var allNewTitles = [
      "cotton t-shirt",
      "cotton t-shirt",
      "cotton t-shirt",
      "cotton t-shirt",
      "cotton t-shirt",
      "cotton t-shirt",
      "cotton t-shirt",
      "cotton t-shirt",
    ];
    var allNewPrices = [
      "$35.99",
      "$35.99",
      "$35.99",
      "$35.99",
      "$35.99",
      "$35.99",
      "$35.99",
      "$35.99",
    ];
    for (let i = 0; i < newCollectImages.length; i++) {
      newCollectImages[i].src = allNewImages[i];
      newCollectTitles[i].innerHTML = allNewTitles[i];
      newCollectPrices[i].innerHTML = allNewPrices[i];
    }
  } else if (cardType == "menCards") {
    var allNewImages = [
      "images/new-collection/product-item_8.jpg",
      "images/new-collection/product-item_7.jpg",
      "images/new-collection/product-item_6.jpg",
      "images/new-collection/product-item_5.jpg",
      "images/new-collection/product-item_4.jpg",
      "images/new-collection/product-item_3.jpg",
      "images/new-collection/product-item_2.jpg",
      "images/new-collection/product-item_1.jpg",
    ];
    var allNewTitles = [
      "men t-shirt",
      "men t-shirt",
      "men t-shirt",
      "men t-shirt",
      "men t-shirt",
      "men t-shirt",
      "men t-shirt",
      "men t-shirt",
    ];
    var allNewPrices = [
      "$55.99",
      "$23.99",
      "$38.99",
      "$40.99",
      "$45.99",
      "$24.99",
      "$35.99",
      "$35.99",
    ];
    for (let i = 0; i < newCollectImages.length; i++) {
      newCollectImages[i].src = allNewImages[i];
      newCollectTitles[i].innerHTML = allNewTitles[i];
      newCollectPrices[i].innerHTML = allNewPrices[i];
    }
  } else if (cardType == "womenCards") {
    var allNewImages = [
      "images/new-collection/product-item_6.jpg",
      "images/new-collection/product-item_2.jpg",
      "images/new-collection/product-item_1.jpg",
      "images/new-collection/product-item_5.jpg",
      "images/new-collection/product-item_8.jpg",
      "images/new-collection/product-item_4.jpg",
      "images/new-collection/product-item_7.jpg",
      "images/new-collection/product-item_3.jpg",
    ];
    var allNewTitles = [
      "women t-shirt",
      "women t-shirt",
      "women t-shirt",
      "women t-shirt",
      "women t-shirt",
      "women t-shirt",
      "women t-shirt",
      "women t-shirt",
    ];
    var allNewPrices = [
      "$66.99",
      "$77.99",
      "$22.99",
      "$44.99",
      "$45.99",
      "$24.99",
      "$35.99",
      "$35.99",
    ];
    for (let i = 0; i < newCollectImages.length; i++) {
      newCollectImages[i].src = allNewImages[i];
      newCollectTitles[i].innerHTML = allNewTitles[i];
      newCollectPrices[i].innerHTML = allNewPrices[i];
    }
  } else if (cardType == "accCards") {
    var allNewImages = [
      "images/new-collection/product-item_5.jpg",
      "images/new-collection/product-item_4.jpg",
      "images/new-collection/product-item_3.jpg",
      "images/new-collection/product-item_2.jpg",
      "images/new-collection/product-item_1.jpg",
      "images/new-collection/product-item_8.jpg",
      "images/new-collection/product-item_6.jpg",
      "images/new-collection/product-item_7.jpg",
    ];
    var allNewTitles = [
      "accossories card",
      "accossories card",
      "accossories card",
      "accossories card",
      "accossories card",
      "accossories card",
      "accossories card",
      "accossories card",
    ];
    var allNewPrices = [
      "$55.99",
      "$23.99",
      "$38.99",
      "$40.99",
      "$45.99",
      "$24.99",
      "$35.99",
      "$35.99",
    ];
    for (let i = 0; i < newCollectImages.length; i++) {
      newCollectImages[i].src = allNewImages[i];
      newCollectTitles[i].innerHTML = allNewTitles[i];
      newCollectPrices[i].innerHTML = allNewPrices[i];
    }
  } else if (cardType == "newArrCards") {
    var allNewImages = [
      "images/new-collection/product-item_3.jpg",
      "images/new-collection/product-item_2.jpg",
      "images/new-collection/product-item_1.jpg",
      "images/new-collection/product-item_6.jpg",
      "images/new-collection/product-item_5.jpg",
      "images/new-collection/product-item_4.jpg",
      "images/new-collection/product-item_8.jpg",
      "images/new-collection/product-item_7.jpg",
    ];
    var allNewTitles = [
      "lorem-ipsum",
      "lorem-ipsum",
      "lorem-ipsum",
      "lorem-ipsum",
      "lorem-ipsum",
      "lorem-ipsum",
      "lorem-ipsum",
      "lorem-ipsum",
    ];
    var allNewPrices = [
      "$55.99",
      "$23.99",
      "$38.99",
      "$40.99",
      "$45.99",
      "$24.99",
      "$35.99",
      "$35.99",
    ];
    for (let i = 0; i < newCollectImages.length; i++) {
      newCollectImages[i].src = allNewImages[i];
      newCollectTitles[i].innerHTML = allNewTitles[i];
      newCollectPrices[i].innerHTML = allNewPrices[i];
    }
  }
}
