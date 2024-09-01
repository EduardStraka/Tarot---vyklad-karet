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
   { name: "Velekněz ", image: "imagesTAROT/The Hierophant.jpg" },
    { name:"Velekněz", image: "imagesNAOPAK/Hierofant_obraceny.jpg"},
   { name: "Milenci", image: "imagesTAROT/The Lovers.jpg" },
    {name:"Milenci", image: "imagesNAOPAK/Milenci_obraceni.jpg"},
   { name: "Vůz", image: "imagesTAROT/The Chariot.jpg" },
    { name:"Vůz", image: "imagesNAOPAK/Vuz_obraceny.jpg"},
   { name: "Síla", image: "imagesTAROT/Strength.jpg" },
    {name:"Síla", image: "imagesNAOPAK/Sila_obracena.jpg"},
   { name: "Poustevník", image: "imagesTAROT/The Hermit.jpg" },
    {name:"Poustevník", image: "imagesNAOPAK/Poustevnik_obraceny.jpg"},
   { name: "Kolo Štěstěny", image: "imagesTAROT/The Wheel of Fortune.jpg" },
    { name:"Kolo Štěstěny", image: "imagesNAOPAK/Kolo_Stesteny_obracene.jpg"},
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
    {name:"Eso pohárů", image: "malaARKANAcups/1-EsoPoharu.jpg"},
    {name:"Eso Pohárů", image: "malaARKANAcupsNAOPAK/1-EsoPoharuNAOPAK.jpg"},
    {name: "Dvojka Pohárů", image: "malaARKANAcups/2-DvojkaPoharu.jpg"},
    {name:"Dvojka Pohárů", image: "malaARKANAcupsNAOPAK/2-DvojkaPoharuNAOPAK.jpg"},
    {name:"Trojka Pohárů", image: "malaARKANAcups/3-TrojkaPoharu.jpg"},
    {name: "Trojka Pohárů", image: "malaARKANAcupsNAOPAK/3-TrojkaPoharuNAOPAK.jpg"},
    {name: "Čtyřka Pohárů", image: "malaARKANAcups/4-CtyrkaPoharu.jpg"},
    {name: "Čtyřka Pohárů", image: "malaARKANAcupsNAOPAK/4-CtyrkaPoharuNAOPAK.jpg"},
    {name: "Pětka Pohárů", image: "malaARKANAcups/5-PetkaPoharu.jpg"},
    {name: "Pětka Pohárů", image: "malaARKANAcupsNAOPAK/5-PetkaPoharuNAOPAK.jpg"},
    {name: "Šestka Pohárů", image: "malaARKANAcups/6-SestkaPoharu.jpg"},
    {name: "Šestka Pohárů", image: "malaARKANAcupsNAOPAK/6-SestkaPoharuNAOPAK.jpg"},
    {name: "Sedmička Pohárů", image: "malaARKANAcups/7-SedmickaPoharu.jpg"},
    {name: "Sedmička Pohárů", image: "malaARKANAcupsNAOPAK/7-SedmickaPoharuNAOPAK.jpg"},
    {name: "Osmička Pohárů", image: "malaARKANAcups/8-OsmickaPoharu.jpg"},
    {name: "Osmička Pohárů", image: "malaARKANAcupsNAOPAK/8-OsmickaPoharuNAOPAK.jpg"},
    {name: "Devítka Pohárů", image: "malaARKANAcups/9-DevitkaPoharu.jpg"},
    {name: "Devítka Pohárů", image: "malaARKANAcupsNAOPAK/9-DevitkaPoharuNAOPAK.jpg"},
    {name: "Desítka Pohárů", image: "malaARKANAcups/10-DesitkaPoharu.jpg"},
    {name: "Desítka Pohárů", image: "malaARKANAcupsNAOPAK/10-DesitkaPoharuNAOPAK.jpg"},
    {name: "Páže Pohárů", image: "malaARKANAcups/11-PazePoharu.jpg"},
    {name: "Páže Pohárů", image: "malaARKANAcupsNAOPAK/11-PazePoharuNAOPAK.jpg"},
    {name: "Rytíř Pohárů", image: "malaARKANAcups/12-RytirPoharu.jpg"},
    {name: "Rytíř Pohárů", image: "malaARKANAcupsNAOPAK/12-RytirPoharuNAOPAK.jpg"},
    {name: "Královna Pohárů", image: "malaARKANAcups/13-KralovnaPoharu.jpg"},
    {name: "Královna Pohárů", image: "malaARKANAcupsNAOPAK/13-KralovnaPoharuNAOPAK.jpg"},
    {name: "Král Pohárů", image: "malaARKANAcups/14-KralPoharu.jpg"},
    {name: "Král Pohárů", image: "malaARKANAcupsNAOPAK/14-KralPoharuNAOPAK.jpg"},
    {name: "Eso Mečů", image: "malaARKANAswords/1-EsoMecu.jpg"},
    {name: "Eso Mečů", image: "malaARKANAswordsNAOPAK/1-EsoMecuNAOPAK.jpg"},
    {name: "Dvojka Mečů", image: "malaARKANAswords/2-DvojkaMecu.jpg"},
    {name: "Dvojka Mečů", image:"malaARKANAswordsNAOPAK/2-DvojkaMecuNAOPAK.jpg"},
    {name: "Trojka Mečů", image: "malaARKANAswords/3-TrojkaMecu.jpg"},
    {name: "Trojka Mečů", image: "malaARKANAswordsNAOPAK/3-TrojkaMecuNAOPAK.jpg"},
    {name: "Čtyřka Mečů", image: "malaARKANAswords/4-CtyrkaMecu.jpg"},
    {name: "Čtyřka Mečů", image: "malaARKANAswordsNAOPAK/4-CtyrkaMecuNAOPAK.jpg"},
    {name: "Pětka Mečů", image: "malaARKANAswords/5-PetkaMecu.jpg"},
    {name: "Pětka Mečů", image: "malaARKANAswordsNAOPAK/5-PetkaMecuNAOPAK.jpg"},
    {name: "Šestka Mečů", image: "malaARKANAswords/6-SestkaMecu.jpg"},
    {name: "Šestka Mečů", image: "malaARKANAswordsNAOPAK/6-SestkaMecuNAOPAK.jpg"},
    {name: "Sedmička Mečů", image: "malaARKANAswords/7-SedmickaMecu.jpg"},
    {name: "Sedmička Mečů", image: "malaARKANAswordsNAOPAK/7-SedmickaMecuNAOPAK.jpg"},
    {name: "Osmička Mečů", image: "malaARKANAswords/8-OsmickaMecu.jpg"},
    {name: "Osmička Mečů", image: "malaARKANAswordsNAOPAK/8-OsmickaMecuNAOPAK.jpg"},
    {name: "Devítka Mečů", image: "malaARKANAswords/9-DevitkaMecu.jpg"},
    {name: "Devítka Mečů", image: "malaARKANAswordsNAOPAK/9-DevitkaMecuNAOPAK.jpg"},
    {name: "Desítka Mečů", image: "malaARKANAswords/10-DesitkaMecu.jpg"},
    {name: "Desítka Mečů", image: "malaARKANAswordsNAOPAK/10-DesitkaMecuNAOPAK.jpg"},
    {name: "Páže Mečů", image: "malaARKANAswords/11-PazeMecu.jpg"},
    {name: "Páže Mečů", image: "malaARKANAswordsNAOPAK/11-PazeMecuNAOPAK.jpg"},
    {name: "Rytíř Mečů", image: "malaARKANAswords/12-RytirMecu.jpg"},
    {name: "Rytíř Mečů", image: "malaARKANAswordsNAOPAK/12-RytirMecuNAOPAK.jpg"},
    {name: "Královna Mečů", image: "malaARKANAswords/13-KralovnaMecu.jpg"},
    {name: "Královna Mečů", image: "malaARKANAswordsNAOPAK/13-KralovnaMecuNAOPAK.jpg"},
    {name: "Král Mečů", image: "malaARKANAswords/14-KralMecu.jpg"},
    {name: "Král Mečů", image: "malaARKANAswordsNAOPAK/14-KralMecuNAOPAK.jpg"},
    {name: "Eso Holí", image: "malaARKANAwands/1-EsoHoli.jpg"},
    {name: "Eso Holí", image: "malaARKANAwandsNAOPAK/1-EsoHoliNAOPAK.jpg"},
    {name: "Dvojka Holí", image: "malaARKANAwands/2-DvojkaHoli.jpg"},
    {name: "Dvojka Holí", image: "malaARKANAwandsNAOPAK/2-DvojkaHoliNAOPAK.jpg"},
    {name: "Trojka Holí", image: "malaARKANAwands/3-TrojkaHoli.jpg"},
    {name: "Trojka Holí", image: "malaARKANAwandsNAOPAK/3-TrojkaHoliNAOPAK.jpg"},
    {name: "Čtyřka Holí", image: "malaARKANAwands/4-CtyrkaHoli.jpg"},
    {name: "Čtyřka Holí", image: "malaARKANAwandsNAOPAK/4-CtyrkaHoliNAOPAK.jpg"},
    {name: "Pětka Holí", image: "malaARKANAwands/5-PetkaHoli.jpg"},
    {name: "Pětka Holí", image: "malaARKANAwandsNAOPAK/5-PetkaHoliNAOPAK.jpg"},
    {name: "Šestka Holí", image: "malaARKANAwands/6-SestkaHoli.jpg"},
    {name: "Šestka Holí", image: "malaARKANAwandsNAOPAK/6-SestkaHoliNAOPAK.jpg"},
    {name: "Sedmička Holí", image: "malaARKANAwands/7-SedmickaHoli.jpg"},
    {name: "Sedmička Holí", image: "malaARKANAwandsNAOPAK/7-SedmickaHoliNAOPAK.jpg"},
    {name: "Osmička Holí", image: "malaARKANAwands/8-OsmickaHoli.jpg"},
    {name: "Osmička Holí", image: "malaARKANAwandsNAOPAK/8-OsmickaHoliNAOPAK.jpg"},
    {name: "Devítka Holí", image: "malaARKANAwands/9-DevitkaHoli.jpg"},
    {name: "Devítka Holí", image: "malaARKANAwandsNAOPAK/9-DevitkaHoliNAOPAK.jpg"},
    {name: "Desítka Holí", image: "malaARKANAwands/10-DesitkaHoli.jpg"},
    {name: "Desítka Holí", image: "malaARKANAwandsNAOPAK/10-DesitkaHoliNAOPAK.jpg"},
    {name: "Páže Holí", image: "malaARKANAwands/11-PazeHoli.jpg"},
    {name: "Páže Holí", image: "malaARKANAwandsNAOPAK/11-PazeHoliNAOPAK.jpg"},
    {name: "Rytíř Holí", image: "malaARKANAwands/12-RytirHoli.jpg"},
    {name: "Rytíř Holí", image: "malaARKANAwandsNAOPAK/12-RytirHoliNAOPAK.jpg"},
    {name: "Královna Holí", image: "malaARKANAwands/13-KralovnaHoli.jpg"},
    {name: "Královna Holí", image: "malaARKANAwandsNAOPAK/13-KralovnaHoliNAOPAK.jpg"},
    {name: "Král Holí", image: "malaARKANAwands/14-KralHoli.jpg"},
    {name: "Král Holí", image: "malaARKANAwandsNAOPAK/14-KralHoliNAOPAK.jpg"},
    {name: "Eso Pentaklů", image: "malaARKANApentacles/1-EsoPentaklu.jpg"},
    {name: "Eso Pentaklů", image: "malaARKANApentaclesNAOPAK/1-EsoPentakluNAOPAK.jpg"},
    {name: "Dvojka Pentaklů", image: "malaARKANApentacles/2-DvojkaPentaklu.jpg"},
    {name: "Dvojka Pentaklů", image: "malaARKANApentaclesNAOPAK/2-DvojkaPentakluNAOPAK.jpg"},
    {name: "Trojka Pentaklů", image: "malaARKANApentacles/3-TrojkaPentaklu.jpg"},
    {name: "Trojka Pentaklů", image: "malaARKANApentaclesNAOPAK/3-TrojkaPentakluNAOPAK.jpg"},
    {name: "Čtyřka Pentaklů", image: "malaARKANApentacles/4-CtyrkaPentaklu.jpg"},
    {name: "Čtyřka pentaklů", image: "malaARKANApentaclesNAOPAK/4-CtyrkaPentakluNAOPAK.jpg"},
    {name: "Pětka Pentaklů", image: "malaARKANApentacles/5-PetkaPentaklu.jpg"},
    {name: "Pětka Pentaklů", image: "malaARKANApentaclesNAOPAK/5-PetkaPentakluNAOPAK.jpg"},
    {name: "Šestka Pentaklů", image: "malaARKANApentacles/6-SestkaPentaklu.jpg"},
    {name: "Šestka Pentaklů", image: "malaARKANApentaclesNAOPAK/6-SestkaPentakluNAOPAK.jpg"},
    {name: "Sedmička Pentaklů", image: "malaARKANApentacles/7-SedmickaPentaklu.jpg"},
    {name: "Sedmička Pentaklů", image: "malaARKANApentaclesNAOPAK/7-SedmickaPentakluNAOPAK.jpg"},
    {name: "Osmička Pentaklů", image: "malaARKANApentacles/8-OsmickaPentaklu.jpg"},
    {name: "Osmička Pentaklů", image: "malaARKANApentaclesNAOPAK/8-OsmickaPentakluNAOPAK.jpg"},
    {name: "Devítka Pentaklů", image: "malaARKANApentacles/9-DevitkaPentaklu.jpg"},
    {name: "Devítka Pentaklů", image: "malaARKANApentaclesNAOPAK/9-DevitkaPentakluNAOPAK.jpg"},
    {name: "Desítka Pentaklů", image: "malaARKANApentacles/10-DesitkaPentaklu.jpg"},
    {name: "Desítka Pentaklů", image: "malaARKANApentaclesNAOPAK/10-DesitkaPentakluNAOPAK.jpg"},
    {name: "Páže Pentaklů", image: "malaARKANApentacles/11-PazePentaklu.jpg"},
    {name: "Páže Pentaklů", image: "malaARKANApentaclesNAOPAK/11-PazePentakluNAOPAK.jpg"},
    {name: "Rytíř Pentaklů", image: "malaARKANApentacles/12-RytirPentaklu.jpg"},
    {name: "Rytíř Pentaklů", image: "malaARKANApentaclesNAOPAK/12-RytirPentakluNAOPAK.jpg"},
    {name: "Královna Pentaklů", image: "malaARKANApentacles/13-KralovnaPentaklu.jpg"},
    {name: "Královna Pentaklů", image: "malaARKANApentaclesNAOPAK/13-KralovnaPentakluNAOPAK.jpg"},
    {name: "Král Pentaklů", image: "malaARKANApentacles/14-KralPentaklu.jpg"},
    {name: "Král Pentaklů", image: "malaARKANApentaclesNAOPAK/14-KralPentakluNAOPAK.jpg"},
     
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
    displayCard(randomCard, -2230, 10); // Přidána hodnota pro left
}

