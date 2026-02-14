const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS for frontend requests
app.use(cors());

// Parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi from server");
});

app.post("/calculate", (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.status(400).json({ error: "Invalid input" });
  }

  res.json({ result: num1 + num2 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
