let http=require('http');
let Url=require('url');
let fs=require('fs');
let template=require('art-template')
let list=[
    {
        msg: 'Node.js 开发者调查问卷',
        date:'2020-04-08'
    },
    {
        msg: '2020年1月11日Node party@北京成功举办，附照片、视频和ppt',
        date: '2020-04-08'
    },
    {
        msg: ' Node 12 值得关注的新特性',
        date: '2020-04-08'
    }
]
http.createServer(function(req,res){
    let url = Url.parse(req.url,true)
    let pathname=url.pathname;
    // 暴露静态资源
    if (pathname.indexOf('/public')>-1){
        fs.readFile('.'+pathname,function(err,data){
            res.end(data.toString())
        })
    }
    else if (pathname==='/'){
        fs.readFile('./view/index.html',function(err,data){
            if (err){
                res.end('404')
                return;
            }
            let result=data.toString();
            result = template.render(result, {
                data:list
            })
            res.end(result)
        })
    }else if (pathname==='/add'){
        fs.readFile('./view/add.html',function(err,data){
            if (err){
                res.end('not found')
                return;
            }
            res.end(data)
        })
    }else if (pathname==='/push'){
        let content=url.query.content;
        list.push({
            msg:content,
            date:new Date().toLocaleDateString()
        })
        res.statusCode=302
        res.setHeader('Location','/')
        res.end()
    }
}).listen(3000,function(){
    console.log('server is running at localhost:3000 ')
})