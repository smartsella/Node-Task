import http from "http";

const port = 3000;

const server = http.createServer(() => {
  console.log("update msg");
});

server.listen(port, () => {
  console.log("server runnig");
});
