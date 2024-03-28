import{_ as n,o as s,c as a,e as t}from"./app-4259075f.js";const e="/assets/image-408986e3.png",i="/assets/image2-cfecfaf9.png",o={},p=t(`<h2 id="打印日志" tabindex="-1"><a class="header-anchor" href="#打印日志" aria-hidden="true">#</a> 打印日志</h2><ul><li><code>log.Println(&quot;log message&quot;)</code></li><li><code>log.Fatalln(&quot;log message&quot;)</code></li><li><code>log.Panicln(&quot;log message&quot;)</code></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// init() 函数会在 main() 函数之前执行</span>
<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;init func execute&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;this is a log&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 打印日志后会继续执行</span>
	<span class="token comment">/**
	init func execute
	2023/12/07 21:27:39 this is a log
	*/</span>

	log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span><span class="token string">&quot;this is a log&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 打印日志后会执行 os.Exit(1)， 结束程序</span>
	<span class="token comment">/**
	init func execute
	2023/12/07 21:27:17 this is a log

	Process finished with the exit code 1
	*/</span>

	log<span class="token punctuation">.</span><span class="token function">Panicln</span><span class="token punctuation">(</span><span class="token string">&quot;this ia a log&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 打印日志后，并打印 stackTrace</span>
	<span class="token comment">/**
	init func execute
	2023/12/07 21:26:07 this ia a log
	panic: this ia a log


	goroutine 1 [running]:
	log.Panicln({0xc00011bf60?, 0x0?, 0x0?})
	        D:/Dev/Go/src/log/log.go:399 +0x65
	main.main()
	        D:/MyCode/GoStudy/CLI-DEMO/main.go:18 +0x45

	Process finished with the exit code 2
	*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关设置" tabindex="-1"><a class="header-anchor" href="#相关设置" aria-hidden="true">#</a> 相关设置</h2><h3 id="设置日志前缀" tabindex="-1"><a class="header-anchor" href="#设置日志前缀" aria-hidden="true">#</a> 设置日志前缀</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;log&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 设置日志前缀</span>
	log<span class="token punctuation">.</span><span class="token function">SetPrefix</span><span class="token punctuation">(</span><span class="token string">&quot;XY:&quot;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;this is a log&quot;</span><span class="token punctuation">)</span> <span class="token comment">// XY:2023/12/07 21:31:30 this is a log</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置日志保存文件" tabindex="-1"><a class="header-anchor" href="#设置日志保存文件" aria-hidden="true">#</a> 设置日志保存文件</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 设置日志前缀</span>
	log<span class="token punctuation">.</span><span class="token function">SetPrefix</span><span class="token punctuation">(</span><span class="token string">&quot;XY:&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// 设置保存文件</span>
	f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;./xy.log&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_CREATE<span class="token operator">|</span>os<span class="token punctuation">.</span>O_APPEND<span class="token operator">|</span>os<span class="token punctuation">.</span>O_WRONLY<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	log<span class="token punctuation">.</span><span class="token function">SetOutput</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;this is a log&quot;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多出xy.log文件，并且日志内容背写入该文件中</p><p><img src="`+e+`" alt="Alt text"></p><blockquote><p>在 Go 语言中，文件权限由一个八进制数表示，通常使用四个数字来表示权限的不同组合。 每个数字代表一组权限，从左到右分别是：</p><ul><li>第一个数字表示所有者（文件的拥有者）的权限</li><li>第二个数字表示与所有者同一组的用户的权限</li><li>第三个数字表示其他用户的权限</li></ul><p>每个数字可以取以下数值的组合：</p><ul><li>0：没有权限（无法读取、写入或执行）</li><li>1：执行权限</li><li>2：写入权限</li><li>3：写入和执行权限</li><li>4：读取权限</li><li>5：读取和执行权限</li><li>6：读取和写入权限</li><li>7：读取、写入和执行权限</li></ul></blockquote><h3 id="设置打印格式" tabindex="-1"><a class="header-anchor" href="#设置打印格式" aria-hidden="true">#</a> 设置打印格式</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 设置日志前缀</span>
	log<span class="token punctuation">.</span><span class="token function">SetPrefix</span><span class="token punctuation">(</span><span class="token string">&quot;XY:&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// 设置保存文件</span>
	f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;./xy.log&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_CREATE<span class="token operator">|</span>os<span class="token punctuation">.</span>O_APPEND<span class="token operator">|</span>os<span class="token punctuation">.</span>O_WRONLY<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	log<span class="token punctuation">.</span><span class="token function">SetOutput</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>

	<span class="token comment">// 设置输出格式，默认是时间+日期: Ldate | Ltime，也可以自行修改</span>
	log<span class="token punctuation">.</span><span class="token function">SetFlags</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>Ldate <span class="token operator">|</span> log<span class="token punctuation">.</span>Ltime <span class="token operator">|</span> log<span class="token punctuation">.</span>Lmicroseconds <span class="token operator">|</span> log<span class="token punctuation">.</span>Llongfile<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;this is a log&quot;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt="Alt text"></p><h2 id="自定义-logger" tabindex="-1"><a class="header-anchor" href="#自定义-logger" aria-hidden="true">#</a> 自定义 logger</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;io&quot;</span>
	<span class="token string">&quot;io/ioutil&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	Trace   <span class="token operator">*</span>log<span class="token punctuation">.</span>Logger <span class="token comment">// 几乎任何东西</span>
	Info    <span class="token operator">*</span>log<span class="token punctuation">.</span>Logger <span class="token comment">// 重要信息</span>
	Warning <span class="token operator">*</span>log<span class="token punctuation">.</span>Logger <span class="token comment">// 警告</span>
	Error   <span class="token operator">*</span>log<span class="token punctuation">.</span>Logger <span class="token comment">// 错误</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;./errors.log&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_CREATE<span class="token operator">|</span>os<span class="token punctuation">.</span>O_WRONLY<span class="token operator">|</span>os<span class="token punctuation">.</span>O_APPEND<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span><span class="token string">&quot;无法打开错误 log 文件:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	Trace <span class="token operator">=</span> log<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>ioutil<span class="token punctuation">.</span>Discard<span class="token punctuation">,</span> <span class="token string">&quot;TRACE: &quot;</span><span class="token punctuation">,</span> log<span class="token punctuation">.</span>Ldate<span class="token operator">|</span>log<span class="token punctuation">.</span>Ltime<span class="token operator">|</span>log<span class="token punctuation">.</span>Lshortfile<span class="token punctuation">)</span>
	Info <span class="token operator">=</span> log<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">,</span> <span class="token string">&quot;INFO: &quot;</span><span class="token punctuation">,</span> log<span class="token punctuation">.</span>Ldate<span class="token operator">|</span>log<span class="token punctuation">.</span>Ltime<span class="token operator">|</span>log<span class="token punctuation">.</span>Lshortfile<span class="token punctuation">)</span>
	Warning <span class="token operator">=</span> log<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">,</span> <span class="token string">&quot;WARNING: &quot;</span><span class="token punctuation">,</span> log<span class="token punctuation">.</span>Ldate<span class="token operator">|</span>log<span class="token punctuation">.</span>Ltime<span class="token operator">|</span>log<span class="token punctuation">.</span>Lshortfile<span class="token punctuation">)</span>
	Error <span class="token operator">=</span> log<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>io<span class="token punctuation">.</span><span class="token function">MultiWriter</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> os<span class="token punctuation">.</span>Stderr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;ERROR: &quot;</span><span class="token punctuation">,</span> log<span class="token punctuation">.</span>Ldate<span class="token operator">|</span>log<span class="token punctuation">.</span>Ltime<span class="token operator">|</span>log<span class="token punctuation">.</span>Lshortfile<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Trace<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;鸡毛蒜皮的小事&quot;</span><span class="token punctuation">)</span>
	Info<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;一些特别的信息&quot;</span><span class="token punctuation">)</span>
	Warning<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;这是一个警告&quot;</span><span class="token punctuation">)</span>
	Error<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;出现了故障&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>控制台：
INFO: 2023/12/07 22:09:46 main.go:32: 一些特别的信息
WARNING: 2023/12/07 22:09:46 main.go:33: 这是一个警告
ERROR: 2023/12/07 22:09:46 main.go:34: 出现了故障


errors.log 文件
ERROR: 2023/12/07 22:09:46 main.go:34: 出现了故障
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[p];function c(u,d){return s(),a("div",null,l)}const k=n(o,[["render",c],["__file","go-log.html.vue"]]);export{k as default};
