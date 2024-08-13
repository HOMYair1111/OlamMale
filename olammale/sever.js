const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

// הגדרת התיקייה להעלאות
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // שמירת הקובץ בתיקיית uploads
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // שם קובץ ייחודי
    }
});

const upload = multer({ storage: storage });

app.use(express.static('public')); // הגדרת תיקיית public

// טיפול בהעלאת קובץ
app.post('/upload', upload.single('lectureFile'), (req, res) => {
    res.send('הקובץ הועלה בהצלחה!');
});

app.listen(port, () => {
    console.log(`שרת רץ על http://localhost:${port}`);
});
