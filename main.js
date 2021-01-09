const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
const imageArray = ['./images/pic1.jpg', './images/pic2.jpg', './images/pic3.jpg', './images/pic4.jpg', './images/pic5.jpg'];

for (let i = 0; i < imageArray.length; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageArray[i]);
    thumbBar.appendChild(newImage);
};

thumbBar.addEventListener('click', event => {
    displayedImage.setAttribute('src', event.target.attributes[0].value);

})

//
//


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', event => {
    let n = btn.getAttribute("class")
    if (n === 'dark') {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        btn.setAttribute('class', 'light');
    }

    if (n === 'light') {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn.setAttribute('class', 'dark');
    }
    
   

})