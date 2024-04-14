const express = require('express');
const app = express();
const server = require('http').createServer(app);
require('dotenv').config()
const expressEjsLayouts = require('express-ejs-layouts');
const { AllRoutes } = require('./router/router');
const {PORT} = process.env;


app.use(express.static('public'));
app.use(express.json());
app.use(expressEjsLayouts)
app.use(express.urlencoded({extended : true}))
app.set('view engine' , 'ejs')
app.set('views' , 'views')
app.set('layout' , './layouts/master')
app.use(AllRoutes)

app.use((req,res,next) => {
    return res.status(404).json({
        status : 404,
        message : "Not found!"
    })
})


app.use((err,req,res,next) => {
    return res.status(err.status || 500).json({
        status : err.status || 500,
        message : err.message || ""
    })
})

server.listen(PORT, () => {
    console.log(`Server run at http://localhost:${PORT}`);
})