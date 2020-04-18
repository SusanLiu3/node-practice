## 主要关于nodejs 的练习

 - 核心模块fs 读取文件，文件夹的运用
 - http服务的创建
   - http.createServer(function(req,res){})
   - 在回调函数中通过判断req.url中的pathname判断请求；
 - 如何开放静态文件 ，请参考项目

 - 请求url的处理；如何获取不带请求参数的url
   - 借助URL模块中的方法parse   url.parse 会将URL解析成对象
 - art-template 运用
    art-template :基于node开发的web开发框架
    安装 npm i art-template
    引用 require('art-template') let template=require('art-template')
    使用：template.render(需要替换的字符串,{需要替换的变量:变量值，，，})
    循环遍历：{{each 变量}}{{$value}}{{$each}} 循环遍历


 - 如何自动修改完代码自动重启程序
    - 使用插件 nodemon, 
       - 安装nodemon npm i -g nodemon 注意Mac安装 需要加水 sudo npm i -g nodemon 因为全局安装
    - 在此之前我们使用node 来启动程序，现在改用nodemon 启动程序；即 nodemon app.js

- express 集合 art-template 使用
  - 安装 npm i --save  art-template express-art-template 
  - 配置 
    app.engine('art', require('express-art-template'));
    上面的是官方文档的配置,表示遇到以art结尾的文件，就使用express-art-template来解析
    但是在实际项目中，我们用的比较多的是HTML页面，所有可以将art 换成html
    app.engine('html', require('express-art-template'))
  - 使用：这里，会以views文件夹来进行查找HTML页面，所有我们可以把页面文件放在views文件夹下面
    res.render('HTML文件相对于views的路径',{需要替换的变量:变量值})
- 如何加载静态资源
   - app.use('/public/',express.static("./public/"))
   - 如果遇到URL包含/public/ 时，就去加载当前父目录下public中的静态文件


