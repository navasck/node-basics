// import { URL } from 'url';
const { URL } = require('url');


const myURL = new URL('https://www.example.com:3000/ck/g/u?country=india#hash');
console.log(myURL.hash);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.href);
console.log(myURL.pathname);
console.log(myURL.port);
console.log(myURL.protocol);
console.log(myURL.search);

console.log(myURL.searchParams);  // URLSearchParams { 'country' => 'india' }

// Both works the same 👇
console.log(myURL.toString());
console.log(myURL.toJSON());
