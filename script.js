const ListOfWords = [
  "Im 90% vegan",
  "Top of food chain",
  "Apex predators",
  "Hitler was vegetarian",
  "Pushing lifestyle",
  "Where do you get your protein",
  "I dont feel bad for animals",
  "Plants taste bad",
  "Bad / Ethical is subjective",
  "Vegans kill more animals",
  "*That Vegan Teacher*",
  "Meat is natural",
  "Vegans being deficient",
  "Hunt for food",
  "Canine teeth",
  "We are smarter than animals",
  "You don't know what animal wants",
  "Humane killing",
  "Animals hunting animals",
  "*Denial of factual evidence*",
  "If everyone goes vegan...",
  "What about your phone/clothes?",
  "Animals will take over the earth",
  "Animals will go extinct",
  "I was going to be vegan but ...",
  "Halal / Kosher",
  "Plants feel pain",
  "Meat taste good",
  "Knife in throat = painless",
  "Bacon tho",
  "Tribes living in jungle",
  "Vegans eat grass",
  "Free range is ok",
  "Milk / Eggs is ok",
  "Cultural",
  "Mention god / scripture",
  "Religious Holiday",
  "Is it not against the Law",
  "1 person can't make a difference",
  "Horse Riding benefits the horse",
  "Farmers will lose jobs",
  "Veganism is expensive",
  "I am not killing anyone",
  "Animals are not smart",
  "Animals cant't consent, so its ok",
  "Vegans are weak",
  "Cows / Pigs are not pets",
  "Kill to control population",
  "Zoos help animals",
  "Someone buys me food",
  "Feeling bad after going Vegan",
  "Testing on animals in necessary",
  "Rights And Law",
];

var usedNums = new Array(76);

function setSquare(thisSquare) {
  var currSquare = "square" + thisSquare;

  document.getElementById(
    currSquare
  ).innerHTML = `<div class="h-100 row align-items-center">
  <div class="col">
    <div class="row  justify-content-md-center">
      ${getNewNum()}
    </div>
  </div>
</div>`;

  document
    .getElementById(currSquare)
    .setAttribute("onCLick", "ChangeColor(this.id)");
}

function newCard() {
  //Starting loop through each square card
  for (var i = 0; i < 24; i++) {
    //<--always this code for loops. change in red
    setSquare(i);
  }
}

function getNewNum() {
  const random = Math.floor(Math.random() * ListOfWords.length);
  const NewList = ListOfWords[random];
  ListOfWords.splice(random, 1);
  return NewList;
}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    usedNums[i] = false;
  }

  newCard();
}

function ChangeColor(id) {
  var Elm = document.getElementById(id);
  if (Elm.style.backgroundColor == "green" && Elm.style.color == "white") {
    Elm.style.color = "black";
    Elm.style.backgroundColor = "";
  } else {
    Elm.style.color = "white";
    Elm.style.backgroundColor = "green";
  }
}
