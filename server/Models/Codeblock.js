const mongoose = require('mongoose');   

const codeSchema = new mongoose.Schema({  
    id:Number,
    title:String,
    code:String,
})

const CodeSchema = mongoose.model("CodeBlock",codeSchema);
module.exports =CodeSchema;