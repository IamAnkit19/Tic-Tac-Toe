let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgame = document.querySelector(".new-game");
let messagebox = document.querySelector(".top-options");
let message = document.querySelector("#message");

let turnX = true; //playerX, playerO
let count = 0;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () => {
    turnX = true;
    count = 0
    enableboxes();
    messagebox.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        count++;
        let iswinner = checkwinner();
        if(count==9 && !iswinner){
            gamedraw();
        }
    })
});

const gamedraw = () => {
    message.innerText = `Game was a Draw`;
    messagebox.classList.remove("hide");
    disableboxes();
}

const disableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showWinner = (winner) => {
    message.innerText = `Congratulations, Winner is ${winner}`;
    messagebox.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {
    for(let pattern of winpatterns){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 === position3){
            showWinner(position1);
            }
        }
    }
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);