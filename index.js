// Your code here 
let dodger = document.getElementById("dodger"); 
 
dodger.style.backgroundColor = "#FF69B4"; 
let x = dodger.style.left; 
let y = dodger.style.bottom;  
let z = dodger.style.right;
 
console.log(x, y, z); 

dodger.style.bottom = "0px"; 
let a = dodger.style.left; 
let b = dodger.style.bottom;
let c = dodger.style.right; 

console.log(a, b, c,) 




function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
debugger
    if (left > 0) {
        dodger.style.left = `${left - 1}px`; 
        console.log(dodger, dodger.style)
    }
} 
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft(); 
        console.log(e, e.key)
    } 
    else if (e.key === "ArrowRight") { 
        moveDodgerRight();
        console.log(e, e.key, z)
        }  
}); 
function moveDodgerRight() { 
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10); 

    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
        console.log(dodger, dodger.style)
    }
} 