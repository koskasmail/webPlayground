function readFile(inputFile) {
    let fileReader = new FileReader();
  
    // Set up the onload function to handle the file contents
    fileReader.onload = function(event) {
      let fileContents = event.target.result;
      console.log(fileContents);
    };
  
    // Read the file as text
    fileReader.readAsText(inputFile);
  }
  
  // Example usage
  let fileInput = document.getElementById("/textFile.html");
  readFile(fileInput.files[0]);