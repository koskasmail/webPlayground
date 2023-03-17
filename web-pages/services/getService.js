function checkService(serviceUrl, expectedElementName) {
  return new Promise((resolve, reject) => {
    // Open a connection to the service URL
    const xhr = new XMLHttpRequest();
    xhr.open('GET', serviceUrl);
    
    // Parse the XML response into a Document object
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const responseText = xhr.responseText;
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(responseText, 'text/xml');
          
          // Check if the expected element is present in the response
          const elementFound = xmlDoc.getElementsByTagName(expectedElementName).length > 0;
          if (elementFound) {
            resolve(true);
          } else {
            resolve(false);
          }
        } else {
          reject(new Error(`Failed to check service: status code ${xhr.status}`));
        }
      }
    };
    
    // Send the request
    xhr.send();
  });
}


checkService('http://example.com/service', 'result')
  .then(result => {
    console.log(`Service check passed: ${result}`);
  })
  .catch(error => {
    console.error(`Service check failed: ${error}`);
  });
