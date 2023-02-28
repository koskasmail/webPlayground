
function fnCheckString(documentName, extension) {

    var extensionLength = extension.length;

    console.log('documentName: ' + documentName);
    console.log('extension: ' + extension);
    console.log('extensionLength: ' + extensionLength);

    if ( documentName.substr(extensionLength + 1) === extension) 
    {
        console.log("The String End with " + searchFor);
        return true;
    }
    return false;
}

var text = 'Hello.pdf';
var searchFor = '.pdf';

console.log( fnCheckString(text , searchFor) );
