const container = document.querySelector("#container");
container.classList.add("container")
const horizontal = [];
const vertical = [];
function choice(){let num = prompt("Enter the rows and columns required, below 100 ( anything over 30 kills the broswer tbh): ");
    if( num > 100 ){ prompt("Below 100! : ")}
    else { build(num)}
}
function build(x){
for (var i = 1; i <= x; i++) {
    var square = document.createElement('div');
    square.classList.add("square");
    container.appendChild(square);
    horizontal.push(square);
    
for (var j= 1   ; j<= x; j++){
    var square2 = document.createElement('div');
    square2.classList.add("square2");
    square.appendChild(square2);
    horizontal.push(square2);
    let newColor = document.querySelectorAll(".square2");
          for (const color of newColor) {
            color.addEventListener("mouseover", () => {
              color.style.backgroundColor = "grey";
            });
          }
}
}
}

const request = document.createElement("button");
request.classList.add("request");
document.body.appendChild(request);
request.textContent = "Click to change size of grid" 
request.addEventListener('click', (event) => choice());





build(30);