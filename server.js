// config incial
const express = require('express');
const app = express();

//forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

//rota inicial / endpoint
app.get('/', (req, res) => {
    res.json({message: 'Oi Express'})
})

// Entregar uma porta
app.listen(3100)