const mongoose = require('mongoose');

const BucketListSchema = mongoose.Schema({
    title: String,
    description: String,
    status: Boolean,
    user_id: String,
    user_name: String,
    tagged_user_id: String
}, { timestamps: true })

mongoose.model("BucketList", BucketListSchema)