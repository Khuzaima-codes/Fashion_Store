function searchDown() {
  try {
    var searchBox = document.getElementById("searchBox");
    searchBox.classList.add("searchbar-down");
    document.body.classList.add("shade");
  } catch (error) {
    console.log(error);
  }
}
function closeSearch() {
  try {
    var searchBox = document.getElementById("searchBox");
    searchBox.classList.remove("searchbar-down");
    document.body.classList.remove("shade");
    searchBox.childNodes[1].value = "";
  } catch (error) {
    console.log(error);
  }
}

function searchProduct() {
  try {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("card");
    let found = false;

    for (let i = 0; i < cards.length; i++) {
      var cardText =
        cards[i].childNodes[3].childNodes[1].textContent.toLowerCase();
      if (cardText.includes(input)) {
        found = true;
        cards[i].scrollIntoView({ behavior: "smooth", block: "center" });
        var searchBox = document.getElementById("searchBox");
        searchBox.classList.remove("searchbar-down");
        document.body.classList.remove("shade");
        input.value = "";
      }
    }

    if (found == false) {
      alert("No product found!");
    }
  } catch (error) {
    console.log(error);
  }
}

var cardSliderTabs = document.getElementsByClassName("card-sliding-tabs");
var newCollectImages = document.getElementsByClassName("new-collect-img");
var newCollectTitles = document.getElementsByClassName("new-collect-title");
var newCollectPrices = document.getElementsByClassName("new-collect-price");
function changingCards(cardType, element) {
  try {
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
      for (let i = 0; i < cardSliderTabs.length; i++) {
        cardSliderTabs[i].classList.remove("active-sliding-tab");
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function totalPrice() {
  try {
    var prices = document.getElementsByClassName("product-total-cost");
    var total = 0;

    for (var i = 0; i < prices.length; i++) {
      total = total + Number(prices[i].innerText);
    }

    document.getElementById("total-order-price").innerText = Math.round(total);

    var totalOrderCost = document.getElementById("totalOrderCost");

    totalOrderCost.innerHTML = Math.round(total + 16);
  } catch (error) {
    console.log(error);
  }
}

function increase() {
  try {
    var qty = document.getElementById("qty");
    qty.value = Number(qty.value) + 1;
  } catch (error) {
    console.log(error);
  }
}

function decrease() {
  try {
    var qty = document.getElementById("qty");
    if (qty.value > 1) qty.value = Number(qty.value) - 1;
  } catch (error) {
    console.log(error);
  }
}
function sizeBtnActive(btn) {
  try {
    var allSize = document.getElementsByClassName("size-btn");
    for (let i = 0; i < allSize.length; i++) {
      allSize[i].classList.remove("active-size");
      btn.classList.add("active-size");
    }
  } catch (error) {
    console.log(error);
  }
}

function productCall(card) {
  try {
    var image = card.childNodes[1].childNodes[1].src;
    var title = card.childNodes[3].childNodes[1].innerHTML;
    var price = card.childNodes[3].childNodes[3].innerHTML;
    localStorage.setItem("productImg", image);
    localStorage.setItem("proTitle", title);
    localStorage.setItem("proPrice", price);
    if (window.location.pathname == "/index.html") {
      window.location.href = "structures/product.html";
    } else {
      window.location.href = "product.html";
    }
  } catch (error) {
    console.log(error);
  }
}

function subscribe(element) {
  try {
    var input = element.previousElementSibling;
    if (input.value == "") {
      alert("Please Enter your email first");
    } else {
      if (input.value.endsWith("@gmail.com")) {
        Swal.fire({
          title: "Good job!",
          text: "you have been subscribed our web page",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Please enter valid email address",
          icon: "error",
        });
      }
    }
    input.value = "";
  } catch (error) {
    console.log(error);
  }
}
function removeWishlistProduct(element){
  element.parentNode.parentNode.remove();
}