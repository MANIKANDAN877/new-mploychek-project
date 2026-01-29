
import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// --- Mock Data ---

interface User {
    id: number;
    username: string;
    role: 'General User' | 'Admin';
}

const users: User[] = [
    { id: 1, username: 'manikandan k s', role: 'Admin' },
    { id: 2, username: 'user1', role: 'General User' },
    { id: 3, username: 'user2', role: 'General User' }
];

const dummyRecords = [
    { id: 101, name: 'Background Check', access: 'Level 1', description: 'Basic criminal and identity check' },
    { id: 102, name: 'Identity Verification', access: 'Level 2', description: 'Aadhaar and PAN verification' },
    { id: 103, name: 'Credit Check', access: 'Level 1', description: 'CIBIL score analysis' },
    { id: 104, name: 'Employment History', access: 'Level 3', description: 'Past 3 employers verification' },
    { id: 105, name: 'Criminal Record', access: 'Level 2', description: 'National crime records check' },
    { id: 106, name: 'Education Verification', access: 'Level 2', description: 'Degree and University validation' },
    { id: 107, name: 'Reference Check', access: 'Level 1', description: 'Professional references contact' }
];

// --- API Endpoints ---

app.get('/', (req: Request, res: Response) => {
    res.send('MPloyChek Backend Running');
});

// Login
app.post('/api/login', (req: Request, res: Response) => {
    const { username, password, role } = req.body;
    console.log('Login attempt:', username, role);

    // Admin Check
    if (username === 'manikandan k s' && password === 'Manikolapan877@') {
        const user = users.find(u => u.username === username);
        if (user) {
            return res.json({ success: true, user: user, token: 'fake-admin-token' });
        }
    }

    // General User Check
    if (username !== 'mploy-chek' && password === 'Manikolapan877@') {
        // Any other username with correct password acts as General User
        return res.json({
            success: true,
            user: { id: 99, username, role: 'General User' },
            token: 'fake-user-token'
        });
    }

    return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// Get Records (General User)
app.get('/api/data', (req: Request, res: Response) => {
    res.json(dummyRecords);
});

// Get Users with Delay (Admin)
app.get('/api/users', (req: Request, res: Response) => {
    const delay = parseInt(req.query.delay as string) || 0;

    console.log(`Fetching users with delay: ${delay}ms`);

    setTimeout(() => {
        res.json(users);
    }, delay);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
