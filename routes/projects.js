const express = require('express');
const router = express.Router();
const path = require('path');

// توجيه صفحة المشاريع
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/projects.html')); // تعديل المسار حسب الحاجة
});

module.exports = router;
