let plus1 = document.querySelector(".plus1");
let minus1 = document.querySelector(".minus1");
let quantity1 = document.querySelector(".quantity1");
let delete1 = document.querySelector(".delete1");
let cartItem = document.querySelector(".cart-item");
let totalPrice = document.querySelector(".total-price");
let unitPrice = 1000;



function updateTotal() {
   totalPrice.textContent = Number(quantity1.textContent) * unitPrice;
}


updateTotal();

plus1.onclick = function () {

quantity1.textContent = Number(quantity1.textContent) + 1;
updateTotal();
}


minus1.onclick = function () {
   let current = Number(quantity1.textContent);


   if (current > 1) {
      quantity1.textContent = current -1;
      updateTotal();
   }
};
delete1.onclick = function () {
   cartItem.remove();
   totalPrice.textContent = 0;
};