function drawThreeCards() {
    const selectedCards = getRandomCards(3);
    displayCards(selectedCards, [-1450, -1450, -1450], [10, 20, 30]); // Správné pozice pro tři karty
}

function drawFourCards() {
    const selectedCards = getRandomCards(4);
    displayCards(selectedCards, [-1070, -2006, -1070, -770], [10,20,30,20 ]); // Správné pozice pro čtyři karty
}

function getRandomCards(num) {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    return shuffledCards.slice(0, num);
}

function displayCards(selectedCards, tops, lefts) {
    selectedCards.forEach((card, index) => {
        const top = tops[index];
        const left = lefts[index];
        displayCard(card, top, left);
    });
}

function displayCard(card, top, left) {
    const cardContainer = document.getElementById('karty');
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    const imageElement = document.createElement('img');
    imageElement.src = card.image;
    imageElement.style.position = 'absolute';
    imageElement.style.top = '300px';
    imageElement.style.left = '190px';
    const titleElement = document.createElement('h3');
    titleElement.textContent = card.name;
    //const subtitleElement = document.createElement('p')// Pridani podtitulku ke vsem kartam
    //subtitleElement.textContent = "obráceně"// Text podtitulku

        cardElement.appendChild(titleElement);
    cardElement.appendChild(imageElement);
    cardContainer.appendChild(cardElement);
    //cardElement.appendChild(subtitleElement); // Zajisti pridani podtitulku ke vsem kartam

    // Nastavení pozic pro každý obrázek
    cardElement.style.position = 'relative';
    cardElement.style.top = top + 'px';
    cardElement.style.left = left + 'px';

  
}
