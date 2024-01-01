import{_ as n,o as s,c as a,e as t}from"./app-2eca34d6.js";const p="/assets/image3-ca5a9005.png",o={},e=t(`<p>扫描1~1024的端口的耗时</p><ul><li>非并发版: 2071 seconds</li><li>并发版: 2094 ms</li><li>goroutine 池并发版: 22299 ms</li></ul><h2 id="非并发版" tabindex="-1"><a class="header-anchor" href="#非并发版" aria-hidden="true">#</a> 非并发版</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 扫描1~1024的端口号</span>
	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1025</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		address <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:%d&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> address<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> <span class="token string">&quot;关闭了！&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> <span class="token string">&quot;打开了！&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	elapsed <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1e9</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n%d seconds&quot;</span><span class="token punctuation">,</span> elapsed<span class="token punctuation">)</span> <span class="token comment">// 2071 seconds</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="并发版" tabindex="-1"><a class="header-anchor" href="#并发版" aria-hidden="true">#</a> 并发版</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;net&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 扫描1~1024的端口号</span>
	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1024</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			address <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:%d&quot;</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>
			conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> address<span class="token punctuation">)</span>
			<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> <span class="token string">&quot;关闭了！&quot;</span><span class="token punctuation">)</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> <span class="token string">&quot;打开了！&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	elapsed <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1e6</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n %d ms&quot;</span><span class="token punctuation">,</span> elapsed<span class="token punctuation">)</span> <span class="token comment">// 2094 ms</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="goroutine-池并发版" tabindex="-1"><a class="header-anchor" href="#goroutine-池并发版" aria-hidden="true">#</a> goroutine 池并发版</h2><p>创建一个chan，大小为100，用来扫描端口，再用一个chan来接收扫描的结果</p><p><img src="`+p+`" alt="Alt text"></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;net&quot;</span>
	<span class="token string">&quot;sort&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">worker</span><span class="token punctuation">(</span>ports <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> result <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> p <span class="token operator">:=</span> <span class="token keyword">range</span> ports <span class="token punctuation">{</span>
		address <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:%d&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>
		conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> address<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			result <span class="token operator">&lt;-</span> <span class="token operator">-</span>p
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		result <span class="token operator">&lt;-</span> p
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	ports <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
	results <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> openports <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
	<span class="token keyword">var</span> closeports <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">cap</span><span class="token punctuation">(</span>ports<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">worker</span><span class="token punctuation">(</span>ports<span class="token punctuation">,</span> results<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 防止阻塞，应为接收的results chan大小为1</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1025</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			ports <span class="token operator">&lt;-</span> i
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1025</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		port <span class="token operator">:=</span> <span class="token operator">&lt;-</span>results
		<span class="token keyword">if</span> port <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			openports <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>openports<span class="token punctuation">,</span> port<span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			closeports <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>closeports<span class="token punctuation">,</span> <span class="token operator">-</span>port<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token function">close</span><span class="token punctuation">(</span>ports<span class="token punctuation">)</span>
	elapsed <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1e6</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n %d seconds&quot;</span><span class="token punctuation">,</span> elapsed<span class="token punctuation">)</span> <span class="token comment">//</span>

	sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>openports<span class="token punctuation">)</span>
	sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>closeports<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> port <span class="token operator">:=</span> <span class="token keyword">range</span> openports <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:&quot;</span><span class="token punctuation">,</span> port<span class="token punctuation">,</span> <span class="token string">&quot;打开了！&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> port <span class="token operator">:=</span> <span class="token keyword">range</span> closeports <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:&quot;</span><span class="token punctuation">,</span> port<span class="token punctuation">,</span> <span class="token string">&quot;关闭了！&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[e];function i(l,u){return s(),a("div",null,c)}const k=n(o,[["render",i],["__file","tcp-scanner.html.vue"]]);export{k as default};
