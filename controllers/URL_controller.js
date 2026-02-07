const shortid = require('shortid');
const user = require('../models/URL_User') ;

async function NewShortURL(req, res) {
    const body = req.body ;
    const shortId = shortid() ;
    await user.create({
        shortId : shortId ,
        redirectURL : body.url,
        visitHistory : [],
    });
    return res.json({id : shortId}) ;

}

async function getURL(req,res) {
    const shortId = req.params.shortId ;
    const entry = await user.findOneAndUpdate({
        shortId ,
    },
    {
        $push :{
            visitHistory : {timestamp : Date.now(),} ,
        },
    });
    res.redirect(entry.redirectURL) ;
}

module.exports = {
    NewShortURL,
    getURL
}