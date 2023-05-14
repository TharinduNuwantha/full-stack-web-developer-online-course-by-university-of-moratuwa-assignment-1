/*This part for Simple animation */

const offer = document.querySelector('.offer');
const colors = ['#0077cc', '#ff6600', '#66cc33', '#9933cc', '#cc0000'];


function changeColor() {

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  offer.style.backgroundColor = randomColor;
}

changeColor();

setInterval(changeColor, 1000);



/* This part for Simple JavaScript function */

function changeImg(val) {
    const imageUrls = ['img/img1.jpg', 'img/img2.jpg', 'img/img4.jpg'];
    const colorNames = ['Sea Blue','Carbon Gray','orange'];
    const img = document.getElementById('mainImagee');
    img.src = imageUrls[val];
    document.querySelector('.cname').innerHTML=colorNames[val];
}

