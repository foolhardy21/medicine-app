const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const imgSchema=new Schema({
    collectorImg:{type:String}
});

const Img=mongoose.model('Img',imgSchema);
module.exports=Img;
