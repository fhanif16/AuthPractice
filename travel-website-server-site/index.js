const express = require('express')
const app = express()
const port = process.env.port || 5000
var cors = require ('cors')

const hotelDetails = require('./hotelDetails.json');
const categories = require('./categories.json');
app.use(cors ())
app.get('/', (req, res) => {
  res.send('Hi ekra')
})

app.get('/hotelDetails' , (req, res) => {
  res.send(hotelDetails)
})

// app.get('/categories' , (req, res) => {
//   res.send(categories)
// })

app.get('/hotelDetails/:id' , (req , res) => {
  const id = req.params.id;
  console.log(id);
  const selectedHotel = hotelDetails.find(n => n.id == id)
  res.send(selectedHotel)
})


app.get('/categories/:id' , (req, res) => {
  const id = req.params.id;
  console.log(id);
  if(id == 0){
    res.send(hotelDetails)
  }
  else {
    const categoryHotels = hotelDetails.filter( n => n.category_id === id)
      res.send(categoryHotels);
    }
  }

)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})