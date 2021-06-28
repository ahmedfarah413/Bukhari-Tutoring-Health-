const products = [
  {
    id: 1,
    name: "Bukhari Tutoring Bookbag",
    price: 35,
    image: "./assets/images/IMG-0034.PNG",
  },
  {
    id: 2,
    name: "Bukhari Phone Case - Beige",
    price: 25,
    image: "./assets/images/IMG-0079.JPG",
  },
  {
    id: 3,
    name: "Bukhari Phone Case - Gray",
    price: 25,
    image: "./assets/images/IMG-0247.jpg",
  },
  {
    id: 4,
    name: "Bukhari Phone Case - Pink",
    price: 25,
    image: "./assets/images/IMG-0248.jpg",
  },
  {
    id: 5,
    name: "Bukhari Phone Case - Blue",
    price: 25,
    image: "./assets/images/IMG-0249.jpg",
  },
  {
    id: 6,
    name: "Bukhari Phone Case - Purple",
    price: 25,
    image: "./assets/images/IMG-0250.jpg",
  },
  {
    id: 7,
    name: "Bukhari Phone Case - Green",
    price: 25,
    image: "./assets/images/IMG-0251.jpg",
  },
  {
    id: 8,
    name: "Bukhari Phone Case - Magenta",
    price: 25,
    image: "./assets/images/IMG-0298.jpg",
  },
  {
    id: 9,
    name: "Bukhari Bookbag/Phone Case",
    price: 25,
    image: "./assets/images/IMG-0148.JPG",
  },
];

const arrays = [1, 2, 3, 4, 5, "jake", "martin"];

//create a function
function calculate(number) {
  // do something
  console.log(number);
}

calculate(78); //invoke the function

arrays.forEach(function (item) {
  console.log(item);
});

"<div id=" +
  product.id +
  ">" +
  "</div>" //strings concatenations
  `<div id=${product.id}></div>`; //templates strings
