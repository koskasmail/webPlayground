
function writeJson () {

let jsonData = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com"
  };



  // Serialize the JSON data to a string
  let jsonString = JSON.stringify(jsonData);
  
  // Write the string to a file
  let fileWriter = new FileWriter("data.json");
  fileWriter.write(jsonString);
  
}

writeJson();

