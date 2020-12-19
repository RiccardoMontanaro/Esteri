const express = require("express")
const fs = require("fs")
const app = new express()
const port = 8000

app.use(express.static("./public"))

app.listen(port, () =>  console.log("Il server è attivo sulla porta " + port))