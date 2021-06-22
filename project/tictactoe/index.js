class Tictactoe {
    constructor(m,n){
        // board
        this.rows=m;
        this.cols=n;
        this.board=new Array(m).fill(new Array(n).fill(''));
        // player
        this.currentPlayer=0; // default 0
        this.playerTable={
            0:'X',
            1:'O'
        };
        this.playerMoveHistory = new Map([[0,[]],[1,[]]]);
        this.status='start';
        this.statusTable={
            "start": "Game is about to start",
            "pending": "Game in process",
            0: "Player 1 win",
            1: "Player 2 win",
            "gameover": "Game Over, no winner"
        }
        // component
        this.gameStatusComponent = document.getElementById("status");
        this.playerComponent = document.getElementById("player");
        this.boardComponent = document.getElementById('board');
        this.playAgainBtn = document.getElementById("playAgain");
    }
    init(){ // first go to page or refresh page
        this.status='start';
        this.updateGameStatus();
        this.updatePlayerTurn();
        this.initBoard();
        this.initEvent();

    }
    updateGameStatus(){
        this.gameStatusComponent.innerText = this.statusTable[this.status];
        this.gameStatusComponent.setAttribute('data-status', this.status);
    }
    updatePlayerTurn(){
        console.log('update turn', this.currentPlayer)
        if(this.currentPlayer===null){
            
            this.playerComponent.innerText = 'Game Over';
        }else{
            this.playerComponent.innerText = `Now is player ${this.currentPlayer+1}'s turn`;
        }
    }
    initBoard(){
        let inner = '';
        console.log(this.board)
        this.board.forEach((row, rowIdx) => {
            console.log('row', row)
            inner = `${inner}<tr>${row.map((col, colIdx) => `<td data-col=${colIdx} data-row=${rowIdx} class="cell"></td>`).join('')}</tr>`
            console.log('inner', inner)
        });
        this.boardComponent.innerHTML=inner;
    }
    initEvent(){
        // console.log(this.currentPlayer)
        this.boardComponent.addEventListener('click', this.moveHandler);
        this.playAgainBtn.addEventListener('click', this.playAgainHandler);
    }
    playAgainHandler=(e)=>{
        this.currentPlayer=0;
        this.init();
        this.playAgainBtn.classList.remove('show');
    }
    moveHandler=(e)=>{ // 注意！！！！容易错：要用箭头函数
        // 箭头函数里是没有this的，而普通函数是有this的
        // 箭头函数中的this是在定义函数时绑定，普通函数是在执行函数时绑定
        // console.log(this) // 定义函数时的this， 如果是普通函数，用call这个function的this==this.boardComponent
        this.status='pending';
        this.updateGameStatus();
        const {target} = e;
        if(target.classList.contains('cell')){
            if(target.innerText!==''){
                return;
            }
            console.log(this.currentPlayer)
            target.innerText=this.playerTable[this.currentPlayer];
        }
        this.playerMoveHistory.set(this.currentPlayer, [...this.playerMoveHistory.get(this.currentPlayer),[parseInt(target.getAttribute('data-row')), parseInt(target.getAttribute('data-col'))]])
        this.findWinner();
        if(this.status==='pending'){
            this.currentPlayer=this.currentPlayer===0?1:0;
            this.updatePlayerTurn();
        }
    }
    findWinner(){
        const currentMoveHistory = this.playerMoveHistory.get(this.currentPlayer);
        const cells = [...this.boardComponent.getElementsByClassName('cell')]; // object => array
        // cols & rows
        const rowSum={}, colSum={};
        currentMoveHistory.forEach(([row,col])=>{
            if(!rowSum[row]) rowSum[row]=0;
            rowSum[row]+=1;
            if(!colSum[col]) colSum[col]=0;
            colSum[col]+=1;
        })
        if(Object.values(rowSum).includes(this.rows) || Object.values(colSum).includes(this.cols)){
            console.log('winner:', this.currentPlayer)
            this.status=this.currentPlayer;
            this.updateGameStatus();
            this.endGame();
            return;
        }
        // right diagonal
        const rightDiagonals = currentMoveHistory.filter(([row,col])=> {
            return row===col;
        })
        if(rightDiagonals.length===this.rows){
            this.status=this.currentPlayer;
            this.updateGameStatus();
            this.endGame();
            return;
        }
        // left diagoal
        const leftMap=new Map();
        for(let i=0; i<this.rows; i++){
            leftMap.set(i,this.rows-i-1)
        }
        const leftDiagonals = currentMoveHistory.filter(([row,col])=>{
            return col===leftMap.get(row);
        })
        if(leftDiagonals.length===this.rows){
            this.status=this.currentPlayer;
            this.updateGameStatus();
            this.endGame();
            return;
        }
        // no winner
        const emptyCells=cells.filter(cell=>{
            return cell.innerText==='';
        })
        if(emptyCells.length === 0){
            this.status='gameover';
            this.updateGameStatus();
            this.endGame();
            return;
        }

    }
    endGame(){
        this.currentPlayer = null;
        this.updatePlayerTurn();
        this.playerMoveHistory = new Map([[0,[]],[1,[]]]);
        this.boardComponent.removeEventListener('click', this.moveHandler);
        this.playAgainBtn.classList.add('show')
    }
    
}


const game = new Tictactoe(3,3);
game.init();
// window.addEventListener('DOMContentLoaded', ()=>{
//     game.init();
// })