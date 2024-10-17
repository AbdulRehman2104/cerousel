var pics = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg",
    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
];

var image = document.getElementsByClassName("img")[0];
var farward = document.getElementById("far");
var previous = document.getElementById("pre");
var setid;
var count = 0;

function slideshow() {
    if (count >= pics.length) {
        count = 0;
    } else if (count < 0) {
        count = pics.length - 1;
    }
    image.setAttribute("src", pics[count]);
}

setid = setInterval(function() {
    count++;
    slideshow();
}, 2000);


farward.addEventListener("click", function() {
    clearInterval(setid);
    count++;
    slideshow();
    setid = setInterval(function() {
        count++;
        slideshow();
    }, 2000);
});

previous.addEventListener("click", function() {
    clearInterval(setid);
    count--;
    slideshow();
    setid = setInterval(function() {
        count++;
        slideshow();
    }, 2000);
});





// var elm = document.getElementById("imgTag")
// var count = 0
// function fun() {
//     if (count > 1) {
//         count = 0
//     }
//     elm.setAttribute("src", links[count]);

// }
// setInterval(fun, 2000)