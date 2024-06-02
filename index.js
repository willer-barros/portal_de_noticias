const express = require('express')
var bodyParser = require('body-parser')
const path = require('path')
const app = express()

const port = 3000

app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({
    extended: true
}))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res)=>{
    res.send('funcionando')
})


//roda o servidor
app.listen(port, ()=>{
    console.log("server rodando na porta:", port);
})


