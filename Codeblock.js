const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({  
    title:String,
    text:String,
})

module.exports = mongoose.model("CodeBlock",codeSchema);