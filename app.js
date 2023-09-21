const express = require('express'); 
const app = express(); 



app.use((req, res)=>{
    res.status(404).sendFile("./static/index.html", {
        root: __dirname
    })
})

module.exports = {
    app, 
}