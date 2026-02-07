const express = require('express') ;
const {NewShortURL ,getURL} = require('../controllers/URL_controller') ;
const router = express.Router() ;

router.post("/" , NewShortURL) ;
router.get("/:shortId" , getURL) ;

module.exports = router ;