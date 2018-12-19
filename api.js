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
    
    let player1=parseInt(req.query.player1)
    
    if(0<player1 && 6>player1 && player1){
	
    return fetch("https://tolotti-186744-a-dec2018.herokuapp.com/bimbumbam")
	.then(response => {
	    return response.json()})
	.then(resBody => {
	    let v=parseInt(resBody.result)+player1
	    res.status(200).json({result: v % 2, player2: resBody.result})
	})
    }
    else{
	res.status(400).send()
    }
	
})


app.listen(PORT, () => console.log('Example app listening on port'+ PORT))


