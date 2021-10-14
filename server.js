const express = require('express');
const app = express();
const port = 80;
const router = express.Router()
require("dotenv").config()
var cors = require('cors')

const bodyParser = require('body-parser')

app.use('/static', express.static('./html'))

router.get('/', (req, res, next) => {

})


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