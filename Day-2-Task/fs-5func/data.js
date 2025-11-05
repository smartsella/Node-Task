import fs, { existsSync } from "fs";

// mkdir
// existsSync
if (!existsSync("./docs")) {
  fs.mkdir("./docs", (err) => {
    if (err) {
      console.log(err.message);
    } else console.log("Folder created");
  });
}
//fs.writefile

// fs.writeFile("./docs/galasy.txt", "Milky way galacgy", (err) => {
//   if (err) {
//     console.log("Error tell me:", err.message);
//   } else {
//     console.log("Succesfuly store data");
//   }
// });

//fs.readfile

fs.readFile("./docs/galasy.txt", (err, data) => {
  if (err) {
    console.log("error msg", err);
  } else {
    console.log(data.toString());
  }
});

// //delete for file fs.unlink

// if (fs.existsSync("./docs/galasy.txt")) {
//   fs.unlink("./docs/galasy.txt", (err) => {
//     if (err) {
//       console.log("Error mesg", err.message);
//     } else {
//       console.log("Succesfully deleted");
//     }
//   });
// }

//delete for folder in fs.rmdir - remove dirractory

if (existsSync("./docs")) {
  fs.rmdir("./docs", (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Successfuly folder delete");
    }
  });
}
