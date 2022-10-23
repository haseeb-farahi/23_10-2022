// var http = require( 'http' )
// var url = require( 'url' )
// http.createServer(function(req,res){
//     var q = url.parse(req.url, true).query;
//     var text = q.year + " " + q.month ;
    // res.write(req.url)
    // res.end();
    // res.end(text)
// }).listen(8080, ()=>{
//     console.log('Our server is running on port 8080')
// })

// var readMe = fs.readFileSync('readMe.txt','utf8')
// console.log(readMe)
//===============Async==============
// fs.readFile('readMe.txt','utf8' ,function(err,data){
//     if (err)throw err;
//     console.log(data)
// })
// console.log('test')

// fs.writeFileSync('writeMe.txt','you just created me');
// console.log('test')
//===============Async==============
// fs.writeFile('writeMeTwo.txt','its a async readed file',()=>{
//     console.log('file created succesfully')
// })
// console.log('test')
//=================Syns Dir=======================
// fs.unlinkSync('writeMe.txt')
// fs.mkdirSync('Items')
//===================Async Dir=============================
// fs.mkdir('Students',(err)=>{
//     if(err) throw err;
//     fs.readFile('readMe.txt','utf8',(err,data)=>{
//         if(err) throw err
//         fs.writeFile('./Students/student',data,()=>{
//             console.log('Student created sucessfuly ')
//         })
//     })
// })
// fs.rmdirSync('Pics')
// fs.unlink('./Students/student',()=>{
//     fs.rmdir('Students',()=>{
//         console.log('Dir removed')
//     })
// })

// fs.appendFile('readMe.txt','im appended data',(err)=>{
//     if(err)throw err
//     console.log(' data appended sucessfully ');
// })
// var readMe =fs.readFileSync('readMe.txt','utf8')
// console.log(readMe)

// fs.rename('readMe.txt','message.txt',()=>{
//     if(err) throw err
//     console.log('File renamed!')

// })
var fs = require('fs');
var http = require( 'http' )
// var url = require( 'url' )
// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-type':'text/plain'})
//     // var q = url.parse(req.url, true).query;
//     // var text = q.year + " " + q.month ;
//     // res.write(req.url)
//     res.write("Hello there")
//     res.end();
// }).listen(8080, ()=>{
//     console.log('Our server is running on port 8080')
// })

var myReadStream = fs.createReadStream(__dirname+'/message.txt',);
myReadStream.on('data',function(chunk){
    console.log('New Chunk of data recived')
    console.log(chunk);
})
