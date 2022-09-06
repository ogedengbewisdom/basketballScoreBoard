let count = 0;
let homeEl = document.getElementById("home-no");
// Home scoreboard function

function one() {
    count++;
    homeEl.textContent = count;
}

function two() {
    
    count += 2;
    homeEl.textContent = count;
}

function three() {
    
    count += 3;
    homeEl.textContent = count;
}

function onee() {
    
    count--;
    homeEl.textContent = count;
}

function twoo() {
    
    count -= 2;
    homeEl.textContent = count;
}

function threee() {
    
    count -= 3;
    homeEl.textContent = count;
}

// guest score sheet
let counter = 0;

let awayEl = document.getElementById("away-no")

function addone() {
    
    counter++;
    awayEl.textContent = counter;
}

function addtwo() {
    
    counter += 2;
    awayEl.textContent = counter;
}

function addthree() {
    
    counter += 3;
    awayEl.textContent = counter;
}

function subone() {
    
    counter--;
    awayEl.textContent = counter;
}

function subtwo() {
    
    counter -= 2;
    awayEl.textContent = counter;
}

function subthree() {
    
    counter -= 3;
    awayEl.textContent = counter;
}

function endgame() {
    awayEl.textContent = 0;
    homeEl.textContent = 0;
    count = 0;
    counter = 0;
}
