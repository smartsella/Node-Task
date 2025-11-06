import http from "http";

//port number
const port = 3000;

//HTTP server
const server = http.createServer((req, res) => {
  // Set response type as plain text
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send message to browser
  res.end("🎥 Leo Movie Booking Server is running successfully!");
});

// Start the server
server.listen(port, (err) => {
  if (err) {
    console.log("❌ Server failed to start:", err.message);
  } else {
    console.log(`🚀 Server running at http://localhost:${port}`);
  }
});
