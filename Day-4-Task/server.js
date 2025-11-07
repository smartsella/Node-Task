import express from "express";

const app = express();
const PORT = 3000;

// Basic route
app.get("/", (req, res) => {
  res.send("🚀 Express server is running successfully!");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
