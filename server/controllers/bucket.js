const mongoose = require("mongoose")
const BucketList = mongoose.model("BucketList")

module.exports ={
    index: (req, res, next) =>{
        BucketList.find()
        .then(data => res.json(data))
        .catch(err => {res.status(500).json(err)})
    },

    add: (req, res, next) =>{
        var newBucketList = new BucketList(req.body);
        newBucketList.save()
        .then(() => res.json(true))
        .catch((err) =>{
            res.status(500).json(err)
        })
    },
    update: (req, res, next) => {
      BucketList.update({_id: req.params.id}, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
    }
}