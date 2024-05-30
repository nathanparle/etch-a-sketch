const container = document.querySelector(".container");
const request = document.querySelector(".changeSize");

request.addEventListener('click', (event) => { choice()});

function choice(){
    while (container.firstChild) 
        { container.removeChild(container.firstChild);
        }
    
    let num = prompt("Enter the rows and columns required, between 8 and 100 : ");
    if( num > 100 || num < 8){ alert("Between 8 and 100 please : "); choice();}
    else { build(num);}
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
    columns.addEventListener('mouseover', changeColour);
          }
}
}

const changeColour = (event)=>{ event.target.style.backgroundColor =  '#' + Math.floor((Math.random() * 1000000) + 1);}


build(16);




