const container = document.querySelector("container");
const horizontal = [];
const vertical = [];
for (var i = 0; i <= 15; i++) {
    var horiz = document.body.appendChild(document.createElement('div'));
    horiz.classList.add("horiz");
    horizontal.push(horiz);

for (var j= 0; j< 14; j++){
    var vert = document.body.appendChild(document.createElement('div'));
    vert.classList.add("vert");
    horizontal.push(vert);
    
}



}