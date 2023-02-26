let mainBody = document.querySelector('body');
mainBody.style = 'height: 100vh;';

let randomButton = document.createElement('button');
randomButton.className = 'border border-light text-black text-uppercase rounded-pill px-5 py-2';
randomButton.innerHTML = 'Click me';
randomButton.style = 'box-shadow: -4px -4px 10px #FFFFFF, 4px 4px 10px rgba(153, 166, 206, 0.3), inset -2px -2px 4px #FFFFFF, inset 2px 2px 5px rgba(153, 166, 206, 0.3);';
mainBody.appendChild(randomButton);


randomButton.onclick = ()=>{
    bodyRandomColor();
}


function bodyRandomColor (){

    let randomColorRed = Math.floor(Math.random()*255);
    let randomColorGreen = Math.floor(Math.random()*255);
    let randomColorBlue = Math.floor(Math.random()*255);

    // Stockage du dégradé en tant que chaîne de caractères 
    let gradient = `linear-gradient(to top right, rgb(${randomColorBlue},${randomColorGreen},${randomColorRed}), rgba(255, 255, 255, 0))`;


    mainBody.style.backgroundImage = gradient;

    let previousDisplayValue = document.querySelector('.mt-5');
    previousDisplayValue ? mainBody.removeChild(previousDisplayValue) : "";

    let displayValue = document.createElement('div');
    displayValue.className = 'mt-5'
    displayValue.innerHTML = `Code RGB : ${randomColorRed}, ${randomColorGreen}, ${randomColorBlue}`;
    mainBody.appendChild(displayValue);
}


