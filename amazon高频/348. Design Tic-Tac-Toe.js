/**
 * Initialize your data structure here.
 * @param {number} n
 */
 var TicTacToe = function(n) {
    this.n = n;
    this.moveHistory=new Map([[1,[]],[2,[]]]);
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    this.moveHistory.set(player, [...this.moveHistory.get(player), [row,col]]);
    return this.findWinner(player);
};

TicTacToe.prototype.findWinner = function(player){
    const playerMoveHistory = this.moveHistory.get(player);
    // rows, cols
    let rowsSum={}, colsSum={}
    playerMoveHistory.forEach(([row,col])=>{
        if(!rowsSum[row]) rowsSum[row]=0;
        rowsSum[row]+=1;
        if(!colsSum[col]) colsSum[col]=0;
        colsSum[col]+=1;
    })
    if(Object.values(rowsSum).includes(this.n) || Object.values(colsSum).includes(this.n)){
        return player;
    }
    // left diagonal
    const leftDiagnals = playerMoveHistory.filter(([row,col])=>{
        return row===col;
    })
    if(leftDiagnals.length === this.n){
        return player;
    }
    // right diagonal
    const rightMap = new Map();
    for(let i=0; i<this.n; i++){
        rightMap.set(i,this.n-1-i)
    }
    const rightDianals = playerMoveHistory.filter(([row,col])=>{
        return col===rightMap.get(row);
    })
    if(rightDianals.length === this.n){
        return player;
    }
    return 0;
}

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */

 348. Design Tic-Tac-Toe