// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is working with Express and CORS!');
});

// Add this route to serve user data
app.get('/api/users', (req, res) => {
  const users = [
    {
      name: "Raju",
      referralCode: "XYZ123",
      donations: 2500
    }
  ];
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
