// <!DOCTYPE html>

// <head>
//     <title>Pickles</title>
//     <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
//     <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

// </head>

// <body>
//     <!--PLEASE LEAVE THIS LINE ALONE! MAKE YOUR CHANGES USING JAVASCRIPT!!-->
//     <h1>Pickles Are <span>Delicious</span></h1>
// </body>

// </html>

// I've provided you with some basic markup in index.html

// Please use JavaScript to select the < span > element that currently reads "Delicious"

// Change its text to read "Disgusting" USING JAVASCRIPT.Even if you are a weirdo who likes pickles, please change the text to "Disgusting".

//     Yes, you could cheat and just update the html file directly, but I hope you don't!  The goal here is to practice using JavaScript to manipulate HTML.

document.querySelector('h1 span').innerText = 'Disgusting';
