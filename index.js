const http = require('http');
const myModule = require('./myModule');
const url = require('url');
const port = 8080;
const fs = require('fs');
const formidable = require('formidable');

http.createServer(function (req,res) {
    if (req.url === '/fileupload') {
        let form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            let oldpath = files.filetoupload.path;
            let newpath = 'C:/Users/Oss/Desktop/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();

            });

        });
    }else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload">');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }

}).listen(port, function () {
console.log('Server is up @ port: '+ port)
});

   // let q = url.parse(req.url, true);
   // let filename = "." + q.pathname;
   // fs.readFile(filename,function (err,data) {
   //     if (err){
   //         res.writeHead(404, {'Content-type': 'text/html'});
   //         return res.end('<h1>404 Not Found!</h1>');
   //     }
   //     res.writeHead(200, {'Content-Type': 'text/html'});
   //     res.write(data);
   //     return res.end();
   // });

    // fs.readFile('index.html', function (err, data) {
   //     res.writeHead(200, {'Content-type': 'text/html'});
   //     // res.write('the date is: ' + myModule.myDateTime());
   //     res.write(data);
   //     res.end();
   // });
// fs.writeFile('mytext.txt', 'hello content', function (err) {
//     if (err) throw err;
//     console.log('saved!');
//
// });
// fs.unlink('mytext.txt', function (err) {
//     if (err) throw err;
//     console.log('file deleted!');
//
// });
//
// const nodemailer = require('nodemailer');
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'mail@mail.com',
//         pass: 'your pass'
//     }
// });
// let mailOptions = {
//     from: 'mail@mail.com',
//     to: 'mail@mail.com',
//     subject: 'hello from node js',
//     text: 'just saying hello!'
// };
// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     }else {
//         console.log('An email sent: ' + info.response);
//     }
//
// });
