const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola Mundo (este hola mundo esta en la ruta crs/routes/index.js)');
});

module.exports = router;