const express=require('express')

const app=express();
app.use(express.json());
require('./routes/idea.routes')(app);

app.listen(8000,()=>{
    console.log('app started on port number',8000);
    
})