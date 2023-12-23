// const http = require('http');
// const fs = require ('fs');
// const hostname = '127.0.0.1';
// const home = fs.readFileSync('views/home.pug');
// const signup = fs.readFileSync('views/signup.pug');
// const log = fs.readFileSync('views/login.pug');
// const location= fs.readFileSync('views/location.pug');
// const server = http.createServer('/',(req,res)=>{
//     url = req.url;
//     res.statusCode= 200;
//     res.setHeader('content-Type','text/pug');
//     if(url=='/'){
//         res.end(home);
//     }
//     else if(url == '/signup'){
//         res.end(signup);
//     }
//     else if(url == '/login'){
//         res.end(log)
//     }
//     else if(url == '/location'){
//         res.end(location)
//     }
//     else{
//         res.statusCode = 404;
//         res.end("<h1>404 not found</h1>");
//     }
// });
// server.listen(port, () => {
//     console.log(`server running at http://${hostname}: port ${port}`);
//   });