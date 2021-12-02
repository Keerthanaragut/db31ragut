const mongoose = require("mongoose") 
const teaSchema = mongoose.Schema({ 
    Flavor: String, 
    color: String, 
    price: {type:Number, min : 8, max : 87, default : 0} 
}) 
 
module.exports = mongoose.model("tea", 
teaSchema)