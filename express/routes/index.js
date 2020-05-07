/**
 * 路由模块
 */
let express=require('express')
let app=express()
let fs =require('fs')
app.all('/',function(req,res,next){
    next();
})
app.get('/',function(req,res){
    fs.readFile('./variable.json',function(err,data){
        if (err){
            res.sendStatus('500').send('server is fail')
        }
        let jsonArr=JSON.parse(data.toString())
        res.render('index.html',{
            students:jsonArr.students,
            fruits:jsonArr.fruits
        })
    })

})
module.exports=app