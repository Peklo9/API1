const express = require('express')
const app = express()


app.use((req, res) =>{
    console.log('test')
    res.send({test: 'hahaha'})

})

port = process.env.PORT || 80

app.listen(port, () => {
    console.log('port 3000')
})



