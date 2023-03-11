function writeJSON() {

    const data = {
      name: "John",
      age: 30,
      city: "New York"
    };
  
    const jsonString = JSON.stringify(data);
  
    const blob = new Blob([jsonString], {type: "application/json"});
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
  