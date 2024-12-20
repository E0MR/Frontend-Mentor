let flip = document.getElementById('submit');
let flipped = document.getElementById('main');

let rate = document.getElementById("rate");

let value = 0;

flip.onclick = () => {
   flipped.classList.add('flip');
   rate.innerHTML = value;
}

let rates = document.querySelectorAll('li');

rates.forEach(rate => {
   rate.addEventListener('click', function(e) {
      rate.classList.add('clicked');
      value = e.target.innerHTML;
   });
});