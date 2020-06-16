
var count     = 0;
let buttonBox = document.getElementById('buttonBox');
let box       = document.getElementById('box');

document
 .addEventListener(
   "keyup",
    counter
 );

buttonBox
   .addEventListener(
     "click",
      counter
   );

function counter() {
  count += 1;
  box
    .textContent = count;
};




