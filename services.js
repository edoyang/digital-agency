let checkers = document.getElementById('checkers');
let listItems = checkers.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
    let img = document.createElement('img');
    img.src = 'assets/checkers.svg'; 
    img.alt = 'checkers';   
    img.height = '24';
    img.width = '24';       
    img.className = 'svg';
    listItems[i].insertBefore(img, listItems[i].firstChild);
};

const servicesProvided = [
    {"title" : "HTML / CSS Scripting", "body":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries \n \n Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "image":"assets/services1.png", "button":true},
    {"title" : "Backend Development", "body":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries \n \n Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "image":"assets/services2.png", "button":true},
    {"title" : "React or .NET Development", "body":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries \n \n Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "image":"assets/services3.png", "button":true}
];

function createServiceProvided(services) {
    const servicesContainer = document.getElementById('services-container');

    services.forEach(service => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        const itemContentDiv = document.createElement('div');
        itemContentDiv.className = 'item-content';

        const h1 = document.createElement('h1');
        h1.className = "title";
        h1.textContent = service.title;
        itemContentDiv.appendChild(h1);

        const p = document.createElement('p');
        p.className = "body";
        p.textContent = service.body;
        itemContentDiv.appendChild(p);

        if (service.button) {
            const button = document.createElement('button');
            button.className = "read-more";
            button.textContent = "Read More";
            itemContentDiv.appendChild(button);
        } else {
            const comingSoonText = document.createElement('span');
            comingSoonText.textContent = 'Coming Soon';
            comingSoonText.style.display = 'block';
            itemContentDiv.appendChild(comingSoonText);
        }

        itemDiv.appendChild(itemContentDiv);

        const img = document.createElement('img');
        img.src = service.image;
        img.alt = service.title;
        itemDiv.appendChild(img);

        servicesContainer.appendChild(itemDiv);
    });
}

createServiceProvided(servicesProvided);

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const counters = document.querySelectorAll('.total');
counters.forEach(counter => {
    const endValue = parseInt(counter.textContent, 10);
    animateValue(counter, 0, endValue, 3000);
});
