var count = document.querySelector(".counter");
var follower = document.querySelector(".followers");

let  c = 1;

setInterval(() => {
    if (c < 1000) {
        c++;
        count.innerHTML = c;  
    }
    
}, 10);

setTimeout(() => {
    follower.innerHTML = "Follower on instagram";
}, 5000);