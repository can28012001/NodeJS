const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const {create} = require('express-handlebars')

// Lấy phương thức create từ thư viện express-handlebars để gán cho hbs
const hbs = create({
   extname: '.hbs',
});

const app = express()
const port = 3000

// Đường dẫn của file tĩnh (cụ thể là img)
app.use(express.static(path.join(__dirname,'public')))

//HTTP logger
app.use(morgan('common'))

// Handlebars
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'resources/views'))
// console.log(path.join(__dirname,'resources\\views'))

// Định nghĩa tuyến đường Route để truy cập trang web
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})