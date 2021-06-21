 var isEven = (element)=>  element%2 === 0;
//  if (element%2 === 0){
//  return true;
//}

var  Even = (element1) =>  {return element1 %2 === 0;}



console.log(isEven(2));
console.log(Even(2));


var a = [1,2,3,4] ;
console.log(a.every(isEven));

//god mode
console.log(a.every((e) => e % 2 === 0));
