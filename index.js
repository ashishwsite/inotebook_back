const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
const path = require("path");
const Notes = require('./models/Note');
connectToMongo();
const app = express()
const port = 5000
app.use(cors())
app.use(express.json())
// // first url which to check the server by defalut this requst  through this url is 
app.get('/', (req,res)=>{
res.json({"error":"async function take longer time ","async remove ":"note not fetch if asyn is remove lead internal error",
  "route eroor":"as each route used async await function lead time exceed error","depl_platform":"vercel par to error aata hai "

})
})
app.get('/AllNote',async (req,res)=>{
  const notes=await Notes.find();
  console.log(notes)
  res.json({"total note is":notes.length,"All Note":notes})
})

// Available Routes ksi aur folder se rout ko lekar hit kar rah hua
// app.use(route,location) to hit rote from other file
app.use('/api/auth', require('./routes/auth'))// require(location of file where route is presnt)
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(` iNotebook backend listening at http://localhost:${port}`)
  console.log("SERVER RUNNING FINE ")
})
