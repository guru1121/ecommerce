const express = require('express');
const app = express();

app.use("/", (req, res)=>{
     res.send("hello world")
})
// app.listen(5001, console.log(" app is listen on port 5001") );

module.exports = (req, res) => app(req, res);