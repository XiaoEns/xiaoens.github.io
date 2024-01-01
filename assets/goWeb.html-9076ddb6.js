import{_ as p,r as l,o,c as i,a as n,t as c,b as s,d as u,e as a}from"./app-2eca34d6.js";const r="/assets/image1-a1733c6a.png",d="/assets/image-6-459060f1.png",k="/assets/image-7-bdb90c73.png",v="/assets/image2-f66f9d32.png",m="/assets/image-d8ecb72b.png",b="/assets/image-1-097e91c6.png",h="/assets/image-2-34f4fb98.png",g="/assets/image-3-bdb69754.png",f="/assets/image-4-8f45f20a.png",x="/assets/image-5-60e49d44.png",q={},w=a(`<h2 id="处理请求" tabindex="-1"><a class="header-anchor" href="#处理请求" aria-hidden="true">#</a> 处理请求</h2><h3 id="创建-web-server" tabindex="-1"><a class="header-anchor" href="#创建-web-server" aria-hidden="true">#</a> 创建 web server</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 创建 web server</span>
	<span class="token comment">// 方式一</span>
    server <span class="token operator">:=</span> http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span>
		Addr<span class="token punctuation">:</span>    <span class="token string">&quot;localhost:8088&quot;</span><span class="token punctuation">,</span>
		Handler<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	server<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
	<span class="token comment">// 方式二，等同于上面的代码，上面的更灵活</span>
	<span class="token comment">// http.ListenAndServe(&quot;localhost:8088&quot;, nil) </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>http.ListenAndServer()</p><ul><li>第一个参数是网络地址，如果为&quot;&quot;，那么就是所有网络接口的 80 端口</li><li>第二个参数是 handler，如果为 nil，那么就是 DefaultServeMux <ul><li>DefaultServeMux 是一个 multiplexer（可以看作是路由器）</li></ul></li></ul></blockquote><blockquote><p>http.Server 这是一个 struct</p><ul><li>Addr 字段表示网络地址，如果为&quot;&quot;，那么就是所有网络接口的 80 端口</li><li>Handler 字段，如果为 nil，那么就是 DefaultServeMux</li><li>ListenAndServe() 函数</li></ul></blockquote><p>如果需要使用 https, 可以使用 <code>http.ListenAndServeTLS()</code> 和 <code>server.ListenAndServeTLS()</code></p><h3 id="handler" tabindex="-1"><a class="header-anchor" href="#handler" aria-hidden="true">#</a> Handler</h3><ul><li>handler 是一个接口（interface）</li><li>handler 定义了一个方法 ServeHTTP()</li><li>HTTPResponseWriter，指向 Request 这个 struct 的指针</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Handler <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">ServeHTTP</span><span class="token punctuation">(</span>ResponseWriter<span class="token punctuation">,</span> <span class="token operator">*</span>Request<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="defaultservemux" tabindex="-1"><a class="header-anchor" href="#defaultservemux" aria-hidden="true">#</a> DefaultServeMux</h3><p>它是一个 Multiplexer（多路复用器），同时也是一个 <strong>Handler</strong></p><p><img src="`+r+`" alt="Alt text"></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 源码</span>
<span class="token comment">// DefaultServeMux is the default ServeMux used by Serve.</span>
<span class="token keyword">var</span> DefaultServeMux <span class="token operator">=</span> <span class="token operator">&amp;</span>defaultServeMux

<span class="token keyword">var</span> defaultServeMux ServeMux

<span class="token keyword">type</span> ServeMux <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	mu    sync<span class="token punctuation">.</span>RWMutex
	m     <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>muxEntry
	es    <span class="token punctuation">[</span><span class="token punctuation">]</span>muxEntry <span class="token comment">// slice of entries sorted from longest to shortest.</span>
	hosts <span class="token builtin">bool</span>       <span class="token comment">// whether any patterns contain hostnames</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现了 Handler 接口中的 ServeHTTP 方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>mux <span class="token operator">*</span>ServeMux<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>w ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> r<span class="token punctuation">.</span>RequestURI <span class="token operator">==</span> <span class="token string">&quot;*&quot;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> r<span class="token punctuation">.</span><span class="token function">ProtoAtLeast</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			w<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;Connection&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;close&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>StatusBadRequest<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	h<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> mux<span class="token punctuation">.</span><span class="token function">Handler</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
	h<span class="token punctuation">.</span><span class="token function">ServeHTTP</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个-handler" tabindex="-1"><a class="header-anchor" href="#多个-handler" aria-hidden="true">#</a> 多个 Handler</h3><p>http.Handle 函数</p><ul><li>不指定 Server struct 里面的 Handler 字段值，即为默认的 DefaultServeMux</li><li>可以使用 http.Handle 将某个 Handler 附加到 DefaultServeMux <ul><li>http 包有一个 Handle 函数</li><li>ServerMux struct 也有一个 Handle 方法</li></ul></li><li>如果你调用 http.Handle，实际上调用的是 DefaultServeMux 上的 Handle 方法</li><li>DefaultServeMux 就是 ServerMux 的指针变量</li></ul><p>http.HandleFunc 函数</p><ul><li>Go 有一个函数类型：HandlerFunc。可以将某个具有适当签名的函数 f，适配成为一个 Handler，而这个 Handler 具有方法 f</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> HandlerFunc <span class="token keyword">func</span><span class="token punctuation">(</span>ResponseWriter<span class="token punctuation">,</span> <span class="token operator">*</span>Request<span class="token punctuation">)</span>

<span class="token comment">// 实现了 ServeHTTP 方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>f HandlerFunc<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>w ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">f</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;net/http&quot;</span>

<span class="token comment">// 自定义 Handler</span>
<span class="token keyword">type</span> helloHandler <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>helloHandler<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 自定义 Handler</span>
<span class="token keyword">type</span> aboutHandler <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>aboutHandler<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;about&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">welcome</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;welcome&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	h <span class="token operator">:=</span> helloHandler<span class="token punctuation">{</span><span class="token punctuation">}</span>
	a <span class="token operator">:=</span> aboutHandler<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">// 创建 web server</span>
	server <span class="token operator">:=</span> http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span>
		Addr<span class="token punctuation">:</span>    <span class="token string">&quot;localhost:8088&quot;</span><span class="token punctuation">,</span>
		Handler<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	server<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	http<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>h<span class="token punctuation">)</span>
	http<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token string">&quot;/about&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span>

	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/home&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">//http.HandleFunc(&quot;/welcome&quot;, welcome)</span>
	http<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token string">&quot;/welcome&quot;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span><span class="token function">HandlerFunc</span><span class="token punctuation">(</span>welcome<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内置-handlers" tabindex="-1"><a class="header-anchor" href="#内置-handlers" aria-hidden="true">#</a> 内置 Handlers</h3><ul><li>http.NotFoundHandler <ul><li><code>func NotFoundHandler() Handler</code></li><li>返回一个 handler，它给每个请求的响应都是“404 page not found”</li></ul></li><li>http.RedirectHandler <ul><li><code>func RedirectHandler(url string, code int) Handler</code></li><li>返回一个 handler，它把每个请求使用给定的状态码跳转到指定的 URL</li><li>url，要跳转到的 URL</li><li>code，跳转的状态码（3xx），常见的：StatusMovedPermanently、StatusFound 或 StatusSeeOther 等</li></ul></li><li>http.StripPrefix <ul><li><code>func StripPrefix(prefix string, h handler) Handler</code></li><li>返回一个 handler，它从请求 URL 中去掉指定的前缀，然后再调用另一个 handler <ul><li>如果请求的 URL 与提供的前缀不符，那么 404</li></ul></li><li>prefix，URL 将要被移除的字符串前缀</li><li>h，是一个 handler，在移除字符串前缀之后，这个 handler 将会接收到请求,修饰了另一个 Handler</li></ul></li><li>http.TimeoutHandler <ul><li><code>func TimeoutHandler(h Handler, dt time.Duration, msg string) Handler</code></li><li>返回一个 handler，它用来在指定时间内运行传入的 h</li><li>h，将要被修饰的 handler</li><li>dt，第一个 handler 允许的处理时间</li><li>msg，如果超时，那么就把 msg 返回给请求，表示响应时间过长</li></ul></li><li>http.FileServer <ul><li><code>func FileServer(root FileSystem) Handler</code></li><li>返回一个 handler，使用基于 root 的文件系统来响应请求</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> FileSystem <span class="token keyword">interface</span> <span class="token punctuation">{</span>
  <span class="token function">Open</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>File<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="请求-request" tabindex="-1"><a class="header-anchor" href="#请求-request" aria-hidden="true">#</a> 请求 Request</h3><p>Reqeust（是个 struct），代表了客户端发送的 HTTP 请求消息</p><p>也可以通过 Request 的方法访问请求中的 Cookie、URL、User Agent 等信息</p><p>Request 即可代表发送到服务器的请求，又可代表客户端发出的请求</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Request <span class="token keyword">struct</span> <span class="token punctuation">{</span>

	Method <span class="token builtin">string</span>

	URL <span class="token operator">*</span>url<span class="token punctuation">.</span>URL

	Proto      <span class="token builtin">string</span> <span class="token comment">// &quot;HTTP/1.0&quot;</span>
	ProtoMajor <span class="token builtin">int</span>    <span class="token comment">// 1</span>
	ProtoMinor <span class="token builtin">int</span>    <span class="token comment">// 0</span>

	Header Header

	Body io<span class="token punctuation">.</span>ReadCloser

	GetBody <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>io<span class="token punctuation">.</span>ReadCloser<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>

	ContentLength <span class="token builtin">int64</span>

	TransferEncoding <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>

	Close <span class="token builtin">bool</span>

	Host <span class="token builtin">string</span>

	Form url<span class="token punctuation">.</span>Values

	PostForm url<span class="token punctuation">.</span>Values

	MultipartForm <span class="token operator">*</span>multipart<span class="token punctuation">.</span>Form

	Trailer Header

	RemoteAddr <span class="token builtin">string</span>

	RequestURI <span class="token builtin">string</span>

	TLS <span class="token operator">*</span>tls<span class="token punctuation">.</span>ConnectionState

	Cancel <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

	Response <span class="token operator">*</span>Response

	ctx context<span class="token punctuation">.</span>Context
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h2><p>Web 模板就是预先设计好的 HTML 页面，它可以被模板引擎反复的使用，来产生 HTML 页面</p><p>Go 的标准库提供了 text/template，html/template 两个模板库，大多数 Go 的 Web 框架都使用这些库作为默认的模板引擎</p><p>模板引擎可以合并模板与上下文数据，产生最终的 HTML</p><p><img src="`+d+'" alt="Alt text"></p><h3 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h3><p><img src="'+k+`" alt="Alt text"></p><ol><li>在 Web 应用中，通产是由 handler 来触发模板引擎</li><li>handler 调用模板引擎，并将使用的模板传递给引擎，通常是一组模板文件和动态数据</li><li>模板引擎生成 HTML，并将其写入到 ResponseWriter</li><li>ResponseWriter 再将它加入到 HTTP 响应中，返回给客户端</li></ol><h3 id="使用模板引擎" tabindex="-1"><a class="header-anchor" href="#使用模板引擎" aria-hidden="true">#</a> 使用模板引擎</h3><ol><li>解析模板源（可以是字符串或模板文件），从而创建一个解析好的 模板的 struct</li><li>执行解析好的模板，并传入 ResponseWriter 和 数据，这会触发模板引擎组合解析好的模板和数据，来产生最终的 HTML，并将它传递给 ResponseWriter</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">handleCompanies</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 解析</span>
	t<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> template<span class="token punctuation">.</span><span class="token function">ParseFiles</span><span class="token punctuation">(</span><span class="token string">&quot;companies.html&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// 执行</span>
	t<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> Action</h3><p>Action 就是 Go 模板中嵌入的命令，位于两组花括号之间</p>`,41),y=n("li",null,[s("Action 主要可以分为五类 "),n("ul",null,[n("li",null,"条件类"),n("li",null,"迭代/遍历类"),n("li",null,"设置类"),n("li",null,"包含类"),n("li",null,"定义类")])],-1),H=a('<h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><p><img src="'+v+`" alt="Alt text"></p><ul><li>静态路由：一个路径对应一个页面</li><li>带参数的路由：根据路由参数，创建出一组不同的页面</li><li>第三方路由 <ul><li>gorilla/mux：灵活性高、功能强大、性能相对差一些</li><li>httprouter：注重性能、功能简单</li></ul></li><li>自定义路由</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;Web/controller&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	server <span class="token operator">:=</span> http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span>
		Addr<span class="token punctuation">:</span> <span class="token string">&quot;localhost:8088&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	controller<span class="token punctuation">.</span><span class="token function">RegisterRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	server<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// companies.go</span>
<span class="token keyword">package</span> controller

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;net/http&quot;</span>
	<span class="token string">&quot;regexp&quot;</span>
	<span class="token string">&quot;strconv&quot;</span>
	<span class="token string">&quot;text/template&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">registerCompanyRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/companies&quot;</span><span class="token punctuation">,</span> handleCompanies<span class="token punctuation">)</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/companies/&quot;</span><span class="token punctuation">,</span> handleCompany<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">handleCompanies</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	t<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> template<span class="token punctuation">.</span><span class="token function">ParseFiles</span><span class="token punctuation">(</span><span class="token string">&quot;companies.html&quot;</span><span class="token punctuation">)</span>
	t<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">handleCompany</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	t<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> template<span class="token punctuation">.</span><span class="token function">ParseFiles</span><span class="token punctuation">(</span><span class="token string">&quot;company.html&quot;</span><span class="token punctuation">)</span>

	pattern<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">Compile</span><span class="token punctuation">(</span><span class="token string">\`/companies/(\\d+)\`</span><span class="token punctuation">)</span>
	matches <span class="token operator">:=</span> pattern<span class="token punctuation">.</span><span class="token function">FindStringSubmatch</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		companyId<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>matches<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
		t<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> companyId<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusNotFound<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录结构 <img src="`+m+'" alt="Alt text"></p><p>在浏览器地址栏输入：http://localhost:8088/companies</p><p><img src="'+b+'" alt="Alt text"></p><p>在浏览器地址栏输入：http://localhost:8088/companies</p><p><img src="'+h+'" alt="Alt text"></p><h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h2><p><img src="'+g+'" alt="Alt text"></p><p>因为Go中 struct 如果需要提供给其他地方使用，字段首字母需要大写，所以需要做一个映射</p><p><img src="'+f+'" alt="Alt text"></p><p>对于未知结构的 JSON</p><ul><li>map[string]interface{} 可以存储任意 JSON 对象</li><li>[]interface{} 可以存储任意的 JSON 数组</li></ul><h3 id="读取-json" tabindex="-1"><a class="header-anchor" href="#读取-json" aria-hidden="true">#</a> 读取 JSON</h3><ul><li>需要一个解码器：dec := json.NewDecoder(r.Body) <ul><li>参数需实现 Reader 接口</li></ul></li><li>在解码器上进行解码：dec.Decode(&amp;query)</li></ul><h3 id="写入-json" tabindex="-1"><a class="header-anchor" href="#写入-json" aria-hidden="true">#</a> 写入 JSON</h3><ul><li>需要一个编码器：enc := json.NewEncoder(w) <ul><li>参数需实现 Writer 接口</li></ul></li><li>编码：enc.Encode(results)</li></ul><h3 id="marshal-和-unmarshal" tabindex="-1"><a class="header-anchor" href="#marshal-和-unmarshal" aria-hidden="true">#</a> Marshal 和 Unmarshal</h3><p>Marshal（编码）: 把 go struct 转化为 json 格式，MarshalIndent，带缩进</p><p>Unmarshal（解码）: 把 json 转化为 go struct</p><p>区别：</p><p>针对 string 或 bytes：</p><ul><li>Marshal =&gt; String</li><li>Unmarshal &lt;= String</li></ul><p>针对 stream：</p><ul><li>Encode =&gt; Stream，把数据写入到 io.Writer</li><li>Decode &lt;= Stream，从 io.Reader 读取数据</li></ul><h2 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h2><p><img src="'+x+`" alt="Alt text"></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> MyMiddleware <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Next http<span class="token punctuation">.</span>Handler
<span class="token punctuation">}</span>

<span class="token keyword">func</span><span class="token punctuation">(</span>m <span class="token operator">*</span>MyMiddleware<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 指定下一个 handler</span>
	<span class="token keyword">if</span> m<span class="token punctuation">.</span>Next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		m<span class="token punctuation">.</span>Next <span class="token operator">=</span> http<span class="token punctuation">.</span>DefaultServeMux<span class="token operator">/</span><span class="token function">new</span><span class="token punctuation">(</span>MyOtherHandler<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 在 next handler 之前做一些事情</span>
	m<span class="token punctuation">.</span>Next<span class="token punctuation">.</span><span class="token function">ServeHTTP</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
	<span class="token comment">// 在 next handler 之后做一些事情</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="存储数据" tabindex="-1"><a class="header-anchor" href="#存储数据" aria-hidden="true">#</a> 存储数据</h2>`,31),S={href:"https://xiaoens.github.io/books/Go/go-mysql.html",target:"_blank",rel:"noopener noreferrer"};function R(t,_){const e=l("ExternalLinkIcon");return o(),i("div",null,[w,n("ul",null,[n("li",null,c(t.xxx)+"，就是一个 Action，而且是最重要的一个。它代表了传入模板的数据",1),y]),H,n("p",null,[n("a",S,[s("https://xiaoens.github.io/books/Go/go-mysql.html"),u(e)])])])}const M=p(q,[["render",R],["__file","goWeb.html.vue"]]);export{M as default};
