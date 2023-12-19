// const express=require('express')

// const app=express()

// app.get("/", (req, res)=>{
//     res.send("welcome")
// })

// app.get("/home", (req, res) => {

// res.send("Nice to meet you buddy  are")

// })

// Port = 5000;

// app.listen(Port, console.log(`Server is running on ${Port}`))

// ___________________________________________________________________________________________________________

// const express = require('express');
// const app = express();

// app.use(express.static('Home'));

// app.get("/*", (req, res) => {
//     res.status(404);
//     res.send("Not found");
// });

// const port = 5000; // Corrected variable name 'port'

// app.listen(port, console.log(`Server is running on ${port}`)); // Use 'port' instead of 'Port'

// --------------------------------------------------------------------------------------------
// middleware

// const express = require("express");
// const app = express();
// app.get("/home", Token, validation, (req, res, next) => {
//   console.log("login");
//   res.send("success");
// });
// function Token(req, res, next) {
//   console.log("token creating");
//   next();
// }
// function validation(req, res, next) {
//   console.log("approved");
//   next();
// }
// port = 5000;
// app.listen(port, () => console.log(`server:${port}`));

// ______________________________________________________________________________________________ middleware external/

const express = require("express");
const token = require("./Token");
const validation = require("./Validation");



const app = express();
const Middleware=[token,validation]


app.get("/",Middleware, (req, res) => {
  console.log("Login success");
  res.send("Welcome buddy");
  
  
  
});

const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
