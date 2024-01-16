# Pokemon Card Generator Readme

## Description

This project is a Pokemon Card Generator that utilizes the Fetch API to retrieve Pokemon data from the PokeAPI. The generated data is dynamically displayed on a card, including details such as HP, image, name, types, and stats. The card is styled based on the primary type of the Pokemon.

## Technologies Used

- **JavaScript:** Utilizes the Fetch API to make asynchronous requests to the PokeAPI and dynamically updates the card with the retrieved information.
- **HTML:** Defines the structure of the web page, including a container div, a card div for displaying Pokemon details, and a button for generating Pokemon cards.
- **CSS:** Provides styling for the Pokemon card and button.

## Project Setup

To use the Pokemon Card Generator:

1. Clone or download the repository.
2. Open the `index.html` file in a web browser.
3. Click the "Generate" button to fetch and display a random Pokemon card.

## Code Overview

### Constants

## Code Overview

### Constants
```javascript
const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  // ... (color codes for each Pokemon type)
};
const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");
typeColor: An object that maps Pokemon types to their corresponding color codes, used for styling the card.
url: The base URL for fetching Pokemon data from the PokeAPI.
card and btn: Variables storing references to the HTML elements with IDs "card" and "btn," respectively.

Fetching Pokemon Data

let getPokeData = () => {
  // Generate a random number between 1 and 500
  let id = Math.floor(Math.random() * 500) + 1;
  // Combine the PokeAPI URL with the Pokemon ID
  const finalUrl = url + id;
  // Fetch the generated URL
  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      generateCard(data);
    });
};

The getPokeData function generates a random Pokemon ID, appends it to the PokeAPI URL, and fetches the corresponding Pokemon data.
It uses promises to handle the asynchronous nature of the fetch operation.
Generating Pokemon Card

let generateCard = (data) => {
  // Get necessary data and assign it to variables
  const hp = data.stats[3].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  // Set themeColor based on the Pokemon's primary type
  const themeColor = typeColor[data.types[0].type.name];

  // Update the HTML content of the card
  card.innerHTML = `
    <p class="hp">
      <span>HP</span>
      ${hp}
    </p>
    <img src=${imgSrc} />
    <h2 class="poke-name">${pokeName}</h2>
    <div class="types"></div>
    <div class="stats">
      <div>
        <h3>${statAttack}</h3>
        <p>Attack</p>
      </div>
      <div>
        <h3>${statDefense}</h3>
        <p>Defense</p>
      </div>
      <div>
        <h3>${statSpeed}</h3>
        <p>Speed</p>
      </div>
    </div>
  `;

  // Append Pokemon types and style the card
  appendTypes(data.types);
  styleCard(themeColor);
};
The generateCard function takes Pokemon data and dynamically updates the HTML content of the card with details such as HP, image, name, and stats.
It sets the background and type colors based on the Pokemon's primary type.

Appending Pokemon Types

let appendTypes = (types) => {
  types.forEach((item) => {
    let span = document.createElement("SPAN");
    span.textContent = item.type.name;
    document.querySelector(".types").appendChild(span);
  });
};
The appendTypes function dynamically creates span elements for each Pokemon type and appends them to the "types" div within the card.

Styling the Card
let styleCard = (color) => {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
  card.querySelectorAll(".types span").forEach((typeColor) => {
    typeColor.style.backgroundColor = color;
  });
};
The styleCard function sets the background of the card to a radial gradient based on the Pokemon's type color.
It updates the background color of each Pokemon type span to match the theme color.

Event Listeners
btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
Event listeners are attached to the "Generate" button and window load events.
Clicking the button or loading the page triggers the getPokeData function, initiating the process of fetching and displaying a random Pokemon card. -->