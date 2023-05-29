// on appelle express (require module d'exprotation dans node.js)
const express = require("express")
const fs = require("fs")

const app = express()

const PORT = 8080

app.get("/", (_, res) => {
    const indexHTML = fs.readFileSync(__dirname + "/html/index.html.twig", "utf-8")
    res.send(indexHTML)
})

//callback : fonction qui s'execute lorsque la ligne s'execute
app.listen(PORT, () => {
    console.log("le serveur et lancé sur le port "+ PORT)
})