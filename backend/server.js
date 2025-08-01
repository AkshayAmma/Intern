const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// User data store (in-memory)
const users = [
  {
    username: "raju",
    password: "password123", // NOTE: Use hashed passwords in production!
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

// Root
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Register endpoint
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(409).json({ error: 'Username already exists' });
  }

  // Create user with default referralCode and donations
  const newUser = {
    username,
    password,
    name: username.charAt(0).toUpperCase() + username.slice(1),
    referralCode: username + Math.floor(1000 + Math.random() * 9000), // e.g., john1234
    donations: 0
  };
  users.push(newUser);

  // Respond with user data (excluding password)
  const { password: pw, ...userData } = newUser;
  res.status(201).json(userData);
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const { password, ...userData } = user;
    res.json(userData);
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

// Get all users (for leaderboard)
app.get('/api/users', (req, res) => {
  const safeUsers = users.map(({ password, ...rest }) => rest);
  res.json(safeUsers);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
