const express = require('express');
const app = express();
const PORT = 5001

app.use("/", (req, res)=>{
     res.send("Hello world")
})
 app.listen(5001, console.log(`Server running on http://localhost:${PORT}`) );

module.exports = (req, res) => app(req, res);