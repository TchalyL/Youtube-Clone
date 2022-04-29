# Youtube-Clone
This is a rendition of my completed project done in this tutorial https://www.youtube.com/watch?v=G3e-cpL7ofc&amp;t=18430s by SuperSimpleDev.

I originally completed the tutorial to refresh myself on HTML and CSS concepts as I am currently interested in pursuing a job as a front-end webdeveloper.

A few gripes that I had with the project was the need for copying and pasting large portions of code, with only minor tweeks, to account for each channel present in the grid. This made me realize that this code could instead be written dynamically using the Embedded JavaScript templating engine in Node.js.

So, the primary purpose of this project is to recreate the final project I completed at the end of the tutorial using Node.js and EJS

## Important
This project will have no actual functionally built in  as the original project was only designed to help familiarize myself with HTML & CSS, not to incorporate functionality using JavaScript. 

If I decide to further develop this project and incorporate functionality then it will be updated accordingly

# Getting Started

## Prerequisites
-npm
```
npm install npm@latest -g
```
## Installation
1. Clone the repo
```
git clone https://github.com/TchalyL/Youtube-Clone.git
```
2. Install npm packages
```
npm install
```
3. Run the app with either of the two commands below in the terminal  
This command runs the app using nodemon which allows for changes in the code to be reflected in the browser upon saving.
```
npm run devStart
```
This command is the standard command for running node projects.
```
node app.js
```
4. In the browser, go to localhost:3000 to see the results.
