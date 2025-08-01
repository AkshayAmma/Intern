const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is working with Express and CORS!');
});

app.get('/api/user', (req, res) => {
  const user = {
    name: "John Doe",
    referralCode: "john2025",
    donations: 2000
  };
  res.json(user);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === "intern" && password === "1234") {
    return res.json({
      name: "John Doe",
      referralCode: "john2025",
      donations: 2000
    });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
