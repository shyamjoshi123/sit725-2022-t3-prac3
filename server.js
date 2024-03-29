var express = require("express")
var app = express()
var port = process.env.port || 3000;
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extends:false}))


//get api for add
app.get("/addTwoNumbers", (req,res) => {
   var number1 = req.query.number1;
   var number2 = req.query.number2;
   var result = addNumbers(number1, number2)
   res.json({statusCode: 200, data: result, message:'Success'})
})
const addNumbers = (number1, number2) => {   
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1+num2;
    return result;
}    
//subtract
app.get("/subtractTwoNumbers", (req,res) => {
   var number1 = req.query.number1;
   var number2 = req.query.number2;
   var result = subtractNumbers(number1, number2)
   res.json({statusCode: 200, data: result, message:'Success'})
})
const subtractNumbers = (number1, number2) => {   
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1-num2;
    return result;
}    
var port= process.env.port||3000;
app.listen(port,()=>{
    console.log("App listening to https://localhost: "+port)
 })