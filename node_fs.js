// const File=require('fs')
// // console.log(File)
// File.writeFile('hi.html','get start',(err)=>{
// if(err)throw err
// })



// const File=require('fs')

// File.appendFile('hi.html',', Do something ,',(err)=>{
// if(err)throw err
// })


const File=require('fs')

File.readFile('hi.html','utf8 ,',(err,data)=>{
console.log(data)
})



