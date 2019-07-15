const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(__dirname)
    res.render('index')
})

module.exports = router;
