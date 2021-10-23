const express = require('express');
const app = express();
const path = require('path')
const router = express.Router()
require("dotenv").config()
var cors = require('cors')

const url = require('url')
const fs = require('fs')
runner = require("child_process");

var multer = require('multer');
var upload = multer();

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

app.get('/spel/playing', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/website/html/spel/spel.html'))
})


router.post('/php/:path', (req, res, next) => {
  console.log('/php/' + req.params.path)
  php(req, res, ('/website/php/' + req.params.path))
  /*
  console.log('Recieved info.')
  const leeftijd = req.body.leeftijd;
  const lengte = req.body.lengte;
  const gewicht = req.body.gewicht;
  */
})



function php(request, response, _path)
{
  var param = [request.body.leeftijd, request.body.lengte, request.body.gewicht]
  var localpath = path.join(process.cwd(), _path);
  fs.exists(localpath, function(result) { runScript(result, localpath, param, response)});
}

function runScript(exists, file, param, response)
{
  if(!exists) return sendError(404, 'File not found', response);
  console.log(param)
  runner.exec("php " + file + " " + param,
  function(err, stdout, stderr) { sendData(err, stdout, stderr, response); });
}

function sendData(err, stdout, stderr, response)
{
  if (err) return sendError(500, stderr, response);
  response.writeHead(200,{"Content-Type": "text/plain;charset=utf-8"});
  response.write(stdout);
  response.end();
}

function sendError(errCode, errString, response)
{
  response.writeHead(errCode, {"Content-Type": "text/plain"});
  response.write(errString + "\n");
  response.end();
  return;
}




























const htmlPath = path.join(__dirname, 'website');
app.use(express.static(htmlPath));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cors())

app.use(router)

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});