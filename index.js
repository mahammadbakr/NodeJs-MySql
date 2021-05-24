const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config({ path: './.env' });


const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to new application." });
});

require("./app/routes/customer.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




// const express = require('express');
// const mysql = require('mysql')

// //Create Dataabase 
// const db = mysql.createConnection({
//     host: '127.0.0.1',
//     port: '8080',
//     user: 'root',
//     password:'123'
// })


// //Connect to My SQL
// db.connect((err) =>{
//     if(err){
//         // throw err
//         console.log(err)
//     }else{
//            console.log("My SQL Connected")
//     }
// })

// const app = express()


// app.get("/ee", (res, req)=>{
//     req.send("Working well !")

// })
// app.get("/createDB", (res, req)=>{
//     let query = "CREATE DATABASE nodejsmysql;"
//     db.query(query, (err)=>{
//         if(err){
//             // throw err
//             console.log(err)
//         }else{
//                   req.send("Database Created")
//         }
//     })
// })


// app.listen("9090",()=>{
//     console.log("Listening On Port 9090")
// })