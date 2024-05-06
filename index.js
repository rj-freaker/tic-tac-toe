let btnArray = document.querySelectorAll('.btn');

let resetBtn = document.getElementById('resetBtn');
let msgCnt = document.querySelector('.messageContainer');
let msg = document.getElementById('msg');
let playerTurnX = true;

let winningPossibility = [
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7], [2,5,8], [2,4,6],
    [3,4,5],[6,7,8]
];

const resetGame = () => {
    msgCnt.classList.add('hide');
    playerTurnX = true;
    btnArray.forEach((btn) => {
        btn.textContent = "";
        btn.disabled = false;
    })
}

const checkWinner = () => {
    for(let pattern of winningPossibility){
        
        if(btnArray[pattern[0]].innerHTML === 'X'&&
            btnArray[pattern[1]].innerHTML === 'X'&&
            btnArray[pattern[2]].innerHTML === 'X') return 'X';
        else if(btnArray[pattern[0]].innerHTML === 'O'&&
            btnArray[pattern[1]].innerHTML === 'O'&&
            btnArray[pattern[2]].innerHTML === 'O') return 'O';
    }
    return 'Draw';
}
function showWinner(winner){
    msg.innerText = `Winner is ${winner}`;
    msgCnt.classList.remove('hide');
    btnArray.forEach((btn) => {
        btn.disabled = true;
    })
}
for(let i=0;i<btnArray.length;i++){
    btnArray[i].addEventListener('click', ()=>{
        if(playerTurnX && btnArray[i].textContent == ""){
            btnArray[i].textContent = 'X';
            playerTurnX = false;
        
        }else if(!playerTurnX && btnArray[i].textContent == ""){
            btnArray[i].textContent = 'O';
            playerTurnX = true;
        
        }
        btnArray[i].disabled = true;
        
        if(checkWinner() === 'X'){
            showWinner('X');
        }
        else if(checkWinner() === 'O')showWinner('O');
    });
    
}

resetBtn.addEventListener('click', resetGame);

