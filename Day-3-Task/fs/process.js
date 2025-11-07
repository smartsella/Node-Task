import fs from "fs";

fs.writeFileSync("proce.txt", "console.log(Hello)", (err) => {
  if (err) {
    console.log("Error Message:", err.message);
  } else {
    console.log("Successfully Done");
  }
});

// //that is file system in important one
// fs.writeFileSyns();
// fs.readFile();
// fs.appendFile();
// fs.rename();
// fs.unlink();
// fs.unlink();
// fs.existsSync();

// //folders

// fs.mkdir();
// fs.readdir();
// fs.rmdir();

// // readFile - asyn
// // writefile -syncronoce

//os - file is system file access and handle panraduku os module provide sys level info such as cpu memory,platform,and  uptime ,
//os module in node js.

//task 1
//settime out la surarai potru first 10 minuts scence

//task 2
//5 file create in inside for file system in (fs) in logic code in fibonocic services
