let express =require('express')
let fs =require('fs')
let app=express()
app.engine('html',require('express-art-template'))
// 加载静态资源 遇到/public/ ，就去加载./public/下面的静态资源
app.use('/public/',express.static('./public/'))
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
}).listen(3000,function(){
    console.log('express web starting')
})