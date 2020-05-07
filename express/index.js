let express =require('express')
let app=express()
let router=require('./routes/index.js')
app.engine('html',require('express-art-template'))
// 加载静态资源 遇到/public/ ，就去加载./public/下面的静态资源
app.use('/public/',express.static('./public/'))
app.use(router)

app.listen(3000,function(){
    console.log('express web starting')
})