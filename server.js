const express = require('express');
const path = require('path');
const multer = require('multer'); // لاستخدام multer لرفع الملفات

const app = express();
const PORT = 30222; // تأكد من استخدام نفس المنفذ لكل الوظائف

// إعداد multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // تأكد من إنشاء هذا المجلد
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// استخدام express.static لتقديم الملفات العامة
app.use(express.static(path.join(__dirname, 'public')));

// استيراد توجيه المشاريع
const projectsRouter = require('./routes/projects');

// استخدام التوجيه
app.use('/projects', projectsRouter);

// عرض الصفحة الرئيسية
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// رفع الملف
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('تم رفع الملف بنجاح!');
});

// عرض صفحة معلومات
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// بدء الخادم
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
