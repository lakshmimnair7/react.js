const express = require('express');
const bodyParser =require('body-parser');
const db= require('./database/connector')

const app = express();
const port = 3000;
app.use(bodyParser.json())


//db connection

db.authenticate().then(() =>{
    console.log('DB Connected');
}).catch((err) => {console.log(err);})


// callbacks

app.get('/name',(req,res) => {res.send('Hi Ravi')})
app.get('/',(req,res) => {res.send(`Server is running on ${port}`)})


app.post('/view', (req,res) => {
    /*
    [
    {
        "name": "Ravi",
        "age": "20",
        "dept": "CS"
    },
    {
        "name": "ashwin",
        "age": "21",
        "dept": "IT"
    },
    {
        "name": "mazi",
        "age": "20",
        "dept": "CS"
    },
    {
        "name": "chithra",
        "age": "20",
        "dept": "CS"
    },
    {
        "name": "arun",
        "age": "20",
        "dept": "CS"
    }
]
    */ 
    let data1,out,name=[],age=[],dept=[];
    data1=req.body[1].name;
    console.log(data1);
    for(i=0;i<req.body.length;i++){
        name.push(req.body[i].name);
        age.push(req.body[i].age);
        dept.push(req.body[i].dept)
    }
    console.log(name)
    res.json({name:name,age:age,dept:dept});
})

app.post('/slice',(req,res) => {
    //input = {"data":"DELwerewrf6:New Delhi"}
    data=req.body.data;
    out=data.slice(0,3)+ data.slice(data.indexOf(':'));
    res.json({out})
})

app.post('/test',(req,res) => {console.log(req.body);res.send("status:'Executed'")})

app.listen(port, () => {console.log(`Server is running on ${port}`)});