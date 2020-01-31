const Spot =require('../models/Spot')

module.exports={
    async store(req,res){
        console.log(req.body)
        console.log(req.file)

        res.json({ok:true})
    }
}