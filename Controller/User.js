const userarray=[{id:1,name:"anu",age:"22"},{id:2,name:"manu",age:"32"},{id:3,name:"sanu",age:"20"},{id:4,name:"rinu",age:"18"},]

const ShowUser=(req,res)=>{
    const dataid=parseInt(req.params.id)
    const selecteduser=userarray.find(val=>val.id==dataid)
    res.json(selecteduser)

}
module.exports=ShowUser