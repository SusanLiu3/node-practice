let http=require('http');
let fs=require('fs')
let Url=require('url')
let root = '/Users/liushanshan/Documents/test'; // 根路径
let template=require('art-template')
http.createServer(function(req,res){
    let url = Url.parse(req.url,true);
    console.log(url)
    let pathname=url.pathname; // 除去 get 请求参数的 url
    if (pathname==='/'){
        fs.readdir(root,function(err,file){
            if (err){
                res.end('not found')
            }
            fs.readFile('./views/index.html',function(error,data){
                if (error){
                    res.end('not found')
                }
                let str=data.toString();
                str=template.render(str,{
                    path:file
                })
                res.end(str)
            })
        })
    }
    else{
        let path=root+pathname;
        fs.readFile(path,function(err,data){
            if (err){
                res.end('not found')
            }
            res.end(data)
        })
    }
}).listen(3000,function(){
    console.log('服务启动中...')
})
