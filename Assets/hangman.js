let wordArray = ["pizza", "mountain", "television", "horse", "blanket"]
let randomizer = Math.floor(Math.random() * wordArray.length);
let randomWord;
let staticWord = "hangman";
let workingLetter;
function makeRandomWord() {
    randomWord = wordArray[randomizer];
    }
function checkWord() {
    for (let i = 0; i < staticWord.length; i++) {
        if (workingLetter == staticWord[i]) {
            document.querySelector(`#l${i + 1}`).textContent = workingLetter;
        }
    }
}

function buildWordList() {
    let printUl = document.getElementById("printUl");
    for (let i = 0; i < randomWord.length; i++) {
        let letter = randomWord[i]
        var li = printUl.createElement("li");
        li.textContent = letter;
    }
}
function countDown() {
    var countSpan = document.getElementById("counter");
    var time = 30;
    var id = setInterval(reduceTime, 1000);
    function reduceTime() {
      if (time == 0) {
        clearInterval(id);
      } else {
        time--; 
        countSpan.innerText = time; 
      }
    }
}

function keydownAction(event) {
  // The key property holds the value of the key press
  var keyPress = event.key;
  // Updates content on page
  //document.querySelector("#l1").textContent = keyPress;
  workingLetter = keyPress
//  document.querySelector("#status").textContent = "KEYDOWN Event";
checkWord();
}

function beginTimer() {
    makeRandomWord();
    countDown();
    buildWordList();

    
}


let wins;
let losses;


console.log(staticWord[3]);


document.addEventListener("keydown", keydownAction);

document.getElementById("startButton").addEventListener("click", beginTimer);