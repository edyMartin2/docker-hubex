const CryptoJS = require('crypto-js');

// OUTPUT


function encode(mykey: string) {
  // PROCESS
  const encodedWord = CryptoJS.enc.Utf8.parse(mykey); // encodedWord Array object
  const encoded = CryptoJS.enc.Base64.stringify(encodedWord); // string: 'NzUzMjI1NDE='
  return encoded;
}

function decode(mykey: string) {
  // PROCESS
  const encodedWord = CryptoJS.enc.Base64.parse(mykey); // encodedWord via Base64.parse()
  const decoded = CryptoJS.enc.Utf8.stringify(encodedWord); // decode encodedWord via Utf8.stringify() '75322541'
  return decoded;
}


export {
    encode,
    decode
}