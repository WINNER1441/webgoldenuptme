const express = require('express');
const router = express.Router();
const path = require('path');

// توجيه صفحة "معلومات عنا"
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html')); // تأكد من تعديل المسار
});

module.exports = router;
