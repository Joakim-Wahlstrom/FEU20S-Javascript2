const http = require('http');
const fs = require('fs');
const path = require('path');
let filePath;

const server = http.createServer((req, res) => {

  // console.log(req.url);
  // response.end('<h1>HEJ</h1>');

  res.setHeader('Content-type', 'text/html');
  // let url = '';

  // let url;

  // if(request.url === '/') {
  //   url = 'index.html';
  // }
  // else if(request.url === '/about'){
  //   url = 'about.html';
  // }

  // switch(req.url) {
  //   case '/':
  //     url = 'index.html';
  //     break;
  //   case '/about':
  //     url = 'about.html';
  //     break;
  // }


  if(req.url != '/favicon.ico') {
    filePath = path.join(
      __dirname,
      'views',
      req.url === '/' ? 'index.html' : req.url + '.html'
    );
  }
  console.log(filePath);



  fs.readFile(filePath, (err, data) => {
    if(err) {
      console.log(err.code);
      if(err.code == 'ENOENT') {
        // fs.readFile('./views/404.html', (err, data) => {
        //   if(err)
        //     console.log(err);

        //   res.end('hej');
        // })
        console.log('inne i enoent')
        res.end('<h1>404</h1>');
      }
    }
    res.end(data);
  })



})

const PORT = process.env.PORT || 9999;

server.listen(PORT, 'localhost', () => {
  console.log('server running on: http://localhost:' + PORT);
})