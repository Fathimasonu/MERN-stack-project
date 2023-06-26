const http=require('http')
const students=require('./data')
const server=http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    console.log('incoming requset' ,req.url);
    const rollNo=req.url.slice(1)
    const result=students.find(ele=>{
        return ele.roll_number===parseInt(rollNo)
    })
    console.log('result',result);
    if(result){
        res.end(JSON.stringify(result))
    }else{
        res.end(JSON.stringify({}))
    }
    
})

server.listen(3000,function(){
    console.log('server is running');
})


// const http = require('http')
// const students = require('./data.js')
// const server = http.createServer((req, res) => {
//     const rollNo = req.url.slice(1) 
//     const result = students.find(ele => {
//         return ele.roll_number === parseInt(rollNo)
//     })
//     if(result) {
//         res.end(JSON.stringify(result))
//     } else {
//         res.end(JSON.stringify({}))
//     }
// })
// server.listen(3030, function(){
//     console.log('server is running')
// })