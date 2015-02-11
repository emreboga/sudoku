# Sudoku
This repo represents a full front-end implementation of Sudoku game. For details on Sudoku please refer to http://en.wikipedia.org/wiki/Sudoku

## How to run
The product code has been deployed to github pages branch. Please open the below link to play the game:  
http://winbythenose.github.io/sudoku/  
If you wish to run the game locally, please follow the steps:  
1- Clone this repository to you local machine  
2- Open the file index.html under 'build' folder  
  
### When the game starts
You can select a difficulty from easy, medium and hard. The difficulty of the game is determined by the number of empty cells. The more empty cells means the harder the game is.  
*Easy:* 27 empty cells (3 per row).  
*Medium:* 36 empty cells (4 per row).  
*Hard:* 45 empty cells (5 per row).  

### When user enters a number
Users can enter numbers only in empty cells. When a user enters a number, the game checks the validation of the number, which means no duplicates in the same row, column and sub-group. If the number is NOT valid, the cell will be highlighted to indicate the invalid number. If user re-enters valid number, or deletes the invalid number, the game will clear highlight.  

