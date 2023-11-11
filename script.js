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
    { href:"#", label: "HTML & CSS",label_color:"#0CBE64", title :"Lorem Ipsum", body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", button: true },
    { href:"#", label: "Javascript",label_color:"#DC0000", title :"Lorem Ipsum", body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", button: true },
    { href:"#", label: "API",label_color:"#B000DC", title :"Lorem Ipsum", body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", button: true },
    { href:"#", label: "React.js",label_color:"#0058DC", title :"Lorem Ipsum", body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", button: true },
    { href:"#", label: "Angular.js",label_color:"#DC7000", title :"Lorem Ipsum", body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", button: true },
    { href:"#", label: "Vue.js",label_color:"#DC7000", title :"Lorem Ipsum", body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", button: true }
];

function hexToRGBA(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function createCardItem(card) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'card';

    const label = document.createElement('p');
    label.className = 'label';
    label.textContent = card.label;
    label.style.color = card.label_color;
    label.style.backgroundColor = hexToRGBA(card.label_color, 0.1);
    itemDiv.appendChild(label);

    const title = document.createElement('h1');
    title.textContent = card.title;
    title.className = 'title';
    itemDiv.appendChild(title);

    const body = document.createElement('p');
    body.textContent = card.body;
    body.className = 'body';
    itemDiv.appendChild(body);

    if (card.button) {
        const anchor = document.createElement('a');
        anchor.href = card.href;
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

document.addEventListener('DOMContentLoaded', () => {
    const productCardsContainer = document.querySelector('.product__cards');
    let cards = document.querySelectorAll('.product__cards .card');

    // Function to clone all cards in the set
    const cloneCards = () => {
        for (let i = 0; i < cards.length; i++) {
            const clone = cards[i].cloneNode(true);
            productCardsContainer.appendChild(clone);
        }
        // Update the cards NodeList
        cards = document.querySelectorAll('.product__cards .card');
    };

    // Scroll Right by 300px
    const scrollRight = () => {
        productCardsContainer.scrollLeft += 300;
        checkAndCloneCards();
    };

    // Scroll Left by 300px
    const scrollLeft = () => {
        productCardsContainer.scrollLeft -= 300;
        checkAndCloneCards();
    };

    // Check if need to clone cards (based on scroll position)
    const checkAndCloneCards = () => {
        const maxScrollLeft = productCardsContainer.scrollWidth - productCardsContainer.clientWidth;
        if (productCardsContainer.scrollLeft > maxScrollLeft - 300) {
            cloneCards();
        }
    };

    // Attach event listeners to arrow buttons
    const arrowLeft = document.querySelector('.arrow__button img[alt="arrow_left"]');
    const arrowRight = document.querySelector('.arrow__button img[alt="arrow_right"]');

    arrowLeft.addEventListener('click', scrollLeft);
    arrowRight.addEventListener('click', scrollRight);

    // Initial cloning of cards
    cloneCards();
});