const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use('/assets', express.static(__dirname + '/views/assets'))
app.use('/layouts', express.static(__dirname + '/views/layouts'))

app.get('/dashboard', (req, res) => {
  res.render('pages/dashboard', {
    layout: 'layouts/main-layout',
  })
})

app.get('/data_kelas', (req, res) => {
  res.render('pages/data_kelas', {
    layout: 'layouts/main-layout',
  })
})

app.get('/data_siswa', (req, res) => {
  res.render('pages/data_siswa', {
    layout: 'layouts/main-layout',
  })
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
