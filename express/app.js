let express =require('express')
let app =express()
app.get('/',function(req,res){
    res.send('hello world test nodemon')
})
app.listen(3000,function(){
    console.log('express is running')
})