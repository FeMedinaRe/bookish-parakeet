const express = require ("express")
var app = express()
app.get("/", function(request, response){
    response.send("Hola Mundo")
})
app.listen(1633, function (){
    console.log("Aplicación iniciada en el puerto %d", 1633)
});