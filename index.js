const express = require('express')
const app = express()
const port = 3000

app.set('view engine' , 'ejs')

app.get('/', (req, res) => {

  var title = 'Our Home Page';
  var heading = 'My Website';
  res.render('pages/index',{
    'title':title,
    'heading': heading
  });
})

app.get('/about', (req, res) => {

  var title = 'Our about Page';
  var heading = 'My Website';
  res.render('pages/about',{
    'title':title,
    'heading': heading
  });
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
