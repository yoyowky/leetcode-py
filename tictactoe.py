class TicTacToe(object):
    def __init__(self, n):
        """
        Initialize your data structure here.
        :type n: int
        """
        self.n = n
        self.player1rows = [0]*n
        self.player1columns = [0]*n
        self.player2rows = [0]*n
        self.player2columns = [0]*n
        self.player1diagonal = 0
        self.player1antidiagonal = 0
        self.player2diagonal = 0
        self.player2antidiagonal = 0
    def move(self, row, col, player):
        """
        Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins.
        :type row: int
        :type col: int
        :type player: int
        :rtype: int
        """
        n = self.n
        if(player==1):
            self.player1rows[row]+=1
            self.player1columns[col]+=1
            if(row==col):
                self.player1diagonal += 1
            if((row+col)==(n-1)):
                self.player1antidiagonal += 1
            if(self.player1rows[row]==n or self.player1columns[col]==n or self.player1diagonal==n or self.player1antidiagonal==n):
                return player
        else:
            self.player2rows[row]+=1
            self.player2columns[col]+=1
            if(row==col):
                self.player2diagonal += 1
            if((row+col)==(n-1)):
                self.player2antidiagonal += 1
            if(self.player2rows[row]==n or self.player2columns[col]==n or self.player2diagonal==n or self.player2antidiagonal==n):
                return player
        return 0


tictac = TicTacToe(3)
print(tictac.move(0,0,1))
print(tictac.move(0,2,2))
print(tictac.move(2,2,1))
print(tictac.move(1,1,2))
print(tictac.move(2,0,1))
print(tictac.move(1,0,2))
print(tictac.move(2,1,1))
["TicTacToe","move","move","move","move","move","move","move"]
[[3],[0,0,1],[0,2,2],[2,2,1],[1,1,2],[2,0,1],[1,0,2],[2,1,1]]