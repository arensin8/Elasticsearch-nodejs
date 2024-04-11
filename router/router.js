const AllRoutes = require('express').Router();

AllRoutes.get('/' , (req,res) => {
    return res.render('pages/index' , {
        message : "Hello Aren"
    })
})

module.exports = {
    AllRoutes
}