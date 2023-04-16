///Base64-encoded

const encodedData = btoa("Hello, world"); // encode a string
const decodedData = atob(encodedData); // decode the string

console.log(`encodedData::: ${encodedData}`);
console.log(`decodedData::: ${decodedData}`);


const ok = "a";
console.log(`ok:::  ${ok}`);
console.log(ok.codePointAt(0).toString(16)); //   61: occupies < 1 byte



const notOK = "✓";
console.log(`notOK::: ${notOK}`);
console.log(notOK.codePointAt(0).toString(16)); // 2713: occupies > 1 byte

console.log('----------------------------------');
console.log(btoa(ok)); // YQ==
console.log(btoa(notOK)); // error