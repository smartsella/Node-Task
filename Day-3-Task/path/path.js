import path from "path";

//console.log(path);

const data = "S:Back-EndProcessNode-Practice-and-Task";

console.log("direct naem:", path.dirname(data));
console.log("path naem:", path.basename(data));
console.log("extent name:", path.extname(data));

console.log("--------------------");

console.log("Joing path", path.join("react", "node", "express"));
console.log("resolve path", path.resolve());
