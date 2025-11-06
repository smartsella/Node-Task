import fs from "fs";

//Write file
fs.writeFileSync(
  "leomoviedetail.txt",
  `Movie: Leo , Date: 05:11:2025 , Time: 9:00am , Fare: 200rs
Movie: Leo , Date: 05:11:2025 , Time: 02:00pm , Fare: 200rs
Movie: Leo , Date: 05:11:2025 , Time: 09:00pm , Fare: 250rs`
);

//reading and checkk exita
if (fs.existsSync("leomoviedetail.txt")) {
  fs.readFile("leomoviedetail.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("Error msg:", err.message);
    } else {
      console.log("File content:\n", data);
    }
  });
} else {
  console.log("File not exist");
}
