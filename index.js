const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get('/login', (req, res) => {
    res.render('./login.ejs')
})

// app.get('/main', (req, res) => {
//     res.render('./main.ejs')
// })

app.get('/about', (req, res) => {
    res.render('./about.ejs')
})

app.get('/contact', (req, res) => {
    res.render('./contact.ejs')
})

app.get('/faq', (req, res) => {
    res.render('./faq.ejs')
})

app.get('/', (req, res) => {
    res.render('./index.ejs')
})

app.get('/register', (req, res) => {
    res.render('./register.ejs')
})

app.get('/room', (req, res) => {
    res.render('./renter.ejs')
})

app.listen(process.env.PORT || 5000, () => {
    console.log('Listening on port 5000')
})