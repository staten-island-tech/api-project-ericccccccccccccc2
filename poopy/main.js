import "./style.css";

let user = "ericx101";
let tag = "peee";
let name_level = `https://api.henrikdev.xyz/valorant/v1/account/${user}/${tag}`;

async function test() {
  try {
    const temp = await fetch(name_level);
    const array = await temp.json();
    console.log(array);
    document.getElementById("amongus").innerHTML = `<p>${array.data.name}</p>`;
  } catch (error) {
    console.log(error);
  }
}

test();
