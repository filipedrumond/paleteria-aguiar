const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/teste', (req, res) => {
    res.send('xxxxxx');
    res.sendFile(path.join(__dirname + '/html/index.html'));
});
module.exports = router;