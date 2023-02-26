let mainBody = document.querySelector('body');
mainBody.style = 'height: 100vh;';

let randomButton = document.createElement('button');
randomButton.className = 'border border-light text-black text-uppercase rounded-pill px-5 py-2';
randomButton.innerHTML = 'Click me';
mainBody.appendChild(randomButton);





randomButton.onclick = ()=>{
    bodyRandomColor();
}

function bodyRandomColor (){

    randomColorRed = Math.floor(Math.random()*255);
    randomColorGreen = Math.floor(Math.random()*255);
    randomColorBlue = Math.floor(Math.random()*255);
    mainBody.style.backgroundColor = `rgb(${randomColorRed}, ${randomColorGreen}, ${randomColorBlue})`;

    let previousDisplayValue = document.querySelector('.mt-5');
    previousDisplayValue ? mainBody.removeChild(previousDisplayValue) : "";

    let displayValue = document.createElement('div');
    displayValue.className = 'mt-5'
    displayValue.innerHTML = `Cette couleur a pour code RGB : ${randomColorRed}, ${randomColorGreen}, ${randomColorBlue}`;
    mainBody.appendChild(displayValue);

    

}


