

sayH  //funtion call
sayHellow; //function reference
function sayHellow(){
  console.log("hellow world");
}

function getUserRole(name, role) {

  switch (role) {
    case "admin":
      return `${name} is admin`;
    case "subAdmin":
      return `${name} is subAdmin`;
    case "testPrep":
      return `${name} is testPrep`;
    case "user":
      return `${name} is user`;
    default:
      return `${name} is a trial user`;

  }

}

console.log(getUserRole("vaibhav","admin"));
