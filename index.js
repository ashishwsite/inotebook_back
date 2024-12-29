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
app.get('/',async (req,res)=>{
  const notes=await Notes.find();
res.json({"all_note":notes})
})
// app.get('/AllNote',async (req,res)=>{
//   const notes=await Notes.find();
//   console.log(notes)
//   res.json({"total note is":notes.length,"All Note":notes})
// })
// // seond your to check route 
// app.get('/',(req,res)=>{
//   res.send("this shown whenever  your requst is / or deafult")
// })
// Available Routes ksi aur folder se rout ko lekar hit kar rah hua
// app.use(route,location) to hit rote from other file
app.use('/api/auth', require('./routes/auth'))// require(location of file where route is presnt)
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})
