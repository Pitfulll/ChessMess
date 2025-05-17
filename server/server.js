const express = require('express')
const app = express()

//route for api
app.get("/api",(request, response) =>{
    response.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.listen(5000, ()=>{console.log("server started on port 5000")})