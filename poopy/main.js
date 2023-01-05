import "./style.css";

const button = document.getElementById("btn");
const in1 = document.getElementById("name");
const in2 = document.getElementById("tag");

async function create() {
  try {
    let user = in1.value;
    let tag = in2.value;
    let name_level = `https://api.henrikdev.xyz/valorant/v1/account/${user}/${tag}`;
    console.log(name_level);
    const temp = await fetch(name_level);
    const array = await temp.json();
    console.log(array);
    document.getElementById(
      "amongus"
    ).innerHTML = `<p>${array.data.account_level}</p>`;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", create);
