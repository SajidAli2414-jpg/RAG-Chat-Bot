import express from 'express';
import crypto from 'crypto';
import cors from 'cors';

const app = express();
app.use(cors()); 

// Jo key abhi aapne dashboard se copy ki hai, use yahan 'your-secret-key' ki jagah paste karein
const secretKey = 'sk_3Za4EjThLmtW8Oazp1Q5wj'; 

app.get('/get-bot-hash', (req, res) => {
    const userId = req.query.userId || 'user_123';
    
    const userHash = crypto
        .createHmac('sha256', secretKey)
        .update(userId)
        .digest('hex');

    res.json({ userId, userHash });
});

app.listen(3000, () => console.log('Backend running on http://localhost:3000'));
