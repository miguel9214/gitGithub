const express = require('express');
const cors= require('cors');
const app= express();
const port= 8081;

app.use(cors());

app.use(express.static('public'))

app.listen(port,()=>{
    console.log(`Server up from ${port}`)

})