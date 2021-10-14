const express = require('express');
const app = express();
const port = 80;
const path = require('path')
const router = express.Router()
require("dotenv").config()
var cors = require('cors')

const bodyParser = require('body-parser')

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/website/index.html'))
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