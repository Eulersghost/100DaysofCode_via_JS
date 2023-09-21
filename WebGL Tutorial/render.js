//Declare some variables for the window and class implementation, MDN docs say to use 'const' but I'm going to try var this time I might want these variables changed later on.

var docRender = document.querySelector(".render");
var width = (docRender.width = window.innerWidth);
var height = (docRender.height = window.innerHeight);


//According to the documents in order to draw onto the canvas we need to refence the 'context' with the getContext() method.

var twoDimensionContext = docRender.getContext("2d)



