import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Groq from 'groq-sdk';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import siteKnowledge from './knowledge.js';
import User from './models/User.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'gaia_protection_secret_2024';

// Middleware
app.use(cors());
app.use(express.json());

// Groq Initialization
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/green_building';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Chat Schema
const chatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  messages: [
    {
      role: String,
      content: String,
      timestamp: { type: Date, default: Date.now }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

const Chat = mongoose.model('Chat', chatSchema);

// Auth Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Access denied' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ error: 'Admin access required' });
  }
};

// Auth Routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      const msg = existingUser.username === username ? 'Username already exists' : 'Email already exists';
      return res.status(400).json({ error: msg });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user._id, username: user.username, role: user.role } });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Admin Routes
app.get('/api/admin/users', authenticateToken, isAdmin, async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude passwords
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Chat Routes
app.post('/api/chat', authenticateToken, async (req, res) => {
  const { message, history } = req.body;
  const userId = req.user.id;

  if (!message) return res.status(400).json({ error: 'Missing message' });

  console.log(`[Chat] Incoming request from user ${userId}: "${message.substring(0, 30)}..."`);
  try {
    const contextHistory = history.slice(-10).map(msg => ({
      role: msg.role === 'bot' ? 'assistant' : 'user',
      content: msg.text
    }));

    const completion = await groq.chat.completions.create({
      messages: [
        { 
          role: "system", 
          content: `${siteKnowledge}\n\nPersonality: You are Gaia, a wise and nurturing Earth Goddess. Be helpful, professional, and loyal to the user. Call the user 'sir' or 'ma'am'. Keep responses concise but technically accurate based on the encyclopedia above.` 
        },
        ...contextHistory,
        { role: "user", content: message }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1024,
    });

    const botResponse = completion.choices[0]?.message?.content || "I am processing your request, but I have no words at this moment.";

    // Save to Database
    Chat.findOneAndUpdate(
      { userId },
      { 
        $push: { 
          messages: [
            { role: 'user', content: message },
            { role: 'assistant', content: botResponse }
          ] 
        } 
      },
      { upsert: true, new: true }
    ).catch(err => console.error('DB Save Error:', err));

    res.json({ text: botResponse });

  } catch (error) {
    console.error('Groq/Chat Error:', error.message);
    res.status(500).json({ error: 'Neural processing overloaded' });
  }
});

app.get('/api/chat-history', authenticateToken, async (req, res) => {
  try {
    const chat = await Chat.findOne({ userId: req.user.id });
    res.json(chat ? chat.messages : []);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});

// Profile Routes
app.get('/api/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id, '-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

app.get('/api/profile/stats', authenticateToken, async (req, res) => {
  try {
    const chat = await Chat.findOne({ userId: req.user.id });
    const messageCount = chat ? chat.messages.filter(m => m.role === 'user').length : 0;
    res.json({ messageCount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.originalUrl} not found` });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
