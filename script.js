const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const controls = document.querySelector("#controls");

const playerImage = document.createElement("img");
playerImage.setAttribute("src", "assets/img1.png");
const computerImage = document.createElement("img");
computerImage.setAttribute("src", "assets/img1.png");

const label1 = document.createElement("p");
label1.className = "label";
label1.innerText = "YOU";
const label2 = document.createElement("p");
label2.className = "label";
label2.innerText = "COMPUTER";

const btn1 = document.createElement("button");
btn1.innerText = "PAPER";
btn1.className = "btn";
const btn2 = document.createElement("button");
btn2.innerText = "ROCK";
btn2.className = "btn";
const btn3 = document.createElement("button");
btn3.innerText = "SCISSORS";
btn3.className = "btn";

player.prepend(playerImage);
player.append(label1);

computer.prepend(computerImage);
computer.append(label2);

controls.append(btn2);
controls.append(btn1);
controls.append(btn3);

const clickListener = (button) => {
    if(button === btn1){
        playerImage.setAttribute("src", "assets/img1.png");
    }
    else if(button === btn2){
        playerImage.setAttribute("src", "assets/img2.png");
    }
    else{
        playerImage.setAttribute("src", "assets/img3.png");
    }
}

btn1.addEventListener("click", () => { clickListener(btn1) });
btn2.addEventListener("click", () => { clickListener(btn2) });
btn3.addEventListener("click", () => { clickListener(btn3) });