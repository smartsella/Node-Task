import { url } from "url";

const myurl = new url("www.google.com");

console.log(myurl.host);
console.log(myurl.pathname);
console.log(myurl.serchParams);
console.log(myurl.serchParams.get(tag));
