---
title: GoWeb
date: 2023/11/30
---

## 处理请求

### 创建 web server
```go
func main() {
	// 创建 web server
	// 方式一
    server := http.Server{
		Addr:    "localhost:8088",
		Handler: nil,
	}
	server.ListenAndServe()
    
	// 方式二，等同于上面的代码，上面的更灵活
	// http.ListenAndServe("localhost:8088", nil) 
}
```
> http.ListenAndServer()
> + 第一个参数是网络地址，如果为""，那么就是所有网络接口的 80 端口
> + 第二个参数是 handler，如果为 nil，那么就是 DefaultServeMux
>   + DefaultServeMux 是一个 multiplexer（可以看作是路由器）


> http.Server 这是一个 struct
> + Addr 字段表示网络地址，如果为""，那么就是所有网络接口的 80 端口
> + Handler 字段，如果为 nil，那么就是 DefaultServeMux
> + ListenAndServe() 函数

如果需要使用 https, 可以使用 `http.ListenAndServeTLS()` 和 `server.ListenAndServeTLS()`

### Handler
+ handler 是一个接口（interface）
+ handler 定义了一个方法 ServeHTTP()
+ HTTPResponseWriter，指向 Request 这个 struct 的指针

```go
type Handler interface {
	ServeHTTP(ResponseWriter, *Request)
}
```

### DefaultServeMux
它是一个 Multiplexer（多路复用器），同时也是一个 **Handler**

![Alt text](image/goWeb/image1.png)

```go
// 源码
// DefaultServeMux is the default ServeMux used by Serve.
var DefaultServeMux = &defaultServeMux

var defaultServeMux ServeMux

type ServeMux struct {
	mu    sync.RWMutex
	m     map[string]muxEntry
	es    []muxEntry // slice of entries sorted from longest to shortest.
	hosts bool       // whether any patterns contain hostnames
}

// 实现了 Handler 接口中的 ServeHTTP 方法
func (mux *ServeMux) ServeHTTP(w ResponseWriter, r *Request) {
	if r.RequestURI == "*" {
		if r.ProtoAtLeast(1, 1) {
			w.Header().Set("Connection", "close")
		}
		w.WriteHeader(StatusBadRequest)
		return
	}
	h, _ := mux.Handler(r)
	h.ServeHTTP(w, r)
}
```

### 多个 Handler
http.Handle 函数
+ 不指定 Server struct 里面的 Handler 字段值，即为默认的 DefaultServeMux
+ 可以使用 http.Handle 将某个 Handler 附加到 DefaultServeMux
  + http 包有一个 Handle 函数
  + ServerMux struct 也有一个 Handle 方法
+ 如果你调用 http.Handle，实际上调用的是 DefaultServeMux 上的 Handle 方法
+ DefaultServeMux 就是 ServerMux 的指针变量

http.HandleFunc 函数

+ Go 有一个函数类型：HandlerFunc。可以将某个具有适当签名的函数 f，适配成为一个 Handler，而这个 Handler 具有方法 f
```go
type HandlerFunc func(ResponseWriter, *Request)

// 实现了 ServeHTTP 方法
func (f HandlerFunc) ServeHTTP(w ResponseWriter, r *Request) {
	f(w, r)
}
```

例子
```go
package main

import "net/http"

// 自定义 Handler
type helloHandler struct {
}

func (h *helloHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hello world"))
}

// 自定义 Handler
type aboutHandler struct {
}

func (a *aboutHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("about"))
}

func welcome(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("welcome"))
}

func main() {
	h := helloHandler{}
	a := aboutHandler{}

	// 创建 web server
	server := http.Server{
		Addr:    "localhost:8088",
		Handler: nil,
	}
	server.ListenAndServe()

	http.Handle("/hello", &h)
	http.Handle("/about", &a)

	http.HandleFunc("/home", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("home"))
	})
	//http.HandleFunc("/welcome", welcome)
	http.Handle("/welcome", http.HandlerFunc(welcome))

}
```

### 内置 Handlers
+ http.NotFoundHandler
  + `func NotFoundHandler() Handler`
  + 返回一个 handler，它给每个请求的响应都是“404 page not found”
+ http.RedirectHandler
  + `func RedirectHandler(url string, code int) Handler`
  + 返回一个 handler，它把每个请求使用给定的状态码跳转到指定的 URL
  + url，要跳转到的 URL
  + code，跳转的状态码（3xx），常见的：StatusMovedPermanently、StatusFound 或 StatusSeeOther 等
+ http.StripPrefix
   + `func StripPrefix(prefix string, h handler) Handler`
   + 返回一个 handler，它从请求 URL 中去掉指定的前缀，然后再调用另一个 handler
     + 如果请求的 URL 与提供的前缀不符，那么 404
   + prefix，URL 将要被移除的字符串前缀
   + h，是一个 handler，在移除字符串前缀之后，这个 handler 将会接收到请求,修饰了另一个 Handler 
+ http.TimeoutHandler
  + `func TimeoutHandler(h Handler, dt time.Duration, msg string) Handler`
  + 返回一个 handler，它用来在指定时间内运行传入的 h
  + h，将要被修饰的 handler
  + dt，第一个 handler 允许的处理时间
  + msg，如果超时，那么就把 msg 返回给请求，表示响应时间过长
+ http.FileServer
  + `func FileServer(root FileSystem) Handler`
  + 返回一个 handler，使用基于 root 的文件系统来响应请求
  ```go 
  type FileSystem interface {
	Open(name string) (File, error)
  }
  ```

### 请求 Request
Reqeust（是个 struct），代表了客户端发送的 HTTP 请求消息

也可以通过 Request 的方法访问请求中的 Cookie、URL、User Agent 等信息

Request 即可代表发送到服务器的请求，又可代表客户端发出的请求
```go
type Request struct {

	Method string

	URL *url.URL

	Proto      string // "HTTP/1.0"
	ProtoMajor int    // 1
	ProtoMinor int    // 0

	Header Header

	Body io.ReadCloser

	GetBody func() (io.ReadCloser, error)

	ContentLength int64

	TransferEncoding []string

	Close bool

	Host string

	Form url.Values

	PostForm url.Values

	MultipartForm *multipart.Form

	Trailer Header

	RemoteAddr string

	RequestURI string

	TLS *tls.ConnectionState

	Cancel <-chan struct{}

	Response *Response

	ctx context.Context
}
```


## 模板


## 路由
![Alt text](image/goWeb/image2.png)


## JSON



## 中间件



## 存储数据



## 测试

