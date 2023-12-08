document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.querySelector('.cards-container');
    const cardData = [
        {"color":"#B000DC", "title":"About Me", "content":"I am a full stack web developer with a passion for learning and creating website as your desire, I am a hard worker and I am always looking for new challenges to improve my skills and knowledge. I learned website development since high school using wordpress"},
        {"color":"#DC1A00", "title":"Education", "content":"I'm an International student and I'm currently studying Advanced Diploma in Website Development at KENT Institute Australia Sydney"},
        {"color":"#00DC72", "title":"Experience", "content":"I have experience with HTML, CSS, JavaScript, jQuery, Node.js, Express.js, MySQL, MongoDB, React.js, and Django, Flask, Python, Java, C#, PHP and also Figma for UI/UX design."}
    ];

    function hexToRGBA(hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);
    
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    
    cardData.forEach(function(data) {
        const newCard = createCard(data);
        cardsContainer.appendChild(newCard);
    });
    
    function createCard(cardData) {
        const card = document.createElement('div');
        card.classList.add('card');
    
        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = cardData.title;
        cardTitle.style.color = cardData.color;
        cardTitle.style.backgroundColor = hexToRGBA(cardData.color, 0.1);
        card.appendChild(cardTitle);
    
        const cardContent = document.createElement('p');
        cardContent.textContent = cardData.content;
        card.appendChild(cardContent);
    
        return card;
    }
});