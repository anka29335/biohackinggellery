/*
 * This is the JavaScript file for the photo gallery assignment.
 * It contains two functions:
 * 1. upDate() - Updates the image div when mouse is over a thumbnail
 * 2. unDo() - Resets the image div when mouse leaves a thumbnail
 */

function upDate(previewPic) {
    // Console log to check that the event is triggering
    console.log("Mouse over event triggered");
    
    // Console log to check the previewPic variable
    console.log("Preview image source:", previewPic.src);
    console.log("Preview image alt text:", previewPic.alt);
    
    // Get the image element
    let imageDiv = document.getElementById("image");
    
    // 1) Change the url for the background image of the div with the id = "image" 
    // to the source file of the preview image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // 2) Change the text of the div with the id = "image" 
    // to the alt text of the preview image
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    // Console log to check that the event is triggering
    console.log("Mouse out event triggered");
    
    // Get the image element
    let imageDiv = document.getElementById("image");
    
    // Update the url for the background image of the div with the id = "image" 
    // back to the original value of background-image: url('')
    imageDiv.style.backgroundImage = "url('')";
    
    // Update the text of the div with the id = "image" 
    // back to the original text of "Hover over an image below to display here."
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
