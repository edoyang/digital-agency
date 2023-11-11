const services = [
    { image: "assets/service.png", h1: "Example 1", button: true },
    { image: "assets/service.png", h1: "Example 2", button: true },
    { image: "assets/service.png", h1: "Example 3", button: false }
];

function createServiceItem(service) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';

    const img = document.createElement('img');
    img.src = service.image;
    img.alt = service.h1;
    img.width = 100;
    itemDiv.appendChild(img);

    const h1 = document.createElement('h1');
    h1.textContent = service.h1;
    itemDiv.appendChild(h1);

    if (service.button) {
        const anchor = document.createElement('a');
        anchor.href = '#'; // Set the URL you want to link to
        anchor.style.cursor = 'pointer'; // To show it's clickable
    
        const buttonImg = document.createElement('img');
        buttonImg.src = 'assets/button.png'; // Your button image path
        buttonImg.alt = 'Button';
    
        anchor.appendChild(buttonImg);
        itemDiv.appendChild(anchor);
    } else {
        const comingSoonText = document.createElement('span');
        comingSoonText.textContent = 'Coming Soon';
        comingSoonText.style.display = 'block'; // Makes the span start on a new line
        itemDiv.appendChild(comingSoonText);
    }    

    return itemDiv;
}

const serviceContainer = document.querySelector('.service__items');
services.forEach(service => {
    serviceContainer.appendChild(createServiceItem(service));
});