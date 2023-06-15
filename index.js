const express = require("express")
const { connect } = require("./utils/database.js")
const route = require("./routes/user.js")
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require("body-parser")
const app = express()
const port = 8000


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common")); 

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.use("/user",route)

app.listen(port,async()=>{
    await connect()
    console.log(`this is the ${port}`)
})




