const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use((req, res) =>{
    console.log('test')
    res.send({test: 'hahaha'})

})

port = process.env.PORT || 80

app.listen(port, () => {
    console.log('port 3000')
})



