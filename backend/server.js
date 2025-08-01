// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sample users data
const users = [
  {
    username: "raju",
    password: "password123", // Note: in real apps, hash passwords!
    name: "Raju",
    referralCode: "XYZ123",
    donations: 2500
  },
  {
    username: "john",
    password: "johnpass",
    name: "John Doe",
    referralCode: "john2025",
    donations: 2000
  }
];

// Basic root endpoint
app.get('/', (req, res) => {
  res.send('Backend is working with Express and CORS!');
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const { password, ...userData } = user; // exclude password from response
    res.json(userData);
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

// Optional: get all users endpoint (for leaderboard, etc.)
app.get('/api/users', (req, res) => {
  // send users without passwords
  const safeUsers = users.map(({ password, ...rest }) => rest);
  res.json(safeUsers);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
