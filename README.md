pubsub-js  平级组件之间传值  案例看components/Pubsub

json-server 模拟数据 cnpm install json-server -g
打开服务  到mock 文件架下 
json-server json数据的名字 --port 4000  //react 端口是3000 这里改为400

react 解决跨域
1.正向代理 --开发环境
    一个位于客户端和目标服务器端的代理服务器，为了获取目标服务器上的内容，客户端向代理服务器发送一个请求，代理服务器帮我们去目标服务器上获取数据并且返回给我们
2.反向代理 --上线环境
    可以通过代理服务器来接受请求，然后将这个求情转发给内部的网络服务器，并且把从服务器上得到的数据返回给客户端，这个时候代理服务器对外表现得就是反向代理
 
 模拟请求中国天气网中的数据 http://www.weather.com.cn/data/cityinfo/101320101.html
    1.首先找到 \node_modules\react-scripts\config\webpackDevServer.config.js
    找到 proxy 改为
    proxy: {
            "/api": {
                target: "http://www.weather.com.cn/data/cityinfo", //目标地址
                changeOrigin: true,
                "pathRewrite": {
                    "^api": "/"
                }
            }
        }
    修改配置重启项目