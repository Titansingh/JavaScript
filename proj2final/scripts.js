
const colorName = [".red",".cyan",".violet",".orange",".pink"]

colorName.forEach((item) => {
  document.querySelector(item).addEventListener("mouseenter",() =>{
    document.querySelector(".center").style.backgroundColor = window.getComputedStyle(document.querySelector(item)).backgroundColor;})
});









