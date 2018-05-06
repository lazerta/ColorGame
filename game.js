let isEnd = false;
let colors =[];
function picker(x = 256) {
  return Math.floor(Math.random()*x);
}
function rgb(){
  let rgb ='RGB('+picker()+','+' '+picker()+','+' '+picker()+')';
  return rgb;
}

let squares = document.querySelectorAll('.square');
function fill(color) {
  for (let i = 0; i < squares.length; i++) {
    if(color === undefined){
    colors[i] = rgb();
  }
  else {
    colors[i] = color;
  }
    squares[i].style.background = colors[i];
  }
}
fill();
 target = picker(colors.length);
document.getElementById('display').innerHTML = colors[target];


for (let square of squares) {
  square.addEventListener('click', function() {
  if(square === squares[target] ){
 document.getElementById('message').innerHTML = 'elem';
fill(colors[target]);
document.querySelector('.header').style.background = colors[target];
  isEnd = true;

    }
   if(!isEnd){
     square.style.visibility = 'hidden';
   }
  });
}
