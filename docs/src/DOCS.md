## 问答题

### MVVM 和 MVC 的概念

### http资源缓存策略（讲述Cache-Control与Last-Modified的区别）

### git flow

* [Git工作流指南：Gitflow工作流](http://blog.jobbole.com/76867)

### 从浏览器输入地址后发生了什么事情

[自由发挥]
```
DNS lookup（缓存）
发起请求 
	- 判断expire缓存，是否发起真实请求
	- 带上上次的 last-modified和etag。
	- 带上cookie
	- 带上诸多header，referrer，ua等
	- 是否支持gzip
请求到服务端
	- 判断last-modified和etag，无变化直接返回403
	- cdn 或者 应用服务器
	- slb负载均衡
	- nginx，转发，缓存策略等
	- 应用进程
	- response ,gzip
请求响应
	- 301 永久重定向，302 重定向
	- 4xx 请求错误
	- 5xx 应用内部错误
浏览器渲染
	- 解析dom
	- 请求css,js，图片资源。并行，有限制
	- 执行js，css会阻塞渲染和加载。
```

### 大致过一遍flex语法，常见布局 大圣杯 & 双飞翼

#### [大圣杯] & [双飞翼]
- (https://codepen.io/zz1211/pen/Mqeqbo)
- (https://codepen.io/zz1211/pen/JaKmaG)
- (https://codepen.io/zz1211/pen/jvrQYO)

> [那些年，奇妙的圣杯与双飞翼，还有负边距](https://github.com/rccoder/blog/issues/6)

#### 变量提升，函数的情况下如何。