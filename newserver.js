
//import {picks} from './projectrepo/somejs.js' ;

const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello wwWorld!')
  //console.log("whatsup  ? ")
  



})



//import {picks} from somejs.js

app.listen(port, () => {
  console.log(`Example app listening on port ${'port'}`)
  console.log("say somthing")
  

})