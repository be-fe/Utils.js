# 可自定义的常用工具函数库Util.js，兼容浏览器，require JS和node JS调用

## Auther: BE-FE


### 启动: npm install && cd server && npm start
### 访问: http://localhost:3000进行自定义构建

### 或:
### Usage: UtilsPackage [options]
    
      Options:
    
        -h, --help               output usage information
        -V, --version            output the version number
        -p, --package <package>  填写需要构建的合法包名,逗号分隔
        -m, --min                是否启用压缩
        -c, --config             打开配置文件






### 开发规则:
#### 1.所有的模块格式要符合要求,提交模块前应该先进行测试
#### 1.每个文件夹视作一个包,每个包需要README.md文档,列出函数列表及功能
#### 2.模块单一功能原则,每个模块实现一个单独的功能,降低耦合,增加复用概率
#### 3.唯一的命名空间为Utils,所有模块均在此命名空间下.因此所有的函数命名不能冲突,已有函数列表请查看各包文档,添加了函数需要在包文档更新函数索引.