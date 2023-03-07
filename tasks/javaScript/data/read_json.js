// Read the contents of the file as a string
let fileReader = new FileReader("data.json");
let jsonString = fileReader.read();

// Parse the JSON string to a JavaScript object
let jsonData = JSON.parse(jsonString);

// Access the data in the object
console.log(jsonData.name);
console.log(jsonData.age);
console.log(jsonData.email);
