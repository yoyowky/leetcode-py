class TicTacToeGame{
    constructor(n,m){
      //App state
      this.rows=n; // number of rows in the Grid
      this.columns=m;// number of columns in the Grid
      this.board=new Array(this.rows).fill(''); // only the rows, columns will be added later
      
      this.playersMark=new Map([[0,'X'],[1,'O']]) // 1st player can use mark X and 2nd player can use mark O
      this.currentPlayer=0; // this denotes current player's turn.By Default it is first player.
      this.playersMoveHistory=new Map([[0,[]],[1,[]]]); // this keeps track of player's move history.and this also helps in deciding the game status
      this.status={ // all the possible statuses
          "start":"Game is about to begin!!",
          "pending":"Game in progress.....",
          "gameover":"Game Over! It's a Draw",
          "0":"Player 1 Won !!!",
          "1":"Player 2 Won !!!"
      };
      //All the possible right diagonal winning combinations - for the n*m grid
      this.rightDiagonals=new Map();
      for(let i=0,j=this.columns-1; i<this.rows,j>=0; i++,j--){
        this.rightDiagonals.set(i,j);
      }
      console.log('rightDiagonals', this.rightDiagonals)
      
      // App View
      this.boardContainer=document.querySelector('#board');
      this.playerContainer=document.querySelector('#player');
      this.statusContainer=document.querySelector('#status');
      this.btnPlayagain=document.querySelector('#btnPlayAgain');
      
    }
    
    // on initialization of the app
    init(){
      this.updateGameStatusView('start'); // shows the status of the game - which is "start" in the very beginning
      this.updatePlayersTurnView();//shows the current player
      
      this.showBoard(); // builds the columns in the grid, responsible for showing the tictactoe board
      this.bindEventListener();// adds event to the board (event delegation) - each of the cells are clickable if a valid move
    }
   
   
    // displays the board view 
     
    // creates board's row
    createRow(columns=[],rowIdx){
       if(columns.length==0) return;
      
      return `<tr role="row" class="row">${columns.map((col,colIdx)=>{
           return this.createColumn(rowIdx,colIdx,col);
      }).join('')}</tr>`;
    }
    
    // creates board's column
    createColumn(rowIdx,colIdx,content=''){
      return `<td data-row=${rowIdx} data-col=${colIdx} role="cell" class="cell">${content}</td>`;
    }
    
    getBoard(){
      console.log(this.board)
     return this.board.map((row,rowIdx)=>{
         const columnsArr=new Array(this.columns).fill('');
         console.log('columnsArr', columnsArr)
         return this.createRow(columnsArr,rowIdx);
      }).join('')
    }
    
    showBoard(){
      console.log(this.getBoard())
       this.boardContainer.insertAdjacentHTML('beforeend',this.getBoard()); //在id为board的table里插入元素
    }
   
    
    // play again, event handler
    handlePlayAgain=(e)=>{
        const cells=[...this.boardContainer.querySelectorAll('.cell')];
        console.log('cells', cells)
      
        // this.boardContainer.addEventListener('click',this.handleMove);
      
        this.currentPlayer=0;
        this.updatePlayersTurnView();
      
        this.updateGameStatusView('start');
      
        cells.forEach(cell=> cell.innerText='');
      
        this.btnPlayagain.classList.remove('show');
    }
    
    // on player's move, click event handler
    handleMove=(e)=>{
      console.log('handloemovethis', this)
         const { target }=e;
         if(target.classList.contains('cell')){
           
           // first check if it is a valid move
            if(target.innerText!==''){ // (if already marked donot mark again)
              return;
            }
            
           // update the current targetted cell's view with the current player's mark ( X or O )
            target.innerText=this.playersMark.get(this.currentPlayer);
           
           // keep track of current player's move in the playersMoveHistory map ( this will help us to find the winner)
            this.playersMoveHistory.set(this.currentPlayer,[...this.playersMoveHistory.get(this.currentPlayer),[parseInt(target.getAttribute('data-row')),parseInt(target.getAttribute('data-col'))]]);
           console.log('playersMoveHistory',this.playersMoveHistory);
            // after every valid move lets check if we already found our winner
            this.findWinner();
           
            // if nobody won / game is still not over its still in progress , so update the player's turn
            if(this.statusContainer.getAttribute('data-status')==='pending'){
               this.updateTurn();
               this.updatePlayersTurnView();
            }
           
         }
      };
    
    // event listeners for the board cells and the play again button
    bindEventListener(){
      // this.btnPlayagain.addEventListener('click',this.handlePlayAgain);
      this.boardContainer.addEventListener('click',this.handleMove);
    }
    
    
    
      // after the current game ends
    endGame(cells){
      this.boardContainer.removeEventListener('click',this.handleMove); // since the current game is over , player is not allowed to make a move until play agin is clicked
      // reset playersMoveHistory
      this.playersMoveHistory=new Map([[0,[]],[1,[]]]);
      // show the play again button
      this.btnPlayagain.classList.add('show');
      // players turn over for the current game
      this.currentPlayer=null;
      this.updatePlayersTurnView();
    }
    
    // main logic to check if
    //1.game over / game is a draw 
    //2.game is still pending / inprogress
    // 3. either of the player has won the game - 
   // a. by row 
    //b.by column
    //c.by left/right diagonals
    
    findWinner(){
      const cells=[...this.boardContainer.querySelectorAll('.cell')];
     
      //  player 0 or 1 Won
      const currentPlayersMoves=this.playersMoveHistory.get(this.currentPlayer);
      let allrows={};
      let allcols={};
      currentPlayersMoves.forEach(([row,col])=> {
            allrows[row]=(allrows[row] || 0)+1;
            allcols[col]=(allcols[col] || 0)+1;
      })
      if(Object.values(allrows).includes(this.rows) || Object.values(allcols).includes(this.columns)){
            this.updateGameStatusView(this.currentPlayer.toString());
            this.endGame(cells);
            return;
      }
      
      //left diagonals
      
      if(this.rows===currentPlayersMoves.filter(([row,col])=>{
        return (row===col);
      }).length){
            this.updateGameStatusView(this.currentPlayer.toString());
            this.endGame(cells);
            return;
      }
      
      //Right Diagonals
      let count=0;
     
      currentPlayersMoves.forEach(([row,col])=>{
         if(this.rightDiagonals.has(row) && this.rightDiagonals.get(row)===col){
           count++;
         }
      });
      
    
      if(count===this.rows)
      {
            this.updateGameStatusView(this.currentPlayer.toString());
            this.endGame(cells);
            return;
      }
         
         // Game Over
        const isAllMarked=cells.every(cell=> cell.innerText!=='');
  
         if(isAllMarked){
           this.updateGameStatusView('gameover');
           this.endGame(cells);
           return;
         }
  
      
        // Pending
         this.updateGameStatusView('pending');
    }
    
    // updates the current player's state
    updateTurn(){
      this.currentPlayer=this.currentPlayer===0 ? 1 : 0;
    }
    
    // display's the current player's turn
    updatePlayersTurnView(){
       if(this.currentPlayer===null){
          this.playerContainer.innerText='--The End---';
          return;
       }
       this.playerContainer.innerText=this.currentPlayer===0 ? 'Player 1':'Player 2';
    }
    
    // display's the current status in the top bar
    updateGameStatusView(statusText='pending'){ // defult status if no status pass
        this.statusContainer.innerText=this.status[statusText];
        this.statusContainer.setAttribute('data-status',statusText);
    }
   
  }
  
  // create an instance of tictactoe and call init function
  const game=new TicTacToeGame(3,3);
  // window.addEventListener('DOMContentLoaded',()=>{
  //     game.init();
  // });
  game.init();

  // const arr = new Array(4).fill(new Array(5).fill('x'))
  // console.log(arr)