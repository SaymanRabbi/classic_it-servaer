const express = require('express');

const router = express.Router();

router.get('/get', (req, res) => {
    res.send('Route is working');
});

module.exports = router;