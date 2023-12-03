const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({  
    title:String,
    code:String,
})

module.exports = mongoose.model("CodeBlock",codeSchema);