# Sudoku
This repo represents a full front-end implementation of Sudoku game. For more information about Sudoku please refer to http://en.wikipedia.org/wiki/Sudoku

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

### When user completes the board
When a user enters all valid numbers and completes the board, the game will congratulate the user and give two options in a dialog:  
1- Start a new game with the same difficulty.  
2- Close the dialog and do not start a new game.  

## Design and Development
The design and development process of Sudoku game is based on two principles:  
A simplistic UI design approach: This approach is influenced by the black/white theming of Uber.com. The board background is black. Texts and boarders and white. This design gives an easy yet elegant feeling to the game.  
A complete build system with easy deployment: Grunt.js is used for the build system. This gives us a configurable build system around customizable tasks. You can find more information on these tasks below under 'Build' section.

### Build and Structure
Grunt.js gives us the flexibility around tasks. Each task is run during the build process to deploy to the build folder. These tasks are specific to the platform technologies chosen. You can find detailed informtaion for these technologies, reasonings behind them and trade-offs under the each topic below.
#### Browserify
Resolves the dependencies between modules and produces a bundle accordingly. The bundle is deployed under build/scripts for distribution.  
#### Concat
Bundles the specified CSS files into one file and deploys under build/styles folder. There is definitely a possible improvent in the CSS part of the build system by using preprocessors, such as less or sass.
#### Copy
Copies the static files to the build folder. This is only for the skeleton html file (index.html) and the Jade runtime (jade-runtime.js).
#### Jade
Compiles the jade tempplates to JavaScript and copies to the templates/compiled directory in the source tree. These compiled files are then bundled with the rest of the JavaScript files by browserify.
#### Watch
Watches for any changes in the source tree to re-run the build. This tasks is for convenience and faster development.  
