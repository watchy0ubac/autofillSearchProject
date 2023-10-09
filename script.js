const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  const capital = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  console.log(capital(str));
  let results = fruit.filter(
    (fruit) => fruit.includes(str.toLowerCase()) || fruit.includes(capital(str))
  );
  return results;
}

function searchHandler(e) {
  // TODO
  const barInput = e.currentTarget.value;
  let resultArr = [];
  if (barInput !== "") {
    resultArr = search(barInput);
  }
  showSuggestions(resultArr, barInput);
}

function showSuggestions(resultArr, inputVal) {
  suggestions.innerHTML = "";
  console.log(resultArr);
  if (resultArr.length === 0) {
    suggestions.innerHTML = "";
    suggestions.classList.remove("has-suggestions");
  } else {
    for (let i = 0; i < resultArr.length; i++) {
      console.log(resultArr[i]);
      suggestions.innerHTML += `<li>${resultArr[i]}</li>`;
    }
    suggestions.classList.add("has-suggestions");
  }
}

function useSuggestion(e) {
  input.value = e.target.innerText;
  input.focus();
  suggestions.innerHTML = "";
  suggestions.classList.remove("has-suggestions");
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
