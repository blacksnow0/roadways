const express = require("express");

const app = express();
const PORT = process.env.PORT || 5005;
app.get("/", (req, res) => {
  res.send("Welcome to the Express server");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Something went wrong!" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
