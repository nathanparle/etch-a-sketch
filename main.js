const container = document.querySelector(".container");
const request = document.querySelector(".changeSize");

request.addEventListener('click', (event) => { choice()});
var x = 16;
var isBlack = true;
var isWhite = false; 

function choice(){
    while (container.firstChild) 
        { container.removeChild(container.firstChild);}
    x = prompt("Enter the rows and columns required, between 2 and 100 : ");
    if( x > 100 || x < 2){ alert("Between 2 and 100 please : "); choice();}
    else { build(x);}
}
const  build = (x) => {
for (var i = 0; i < x; i++) {
    rows = document.createElement('div');
    rows.classList.add("row");
    container.appendChild(rows);
    
       
for (var j= 0   ; j< x; j++){
    columns = document.createElement('div');
    columns.classList.add("column");
    
    
    rows.appendChild(columns);
    columns.addEventListener('mouseover', changeColour);}
}
}

const changeColour = (event)=>{ if ( isBlack ){event.target.style.backgroundColor = 'black';}
else if ( isWhite ){ event.target.style.backgroundColor = 'white';}
else { event.target.style.backgroundColor =  '#' + Math.floor((Math.random() * 1000000) + 1);}}

const rightSide = document.querySelector(".options");
const rainbow = document.createElement('button');
rainbow.classList.add("buttons");
rainbow.textContent="Rainbow";
rightSide.appendChild(rainbow);
rainbow.addEventListener('click', () => {isBlack=false, isWhite = false;});

const black = document.createElement('button');
black.classList.add("buttons");
black.textContent="Black Pen";
rightSide.appendChild(black);
black.addEventListener('click', () => {isWhite=false; isBlack=true;});

const eraser = document.createElement('button');
eraser.classList.add("buttons");
eraser.textContent="Erase";
rightSide.appendChild(eraser);
eraser.addEventListener('click', () => {isWhite=true; isBlack=false;});

const clear = document.createElement('button');
clear.classList.add("buttons");
clear.textContent="Clear";
rightSide.appendChild(clear);
clear.addEventListener('click', () => { while (container.firstChild) 
    { container.removeChild(container.firstChild);} build(x)
});


build(x);




