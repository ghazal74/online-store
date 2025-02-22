require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const compression = require("compression");

const app = express();
app.use(express.json());
app.use(cors({
    origin: "*", // أو حدد النطاق المسموح به مثل "https://ghazal74.github.io"
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));app.use(compression());

// ✅ الاتصال بقاعدة البيانات MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB Connection Error: ", err));

// ✅ إنشاء نموذج المستخدم
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', UserSchema);

// ✅ تسجيل مستخدم جديد
app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        console.error("🚨 Registration Error:", err);
        res.status(500).json({ error: err.message });
    }
});

// ✅ تسجيل الدخول
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("🔍 Received login request:", { email, password });

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token, user: { email: user.email } });

    } catch (err) {
        console.error("🚨 Login error:", err);
        return res.status(500).json({ error: err.message });
    }
});

// ✅ Middleware للتحقق من صلاحية المستخدم
const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid token" });
    }
};

// ✅ تطبيق الحماية على API خاص بالمستخدمين
app.get("/protected-route", authenticateUser, (req, res) => {
    res.json({ message: "You have access to this protected route!" });
});

// ✅ عرض قائمة المستخدمين (البريد الإلكتروني فقط)
app.get("/users", async (req, res) => {
    try {
        const users = await User.find({}, "email");
        res.json(users);
    } catch (err) {
        console.error("🚨 Error fetching users:", err);
        res.status(500).json({ error: err.message });
    }
});

// ✅ تشغيل الخادم
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`✅ Server running on port ${PORT} and accessible from other devices`));
