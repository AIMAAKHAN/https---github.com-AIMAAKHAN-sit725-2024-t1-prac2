let express=require('express');
let app=express();
let port=process.env.port ||5500;
app.use(express.static(__dirname + '/'));
app.get('/',function(req,res){
    res.render('index.html');
});
app.get('/sum',function(req,res){
    let number1=req.query.number1;
    let number2=req.query.number2;
    let output=parseInt(number1)+parseInt(number2);
    let response ={data:output,message:'success',statusCode:200}
    res.json(response);

});
app.listen(port,()=>{
    console.log('express server started');
});
