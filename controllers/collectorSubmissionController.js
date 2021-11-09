const ConllectorData=require("../models/Collector")
exports.postCollectorData=function(req,res){
    console.log('in controller',req.body)
    const colldata=req.body
    const status="In Consideration"
    const active=true
    const date=new Date(Date.now())
    
    const data=new ConllectorData({
        request:colldata,
        status:status,
        active:active,
        date:date
    })
        data.save(function(err,result){
            if(err){
                console.error(err)
            }
            else{
                console.log(result)
                res.send(result)
            }
        })
}