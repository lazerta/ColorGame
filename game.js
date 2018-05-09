let num = 6;
let colors = [];
let target;
let squares = document.querySelectorAll('.square');
let display = document.querySelector('#display');
let message = document.querySelector('#message');
let h1 = document.querySelector('h1');
let restBt = document.querySelector('#reset');
let modeBts = document.querySelectorAll('.mode');


restBt.addEventListener('click',resetGame);
randomColor();
target = getTarget();
display.innerHTML = target;
for ( let i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener('click', function() {
    if(this.style.background === target){
      // it is case sensative.
      message.innerHTML = 'Correct!';
      fillColor(target);
      restBt.innerHTML = 'play again?';
      h1.style.background = target;
    }
    else {
      this.style.visibility = 'hidden';
      message.innerHTML = 'Try Agian';
    }
  });
}
function randomColor() {
  for (let i = 0; i < num ; i++) {

    colors[i] = rgb();
  }
}
// modify this part to return a valid target
function getTarget() {
    let index = picker(num);
    while(squares[index].style.visibilty === 'visible'){
      index = picker(num);
    }
   return colors[index];
}
function picker(x = 256) {
  return Math.floor(Math.random()*x);
}
function rgb(){
  let rgb ='rgb('+picker()+','+' '+picker()+','+' '+picker()+')';
  return rgb;
}

function fillColor(color) {
  for (let square of squares) {
      square.style.background = color;
  }
}
function resetGame( ) {

  randomColor();
  for (let i = 0; i < num; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.visibility = 'visible';
    if(num === 3){
      squares[squares.length-(i+1)].style.visibility = 'hidden';
    }
  }
  target = getTarget();

   display.innerHTML = target;
   message.innerHTML = '';
   h1.style.background = 'darkorange';
   restBt.innerHTML = 'New Color';
}
mode();
function mode() {
  for (let i = 0; i < modeBts.length; i++) {
    modeBts[i].addEventListener('click', function() {
         this.innerHTML === 'easy' ?  num = 3 : num = 6;
          resetGame();
        
    });
  }
   }
