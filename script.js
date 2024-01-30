let word = '';
let letterHolder = [];
let looseCounter = 0;
let arr9 = []



function playAgain() {
    looseCounter = 0;
    arr9 = [];
    letterHolder = [];
    word = '';
    hitEnter1 = []
    hitEnter2 = []
    dashArray = []
    char = ''
    currentWrongChar = ''
    document.querySelector('.diagram').innerHTML = `<img src="./images/0.png" alt="hangman image">`
    document.querySelector('.table').innerHTML = '<div class="table-row"></div>'
    document.querySelector('.result').innerHTML = '<h2>Enter a Letter</h2><p class="result-p result-p-green">Wrong Letters: 0/6 <p>'
    document.querySelector('.dashes').innerHTML = "";
    document.querySelector('.container').innerHTML = '<div class="diagram"><img src="./images/0.png" alt=""></div><div class="letters"><input type="text" class="inp-1" placeholder="Enter your Word"><button onclick="insertPress()">Insert</button></div><div class="ans stage-1"><div class="inp-left"><input type="text" class="inp-2" placeholder="Enter a letter"><button onclick="insertLetter()">Enter</button></div><div class="dashes"></div><div class="result"><h2>Enter a Letter</h2><p class="result-p result-p-green">Wrong Letters: 0/6 </p></div><div class="table"><div class="table-row"></div></div></div>'

    document.querySelector('.screen').innerHTML = '<button onclick="playAgain()">Play Again</button>'
    document.querySelector('.screen').classList.remove('win')
    document.querySelector('.screen').classList.remove('loss')

    hitEnter1 = document.querySelector('.inp-1');
    hitEnter1.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            insertPress();
        }
    });
    hitEnter2 = document.querySelector('.inp-2');
    hitEnter2.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            insertLetter();
        }
    });
}


function insertPress() {
    getWord();
    document.querySelector('.letters').classList.add('stage-2')
    document.querySelector('.ans').classList.remove('stage-1')

}

function insertLetter() {
    enterLetter();
}

let hitEnter1 = document.querySelector('.inp-1');
    hitEnter1.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            insertPress();
        }
    });
    let hitEnter2 = document.querySelector('.inp-2');
    hitEnter2.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            insertLetter();
        }
    });



function getWord() {
    document.querySelector('.dashes').innerHTML = "";
    word = document.querySelector('.inp-1').value.toLowerCase();
    // console.log(word);
    document.querySelector('.inp-1').value = '';

    letterHolder = [];  // Reset letterHolder

    for (let i = 0; i < word.length; i++) {
        letterHolder.push(word[i]);
        // console.log(word[i]);
        // console.log(letterHolder);
    }

    addDashes();
}

function addDashes() {
    for (let j = 0; j < letterHolder.length; j++) {
        document.querySelector('.dashes').innerHTML += "<div class='dash'></div>";
    }
}

function enterLetter() {
    
    document.querySelector('.result').innerHTML = "";
    let flag1 = false;
    let char = document.querySelector('.inp-2').value.toLowerCase();

    if (char.length === 1) {
        // console.log(char.length);
        for (let k = 0; k < word.length; k++) {
            if (char === word[k]) {
                flag1 = true;
                // console.log(k)
                let dashArray = document.querySelectorAll('.dash')
                // console.log(dashArray)
                dashArray[k].classList.add('letterSpace')
                dashArray[k].innerHTML = char.toUpperCase()
                // console.log(dashArray.length)
                // console.log(letterHolder.length)

                let fullDec = document.querySelectorAll('.letterSpace')
                if (fullDec.length === letterHolder.length){
                    document.querySelector('.screen').classList.add('win')
                    document.querySelector('.win').innerHTML += `<p>The Word was: " ${word.toUpperCase()} "</p><h3>You have Won :D <br> Congrats!</h3>`
                }
                
                
            }
        }
    } else {
        // console.log(char.length);
        alert('Only Enter One letter smartash');
        // document.querySelector('.result').innerHTML = "";
        document.querySelector('.inp-2').value = '';
        document.querySelector('.result').innerHTML = `<h2>Enter a Letter</h2><p class="result-p result-p-green">Wrong Letters:  ${looseCounter}/6</p>`;
        return;
    }

    if (flag1) {
        document.querySelector('.result').innerHTML = `<h2 class='present'>The Letter "${char.toUpperCase()}" is Present :)</h2> <p class="result-p result-p-green">Wrong Letters:  ${looseCounter}/6</p>`;
    } else {
        looseCounter++
        document.querySelector('.diagram').innerHTML = `<img src="./images/${looseCounter}.png" alt="hangman image">`
        document.querySelector('.result').innerHTML = `<h2 class='absent'>The Letter "${char.toUpperCase()}" is Absent :(</h2><p class="result-p result-p-green">Wrong Letters:  ${looseCounter}/6</p>`;
        // console.log("loose counter is:")
        // console.log(looseCounter)
        if (looseCounter === 6){
            document.querySelector('.screen').classList.add('loss')
                    document.querySelector('.loss').innerHTML += `<p>The Word was: " ${word.toUpperCase()} "</p><h3 class="absent">You have Lost! thats sad</h3>`
        }

        arr9.push(char)
        console.log(arr9)
        console.log(looseCounter -1)
        console.log(arr9[looseCounter -1])
        let currentWrongChar = arr9[looseCounter -1].toUpperCase()
        console.log(currentWrongChar)
        document.querySelector('.table-row').innerHTML
        += `<div class="table-data">${currentWrongChar}</div>`
    }
    document.querySelector('.inp-2').value = ''

    const resultP = document.querySelector('.result-p');
    
        if (looseCounter === 3 || looseCounter === 4) {
            resultP.className = 'result-p result-p-org';
        } else if (looseCounter > 4) {
            resultP.className = 'result-p result-p-red';
        } else {
            resultP.className = 'result-p result-p-green';
        }
}
