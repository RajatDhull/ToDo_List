const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema({
    task: {
        type:String,
        required:true
    },
    description: {
        type: String
    },
    start: {
        type: String,
        required:true
    },
    end: {
        type: String,
        required: true
    }
});
// model name, schema name are the args
module.exports=mongoose.model('MyTodo',todoSchema);  //to export the model