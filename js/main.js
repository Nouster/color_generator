let mainBody = document.querySelector('body');
mainBody.style.height = '100vh'; 

let randomButton = document.createElement('button');
randomButton.className = 'border border-light text-black text-uppercase rounded-pill px-5 py-2';
randomButton.innerHTML = 'Click me';
randomButton.style.boxShadow = '-4px -4px 10px #FFFFFF, 4px 4px 10px rgba(153, 166, 206, 0.3), inset -2px -2px 4px #FFFFFF, inset 2px 2px 5px rgba(153, 166, 206, 0.3)';
mainBody.appendChild(randomButton);

let copyButton = document.createElement("button");
copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>`;
copyButton.className = 'mt-5 px-2 text-uppercase rounded';
copyButton.onclick = ()=>{
    copyTo()
}
mainBody.appendChild(copyButton);




randomButton.onclick = ()=>{
    bodyRandomColor()
}

function bodyRandomColor (){

    let randomColorRed = Math.floor(Math.random()*255);
    let randomColorGreen = Math.floor(Math.random()*255);
    let randomColorBlue = Math.floor(Math.random()*255);

    // Stockage du dégradé en tant que chaîne de caractères 
    let gradient = `linear-gradient(to top right, rgb(${randomColorRed},${randomColorGreen},${randomColorBlue}), rgba(255, 255, 255, 0))`;


    mainBody.style.backgroundImage = gradient;

    let previousDisplayValue = document.querySelector('.value');
    previousDisplayValue ? mainBody.removeChild(previousDisplayValue) : ""; 

    let displayValue = document.createElement('div');
    displayValue.className = 'mt-5 value'
    displayValue.innerHTML = `Code RGB : ${randomColorRed}, ${randomColorGreen}, ${randomColorBlue}`;
    mainBody.appendChild(displayValue);
}

function copyTo() {
    let copyText = document.querySelector("div.value");
    let textToCopy = copyText.innerText; 

    navigator.clipboard.writeText(textToCopy)
    .then(() => {
        alert(`La couleur "${textToCopy}" a été copiée !`);
    })
    .catch((error) => {
        console.error('Erreur lors de la copie : ', error);
    });
}
