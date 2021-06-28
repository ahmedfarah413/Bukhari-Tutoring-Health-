const products = JSON.parse(localStorage.getItem("products"));
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const singleProductDiv = document.querySelector(
  ".single-product .container .row"
);

const singleProduct = products.find(function (item) {
  if (item.id == id) {
    return item;
  }
});

singleProductDiv.innerHTML += `
<div class="col-md-6">
    <div class="product-slider">
    <div id="slider" class="flexslider">
    <ul class="slides">
        <li>
        <img src="assets/images/IMG-0034.PNG" />
        </li>
        <li>
        <img src="assets/images/IMG-0079.JPG" />
        </li>
        <li>
        <img src="assets/images/IMG-0247.jpg" />
        </li>
        <li>
        <img src="assets/images/IMG-0248.jpg" />
        </li>
        <li>
        <img src="assets/images/IMG-0249.JPG" />
        </li>
         <li>
        <img src="assets/images/IMG-0250.JPG" />
        </li>
         <li>
        <img src="assets/images/IMG-0251.JPG" />
        </li>
         <li>
        <img src="assets/images/IMG-0298.JPG" />
        </li>
         <li>
        <img src="assets/images/IMG-0148.JPG" />
        </li>
    </div>
</div>
`;

console.log(products);
console.log(singleProduct);
