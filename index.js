const path=require('path')
const port = 8000;
const express=require('express')
const db=require('./db/mongoose')
const Mylist=require('./models/todo')
const app= express();

app.use(express.urlencoded({extended:true}));

app.use(express.static('links'));

let todolist=[];
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

//Initial home page
app.get('/',function(req,res){
    return res.render('entry',{title:"Welcome"});
})

//Todo page
app.get('/todo',function(req,res){
    Mylist.find({},function(err,task){
        if(err){
            console.log("Error occured: ",err);
            return;
        }
        console.log(task);
        return res.render('todo',{title:"Todo list"});
    })
});

//Todo List page
app.get('/list',function(req,res){
    Mylist.find({},function(err,task){
        if(err){
            console.log("Error occured: ",err);
            return;
        }
        console.log(task);
        return res.render('list',{items:task});
    })
});
app.post('/action',function(req,res){
    todolist.push(req.body);

    Mylist.create(req.body,function(err,list){
        if(err){
            console.log("Error occured: ",err);
            return;
        }
        console.log("Task added successfully ",list);
        return res.redirect('back');
    })
});

app.listen(port,function(err){
    if(err) console.log(err);
    else console.log('Working fine');
})