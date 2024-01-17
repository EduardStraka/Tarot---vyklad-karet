 const cards = [
    { name: "Blázen", image: "imagesTAROT/The Fool.jpg" },
     {name:"Blázen", image: "imagesNAOPAK/Blazen_obraceny.jpg"},
    { name: "Mág", image: "imagesTAROT/The Magician.jpg" },
     {name:"Mág", image: "imagesNAOPAK/Mag_obraceny.jpg"},
    { name: "Velekněžka", image: "imagesTAROT/The High Priestess.jpg" },
     {name:"Velekněžka" , image: "imagesNAOPAK/Veleknezka_obracena.jpg"},
    { name: "Císařovna", image: "imagesTAROT/The Empress.jpg" },
     {name:"Císařovna", image: "imagesNAOPAK/Cisarovna_obracena.jpg"},
    { name: "Císař", image: "imagesTAROT/The Emperor.jpg" },
     {name:"Císař", image: "imagesNAOPAK/Cisar_obraceny.jpg"},
    { name: "Hierofant (Velekněz)", image: "imagesTAROT/The Hierophant.jpg" },
     { name:"Hierofant (Velekněz)", image: "imagesNAOPAK/Hierofant_obraceny.jpg"},
    { name: "Milenci", image: "imagesTAROT/The Lovers.jpg" },
     {name:"Milenci", image: "imagesNAOPAK/Milenci_obraceni.jpg"},
    { name: "Vůz", image: "imagesTAROT/The Chariot.jpg" },
     { name:"Vůz", image: "imagesNAOPAK/Vuz_obraceny.jpg"},
    { name: "Síla", image: "imagesTAROT/Strength.jpg" },
     {name:"Síla", image: "imagesNAOPAK/Sila_obracena.jpg"},
    { name: "Poustevník", image: "imagesTAROT/The Hermit.jpg" },
     {name:"Poustevník", image: "imagesNAOPAK/Poustevnik_obraceny.jpg"},
    { name: "Kolo Štěstěny", image: "imagesTAROT/The Wheel of Fortune.jpg" },
     { name:"Kolo Štěstěny", image: "imagesNAOPAK/Kolo_Stesteny.jpg"},
    { name: "Spravedlnost", image: "imagesTAROT/The Justice.jpg" },
     {name:"Spravedlnost", image: "imagesNAOPAK/Spravedlnost_obracena.jpg"},
    { name: "Viselec", image: "imagesTAROT/The Hanged Man.jpg" },
     { name:"Viselec", image: "imagesNAOPAK/Viselec_obraceny.jpg"},
    { name: "Smrt", image: "imagesTAROT/The Death.jpg" },
     {name:"Smrt", image: "imagesNAOPAK/Smrt_obracena.jpg"},
    { name: "Mírnost", image: "imagesTAROT/The Temperance.jpg" },
     { name:"Mírnost", image: "imagesNAOPAK/Mirnost_obracena.jpg"},
    { name: "Ďábel", image: "imagesTAROT/The Devil.jpg" },
     {name:"Ďábel", image: "imagesNAOPAK/Dabel_obraceny.jpg"},
    { name: "Věž", image: "imagesTAROT/The Tower.jpg" },
     { name:"Věž", image: "imagesNAOPAK/Vez_obracena.jpg"},
    { name: "Hvězda", image: "imagesTAROT/The Star.jpg" },
     { name:"Hvězda", image: "imagesNAOPAK/Hvezda_obracena.jpg"},
    { name: "Měsíc", image: "imagesTAROT/The Moon.jpg" },
     {name:"Měsíc", image: "imagesNAOPAK/Mesic_obraceny.jpg"},
    { name: "Slunce", image: "imagesTAROT/The Sun.jpg" },
     { name:"Slunce", image: "imagesNAOPAK/Slunce_obracene.jpg"},
    { name: "Soud", image: "imagesTAROT/The Judgement.jpg" },
     { name:"Soud", image: "imagesNAOPAK/Soud_obraceny.jpg"},
    { name: "Svět", image: "imagesTAROT/The World.jpg" },
     {name:"Svět", image: "imagesNAOPAK/Svet_obraceny.jpg"},
];

function performReading(method) {
    const cardContainer = document.getElementById('karty');
    cardContainer.innerHTML = '';

    if (method === 'oneCard') {
        drawOneCard();
    } else if (method === 'threeCards') {
        drawThreeCards();
    } else if (method === 'fourCards') {
        drawFourCards();
    } else if (method === 'customMethod') {
        // Implement custom method
    }
}

function drawOneCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];
    displayCard(randomCard, 20, 20, 10);
}

function drawThreeCards() {
    const selectedCards = getRandomCards(3);
    displayCards(selectedCards, [20, 20, 20], [10, 20, 20]);
}function drawFourCards() {
    const selectedCards = getRandomCards(4);
    displayCards(selectedCards, [450, 10, 450, 150], [10, 20, 20, 20]);
}

function getRandomCards(num) {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    return shuffledCards.slice(0, num);
}

function displayCards(selectedCards, tops, lefts) {
    selectedCards.forEach((card, index) => {
        displayCard(card, tops[index], lefts[index]);
    });
}

function displayCard(card, top, left) {
    const cardContainer = document.getElementById('karty');
    const cardElement = document.createElement('div');
    cardElement.className = ('card');
    const imageElement = document.createElement('img');
    imageElement.src = card.image;
    const titleElement = document.createElement('h3');
    titleElement.textContent = card.name;

    cardElement.appendChild(titleElement);
    cardElement.appendChild(imageElement);
    cardContainer.appendChild(cardElement);

    // Nastavení pozic pro každý obrázek
    cardElement.style.position = 'relative';
    cardElement.style.top = top + 'px';
    cardElement.style.left = left + 'px';
}

// Nastavení pozic pro každý obrázek
//imageElement1.style.position = 'absolute';
//imageElement1.style.top = '50px';
//imageElement1.style.left = '20px';
//
//imageElement2.style.position = 'absolute';
//imageElement2.style.top = '50px';
//imageElement2.style.left = '150px';
//
//imageElement3.style.position = 'absolute';
//imageElement3.style.top = '150px';
//imageElement3.style.left = '20px';
//
//imageElement4.style.position = 'absolute';
//imageElement4.style.top = '150px';
//imageElement4.style.left = '150px';
