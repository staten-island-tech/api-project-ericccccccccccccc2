import "./style.css";

const button = document.getElementById("btn");
const in1 = document.getElementById("name");
const in2 = document.getElementById("tag");
const div = document.getElementById("wowie");

function levelreturn(level) {
  if (parseInt(level) < 20) {
    return "You're not a loser and are very cool";
  } else if (parseInt(level) < 40) {
    return "You're starting to show signs of being a loser, make sure you don't play more";
  } else if (parseInt(level) < 80) {
    return "Keep going and you'll be shunned by society wherever you go. You've been warned.";
  } else if (parseInt(level) < 120) {
    return "Ewwwww get away from me";
  } else if (parseInt(level) < 160) {
    return "HOW DO YOU HAVE THIS MANY HOURS?? GET A SHOWER NOW!!!";
  } else {
    return "The year is 2052. You haven't seen the sun in years, and you still suck at Valorant.";
  }
}

async function create() {
  try {
    let user = in1.value;
    let tag = in2.value;
    let name_level = `https://api.henrikdev.xyz/valorant/v1/account/${user}/${tag}`;
    let mmr = `https://api.henrikdev.xyz/valorant/v1/mmr/na/${user}/${tag}`;
    const temp = await fetch(name_level);
    const array = await temp.json();
    const temp2 = await fetch(mmr);
    const mmrArray = await temp2.json();
    console.log(array);
    let levelText = levelreturn(array.data.account_level);
    console.log(levelText);
    div.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="amongus">
      <h1 class="subtitles">${array.data.name} - rank: ${mmrArray.data.currenttierpatched}</h1>
      <image class= "banner" alt="the banner selected by the user in the video game Valorant" src="${array.data.card.wide}"></image> 
      <p class="subtitles">your level is ${array.data.account_level}, ${levelText}</p>
      </div>`
    );
  } catch (error) {
    div.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="amongus">
      <h1 class="subtitles">You had an invalid input OR your account is marked as private, change your settings in the RIOT Client</h1>      </div>`
    );
    console.log(error);
  }
}

button.addEventListener("click", create);
