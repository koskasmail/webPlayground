// Get the file name from the variable
// var fileName = filename;
var fileName = '\test\rtfm.txt';

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set the onload callback function
xhr.onload = function() {
  // Check if the request was successful
  if (xhr.status === 200) {
    // Get the text from the response
    var text = xhr.responseText;

    // Set the text of the text box
    document.getElementById("textbox").value = text;
  } else {
    // Display an error message
    console.error("Failed to load file: " + fileName);
  }
};

// Open the file for reading
xhr.open("GET", fileName, true);

// Set the response type to text
xhr.responseType = "text";

// Send the request
xhr.send();
