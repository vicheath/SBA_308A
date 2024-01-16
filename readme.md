Pokemon Card Generator Readme
Description
This project is a Pokemon Card Generator that utilizes the Fetch API to retrieve Pokemon data from the PokeAPI. The generated data is dynamically displayed on a card, including details such as HP, image, name, types, and stats.

How to Use
Clone or download the repository.
Open the index.html file in a web browser.
Click the "Generate" button to fetch and display a random Pokemon card.
Technologies Used
HTML: Defines the structure of the web page.
CSS: Provides styling for the Pokemon card and button.
JavaScript: Utilizes the Fetch API to fetch Pokemon data, and dynamically updates the card with the retrieved information.
Project Structure
HTML (index.html):

Defines the structure of the web page, including a container div, a card div for displaying Pokemon details, and a button for generating Pokemon cards.
CSS (style.css):

Provides styling for the Pokemon card and button.
JavaScript (index.js):

Defines the typeColor object, mapping Pokemon types to their corresponding color codes.
Uses the Fetch API to retrieve random Pokemon data from the PokeAPI.
Contains functions (getPokeData, generateCard, appendTypes, and styleCard) to handle data fetching, card generation, type appending, and card styling.
Event listeners are attached to the "Generate" button and window load events to initiate the fetching process.
Functions and Promises
getPokeData
javascript
Copy code
let getPokeData = () => {
  let id = Math.floor(Math.random() * 500) + 1;
  const finalUrl = url + id;

  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      generateCard(data);
    });
};
Generates a random Pokemon ID and appends it to the PokeAPI URL.
Utilizes the fetch API to make an asynchronous request for Pokemon data.
Resolves the promise with the JSON data and passes it to the generateCard function.
generateCard
javascript
Copy code
let generateCard = (data) => {
  // Extract relevant data
  const hp = data.stats[3].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  // Set themeColor based on pokemon type
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
Receives Pokemon data and dynamically updates the HTML content of the card.
Calls appendTypes to append Pokemon types and styleCard to apply styling based on the Pokemon's type.
appendTypes
javascript
Copy code
let appendTypes = (types) => {
  types.forEach((item) => {
    let span = document.createElement("SPAN");
    span.textContent = item.type.name;
    document.querySelector(".types").appendChild(span);
  });
};
Takes an array of Pokemon types and dynamically creates span elements for each type.
Appends these elements to the "types" div within the card.
styleCard
javascript
Copy code
let styleCard = (color) => {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
  card.querySelectorAll(".types span").forEach((typeColor) => {
    typeColor.style.backgroundColor = color;
  });
};
Sets the background of the card to a radial gradient based on the Pokemon's type color.
Updates the background color of each Pokemon type span to match the theme color.
Event Listeners
javascript
Copy code
btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
Attaches event listeners to the "Generate" button and window load events.
Clicking the button or loading the page triggers the getPokeData function, initiating the process of fetching and displaying a random Pokemon card.