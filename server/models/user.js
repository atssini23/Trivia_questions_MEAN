const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
	name: String,
    //add stuff here
}, { timestamps: true})

mongoose.model("User", UserSchema)
