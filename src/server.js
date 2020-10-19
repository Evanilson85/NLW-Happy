// inportar dependencia
const express  = require("express")
const path = require("path")
const pages = require("./pages")

const server = express() //iniciando servidor

// utilizado arquivo estaticos
server
    .use(express.urlencoded({extended: true}))

    .use(express.static("public"))
    // configurar template engine ou deixar dinaminco
    .set("views", path.join(__dirname, "views"))
    .set("view engine", "hbs")

//criando rotas
// server.get("/", (request, response) => { // request = pedido q chega  e response = resposta do meu servidor 
//      const nome = "Evanilson" o segundo paramentro é q passo no html
//     return response.render("index", {nome} )
// })
server.get("/", pages.index)
server.get("/orphanage", pages.orphanage)
server.get("/orphanages", pages.orphanages)
server.get("/create-orphanage", pages.createOrphanage)
server.post("/save-orphanage", pages.saveOrphanage)


//ligar servidor
server.listen(5500 ,()=>{
    console.log("servidor ligando")
})