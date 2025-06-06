// const express = require('express');
// const app = express();
// const port = 5000;

// // app.use(express.static('public'))

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render("home.ejs",{root:__dirname}); 
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
  res.render('index',{Total:1100});
});


app.post('/calculate', (req, res) => {
    const body= req.body;
    let Total = 0;
    for (let i = 0; i < body.marks.length; i++) {
         Total += Number(body.marks[i]);
        
    }
     res.render('index', { Total });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

