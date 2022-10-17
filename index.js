const http=require('http');
const express=require('express');
const app=express();
app.use(express.json());


const number1=20;
const number2=30;
const numbers=[
    {id:1,num:number1},
    {id:2,num:number2},
    {id:3,num:number1+number2}
]
app.get('/api/numbers/:id',(req,res)=>{
    const number=numbers.find(c => c.id===parseInt(req.params.id));
    if(!number) {
        res.status(404).send("The course with given id was not found");
    }
    return res.send(number);
});

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}:`);
});