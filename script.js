const services = [
    { image: "assets/mobile_game.png", h1: "Mobile Game Development", button: true },
    { image: "assets/pc_game.png", h1: "PC Game Development", button: true },
    { image: "assets/ps4_game.png", h1: "PS4 Development", button: true },
    { image: "assets/ar_vr.png", h1: "AR/VR Solution", button: true },
    { image: "assets/design.png", h1: "AR/VR Design", button: true },
    { image: "assets/3d_modeling.png", h1: "3D Modeling", button: true },
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
        anchor.href = '#';
        anchor.style.cursor = 'pointer';
    
        const buttonImg = document.createElement('img');
        buttonImg.src = 'assets/button_service.svg';
        buttonImg.alt = 'Button';
    
        anchor.appendChild(buttonImg);
        itemDiv.appendChild(anchor);
    } else {
        const comingSoonText = document.createElement('span');
        comingSoonText.textContent = 'Coming Soon';
        comingSoonText.style.display = 'block';
        itemDiv.appendChild(comingSoonText);
    }    

    return itemDiv;
}

const serviceContainer = document.querySelector('.service__items');

services.forEach(service => {
    serviceContainer.appendChild(createServiceItem(service));
});

const card = [
    { label: "Lorem Ipsum", title :"Lorem Ipsum", body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", button: true },
    { label: "Lorem Ipsum", title :"Lorem Ipsum", body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", button: true },
    { label: "Lorem Ipsum", title :"Lorem Ipsum", body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", button: true },
    { label: "Lorem Ipsum", title :"Lorem Ipsum", body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", button: true },
    { label: "Lorem Ipsum", title :"Lorem Ipsum", body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", button: true },
];

function createCardItem(card) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'card';

    const label = document.createElement('p');
    label.textContent = card.label;
    
    itemDiv.appendChild(label);

    const title = document.createElement('h1');
    title.textContent = card.title;
    itemDiv.appendChild(title);  // Fixed this line

    const body = document.createElement('p');
    body.textContent = card.body;
    itemDiv.appendChild(body);  // Fixed this line

    if (card.button) {
        const anchor = document.createElement('a');
        anchor.href = '#';
        anchor.className = 'read-more-button';
        anchor.style.textDecoration = 'none';
    
        const textSpan = document.createElement('span'); 
        textSpan.textContent = 'Read More';
        anchor.appendChild(textSpan);
    
        const buttonImg = document.createElement('img');
        buttonImg.src = 'assets/button_service.svg';
        buttonImg.alt = 'Icon';
        buttonImg.style.width = '12px';
        buttonImg.style.height = '12px';
        buttonImg.style.marginLeft = '8px'; 
    
        anchor.appendChild(buttonImg);
        itemDiv.appendChild(anchor);    
    } else {
        const comingSoonText = document.createElement('span');
        comingSoonText.textContent = 'Coming Soon';
        comingSoonText.style.display = 'block';
        itemDiv.appendChild(comingSoonText);
    }    

    return itemDiv;
}

const cardContainer = document.querySelector('.product__cards');
card.forEach(card => {
    cardContainer.appendChild(createCardItem(card));
});