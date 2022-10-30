/* eslint-disable no-console */

const express = require("express")
require("dotenv").config()
const morgan = require("morgan")
// body Parser
const bodyParser = require("body-parser")

const { dbConnection } = require("./database/config")
// Crear el servidor de express

const app = express()

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(bodyParser.json({ limit: "50mb" }))

// Base de Datos
dbConnection()

// lectura y parseo del body
app.use(bodyParser.json())

// Morgan
app.use(morgan("dev"))

// Rutas

// TODO: auth // crear, login, renev

app.use("/api/auth", require("./routes/auth"))
// directorio público

app.use(express.static("public"))

// El middelware es una funcion qu e se ejecuta antes de  otra cosa

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto  ${process.env.PORT} `)
})
// TODO: CRUD: Eventos
