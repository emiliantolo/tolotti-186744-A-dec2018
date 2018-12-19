const express = require('express')
var bodyParser = require('body-parser')
const fetch = require("node-fetch")

const app = express()
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.json({status: 'ok'})
})

app.get('/bimbumbam', (req, res) => {
    res.json({result: Math.ceil(Math.random()*5)})
})

app.get('/play', (req, res) => {

    return fetch("https://tolotti-186744-a-dec2018.herokuapp.com/bimbumbam")
	.then(response => {
	    return response.json()})
	.then(resBody => {
	    let v=parseInt(resBody.result)+parseInt(req.query.player1)
	    res.json({result: v % 2, player2: resBody.result})
	})
})


app.listen(PORT, () => console.log('Example app listening on port'+ PORT))


