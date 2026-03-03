document.getElementsByTagName("div");

document.getElementById("list");

// 2

var items = document.querySelectorAll("li");

items.forEach(function (item) {
  item.textContent += " Hello World";
});

//3

var p = document.getElementById("list");

p.style.color = "purple";
p.style.fontSize = "20px";
p.style.fontWeight = "bold";

// 4

var img = document.getElementById("image");

img.style.height = "300px";

// 5

var cities = ["San Francisco", "Cairo", "Tokyo", "Nairobi"];

var list = document.getElementById("ul");

cities.forEach(function (city) {
  var li = document.createElement("li");
  li.textContent = city;
  list.appendChild(li);
});

// 6
var img = document.getElementById("image");
var images = [
  "http://s1.picswalls.com/wallpapers/2014/07/28/italy-hd-wallpaper_120930175_120.jpg",
  "https://deih43ym53wif.cloudfront.net/large_tokyo-asakusa-shutterstock_1840174852_b3512cd373.jpeg",
];

var counter = 1;
img.addEventListener("click", function () {
  console.log(counter, "counter");

  if (counter === images.length) {
    counter = 0;
  }
  image.src = images[counter];
  counter++;
});

setInterval(function() {
  counter = (counter + 1) % images.length; 
  img.src = images[counter];
}, 3000);