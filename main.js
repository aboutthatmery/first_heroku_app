import express from "express"
import recipeRouter from "./routes/recipeRoutes.js"
import {unknownHandler, errorHandler} from "./middleware/middleware.js"
import { initClient } from "./database.js"

const port = process.env.PORT
const DB_URI = process.env.DB_URI

const server = express()
initClient(DB_URI)


server.use(express.json())

//Routen
server.use("/recipe", recipeRouter)

//404
server.use(unknownHandler)

//Error Handler
server.use(errorHandler)

server.listen(port, () => {
  console.log("Server is running on " + port)
})