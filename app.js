const express = require("express");
const app=express();
app.use(express.static("public"));

app.listen(3001,()=>{
    console.log("servidor andando")//recursos
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

app.get('/perfil', (req, res) => {
  res.sendFile(__dirname + "/views/perfil.html")
})

app.get('/trabajos', (req, res) => {
  res.sendFile(__dirname + "/views/trabajos.html")
})

app.get('/contacto', (req, res) => {
  res.sendFile(__dirname + "/views/contacto.html")
})

//app.listen(process.env.PORT|| 3001, ()=>{console.log('Servidor funcando... jejeje Vamo por ese portafolio!!!');})
