const Object=(req,res)=>{
    const {name,age}=req.body;
    res.json({name,age})
}

module.exports=Object