var a = ['car','car1','car2','car3',2,3,4,5];

a.forEach((a)=> console.log(a));//for each

for (const item of a) {     //for off
    console.log(item + ' 1');
    
}

const symbol = {
    yt: "youtube",
    fb: "facebook",
    ig: "instagram"
}

for (const key in symbol) {
    console.log(symbol[key]);
    
}