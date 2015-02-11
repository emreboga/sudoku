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
A game can also be completed by click on the 'Solution?' button.

## Design and Development
The design and development process of Sudoku game is based on two principles:  
**Simplistic UI design approach:** This approach is influenced by the black/white theming of Uber.com. The board background is black. Texts and boarders and white. This design gives an easy yet elegant feeling to the game.  
**Complete build system with easy deployment:** Grunt.js is used for the build system. This gives us a configurable build system around customizable tasks. You can find more information on these tasks below under 'Build' section.

### Build Platform
Grunt.js gives us the flexibility around tasks. Each task is run during the build process to deploy to the build folder. These tasks are specific to the platform technologies chosen. You can find detailed informtaion for these technologies, reasonings behind them and trade-offs under the each topic below.
#### Browserify
Resolves the dependencies between modules and produces a bundle accordingly. The bundle is deployed under build/scripts for distribution.  
#### Concat
Bundles the specified CSS files into one file and deploys under build/styles folder. There is definitely a possible improvent in the CSS part of the build system by using preprocessors, such as less or sass.
#### Copy
Copies the static files to the build folder. This is only for the skeleton html file (index.html) and the Jade runtime (jade-runtime.js).
#### Jade
Compiles the jade templates to JavaScript and copies to the templates/compiled directory in the source tree. These compiled files are then bundled with the rest of the JavaScript files by browserify.
#### Watch
Watches for any changes in the source tree to re-run the build. This tasks is for convenience and faster development.  
#### How to build
In order to build the source code under src folder, you need to:  
1- Clone the repo to your local machine.  
2- Go to root folder (where gruntfile.js and package.json are located)  
3- Run 'npm install' to install required libraries. You may need to run the command with 'sudo' if you see any access or write errors.  
4- Run 'grunt' to build and start to 'watch'. This will listen to any changes made in the src folder and trigger a re-build.
#### How to deploy
To deploy the built resources, an NPM script is added to run a 'git subtree' commmand. This command rebases the gh-pages branch (where the live site is served from) from the specified deployment folder. To run this command you can type 'npm run deploy' while in the root folder in master branch.
### Architecture
An Model-View approach is adopted when building the game.
#### Game
Sudoku-game.js defines a module that acts like a controller (or router in Backbone) to start the game when user navigates to the page. Game module also hooks up to the difficulty change to re-start the game when user picks another level of difficulty.
#### Model
Sudoku-model.js file defines the model of this architecture, which initiates and stores sudoku board data.
#### View
Sudoku-view.js file defines the view of this architecture, which handles all user interaction and input validations.
#### Generator
Sudoku-generator.js file defines a standalone module that generates Sudoku board variations from a base board with a given difficulty level. This component is leveraged by Sudoku-model to generate boards on demand.
#### Utilities
Utilities.js file defines a module which handles all the common and non-type-dependent tasks. Such tasks vary from validating a Sudoku board to picking random items from an array or numbers.
#### External Libraries
For certain functionality, third-party libraries has been used in the architecture. These are:  
1- jQuery  
2- jQuery UI  
3- Jade Client Runtime  
4- Base and Table componetns from Pure-css library  

## Future Improvements
Sudoku game has a solid infrastructure to improve and build upon. However due to limited time, I wasn't able to add all the things I wanted to add. We can categorize these improvements in two topics.
### Infrastructure
**CSS preprocessors:** A CSS preprocessor will certainly be a huge improvement in the project infrastructure. It will allow the developer more flexibility when writing CSS.
**Resource minification:** JavaScript and CSS resources are currently not minified or uglified during build process. By adding this functionality there will be a considerable amount of performance improvement, especially in mobile devices with slower connections.
**Data binding:** Jade templates used in the game don't have a direct data-binding to the model. The board is rendered on the page from scratch everytime a game starts. A data binding between templates and the model would allow to generate the html with the values as opposed to adding them later.
### UI Design
The simplistic approach demands the usage of less UI elements on the page. This has been the way of thinking during the development of the game. However there are still improvements without breaking this rule.  
**All possible values:** Entering a number in mobile devices can be little time-consuming. To improve this we can show the user all possible values when clicked/tapped on a cell.  
**Customizable difficulty levels:** Giving only three options for difficulty can become less challenging for the user after a certain time. We can provide a more customizable way of setting the difficulty, such as getting the number of empty cells from the user.  
