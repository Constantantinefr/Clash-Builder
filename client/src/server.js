const express = require('express')
const app = new express()
const db = require('better-sqlite3')('db.db')

app.use(express.static('./client/build'))
app.use(express.json())

app.get('/cards',(req,res) => {
    const query = db.prepare("SELECT * FROM cards")
    const books = query.all()
    res.json({
        cards
    })
})

app.post("/checkout",(req,res) => {
    const {cardId} = req.body
    const query = db.prepare("UPDATE cards SET available = 0 WHERE id = ?")
    const result = query.run(cardId)
    console.log(`checked out ${result.changes} card(s)`)
    res.json({
        didCheckOut: result.changes > 0 ? true : false,
        cardId
    })
})

app.listen(8080,() => {
    console.log("server started")
})