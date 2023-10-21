import express from 'express'
import bodyParser from 'body-parser';

const app=express();
const port=3000;

var tasks=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    tasks=[];
    res.render('index.ejs',{tasks});
})

app.post('/submit',(req,res)=>{
    tasks.push(req.body.task);
    res.render('index.ejs',{tasks});
})

app.listen(port);