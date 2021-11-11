const mongoose = require("mongoose") 
const teaSchema = mongoose.Schema({ 
    Flavor: String, 
    color: String, 
    price: Number 
}) 
 
module.exports = mongoose.model("tea", 
teaSchema)