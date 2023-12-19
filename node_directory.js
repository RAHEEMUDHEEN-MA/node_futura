const path=require('path')
const fs=require('fs')

// fs.mkdir(path.join(__dirname,'/newforlder'),{},(err)=>{
//     if(err)throw err
// })



// fs.rmdir(path.join(__dirname,'/newforlder'),{},(err)=>{
//     if(err) throw err
// })


// fs.mkdir(path.join(__dirname,'/newforlder/newfile'),{recursive:true},(err)=>{
//     if(err)throw err
// })

fs.rm(path.join(__dirname,'/newforlder'),{recursive:true},(err)=>{
    if(err)throw err
})





