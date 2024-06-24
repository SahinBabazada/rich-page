const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 8008;

app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/uploadFile', upload.single('file'), (req, res) => {
    res.json({
        success: 1,
        file: {
            url: `http://localhost:8008/uploads/${req.file.filename}`
        }
    });
});

app.post('/fetchUrl', (req, res) => {
    // Dummy endpoint for URL fetching
    res.json({
        success: 1,
        meta: {
            title: 'Fetched URL Title',
            description: 'Fetched URL Description',
            image: {
                url: 'https://via.placeholder.com/150'
            }
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
