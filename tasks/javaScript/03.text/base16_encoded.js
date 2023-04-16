// convert a Unicode string to a string in which
// each 16-bit unit occupies only one byte
function toBinary(string) {
    const codeUnits = Uint16Array.from(
        { length: string.length },
        (element, index) => string.charCodeAt(index)
    );
    const charCodes = new Uint8Array(codeUnits.buffer);

    let result = "";
    charCodes.forEach((char) => {
        result += String.fromCharCode(char);
    });
    return result;
}

function fromBinary(binary) {
    const bytes = Uint8Array.from({ length: binary.length }, (element, index) =>
        binary.charCodeAt(index)
    );
    const charCodes = new Uint16Array(bytes.buffer);

    let result = "";
    charCodes.forEach((char) => {
        result += String.fromCharCode(char);
    });
    return result;
}


// a string that contains characters occupying > 1 byte
const myString = "☸☹☺☻☼☾☿";

const converted = toBinary(myString);
const encoded = btoa(converted);
console.log(encoded); // OCY5JjomOyY8Jj4mPyY=


const decoded = atob(encoded);
const original = fromBinary(decoded);
console.log(original); // ☸☹☺☻☼☾☿