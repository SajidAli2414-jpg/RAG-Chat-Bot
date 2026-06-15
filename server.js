import express from 'express';
import crypto from 'crypto';
import cors from 'cors';

const app = express();
app.use(cors()); // Taake aapka frontend is backend se baat kar sake
app.use(express.json());

// Apni asli Invent Secret Key yahan dalein
const secretKey = 'sk_3Za4EjThLmtW8Oazp1Q5wj'; 

// API Endpoint jo frontend ko hash bana kar dega
app.get('/get-bot-hash', (req, res) => {
    const userId = req.query.userId || 'user_123'; // Frontend se userId aayegi

    // HMAC-SHA256 hash generation
    const userHash = crypto
        .createHmac('sha256', secretKey)
        .update(userId)
        .digest('hex');

    // Frontend ko data return karein
    res.json({
        userId: userId,
        userHash: userHash
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
