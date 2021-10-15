const express = require('express');
const app = express();
const path = require('path')
const router = express.Router()
require("dotenv").config()
var cors = require('cors')

const port = process.env.PORT;

const bodyParser = require('body-parser')

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/website/index.html'))
})

router.get('/recepten', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/website/html/recepten.html'))
})

router.get('/BMI', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/website/html/BMI.html'))
})

router.get('/quiz', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/website/html/Quiz.html'))
})

router.get('/spel', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/website/html/spell.html'))
})

const htmlPath = path.join(__dirname, 'website');
app.use(express.static(htmlPath));


app.use(express.json());
app.use(cors())
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

app.use(router)

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});