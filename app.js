const express = require('express');
const app = express()

app.listen(3000, (req, res)=>{
  console.log('You\'re doing great!')
})

app.get('/', (rec, res)=>{
  res.send('helloooooo!')
})
