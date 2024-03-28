import{_ as n,o as s,c as a,e as t}from"./app-4259075f.js";const e="/assets/1700880012846-818c30e8.png",p="/assets/1700882244368-ce185a66.png",i="/assets/1700885529054-6305296b.png",o="/assets/1700897655113-74cf2ad8.png",c="/assets/1700899888749-97662b66.png",l="/assets/1700903472999-69ecfe27.png",u="/assets/image-e3ee43ee.png",r="/assets/image2-cf7de0bc.png",d={},k=t(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>Go 语言是一门编译语言 <ul><li>在你运行程序之前，Go 首先使用编译器把你的代码转换成机器能够读懂的 1 和 0</li><li>它会把你所有的代码编译成一个可执行文件，在编译的过程中，Go编译器能够捕获一些错误</li></ul></li><li>不是所有的编程语言都使用这种方式 <ul><li>Python、Ruby 等很多语言都是使用解释器，随着程序的运行，一个语句一个语句的进行翻译。但这也意味着 bug 可能就潜伏在你还没有测试过的路径上，这些就是解释型语言</li></ul></li></ul><h2 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h2><h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h3><p>Go 提供了 <em>+，-，</em>，/，%等运算符</p><p>注意Go中没有类似于Java中 <code>++i</code>这种自增运算符，可以使用 <code>i++</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 4</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fmt-print-fmt-println-fmt-printf" tabindex="-1"><a class="header-anchor" href="#fmt-print-fmt-println-fmt-printf" aria-hidden="true">#</a> fmt.Print &amp; fmt.Println &amp; fmt.Printf</h3><p>Print，Println 函数：</p><ul><li>可以传递若干个参数，之间用逗号分开</li><li>参数可以是字符串、数字、数学表达式等等</li></ul><p>与 Print 和 Println 不同，Printf 的第一个参数必须是字符串</p><ul><li>这个字符串里包含了像 %v 这样的格式化动词，它的值由第二个参数的值所代替</li><li>如果指定了多个格式化动词，那么它们的值由后边的参数值按其顺序进行替换</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// 使用Printf对齐文本</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">/*
	   在格式化动词里指定宽度，就可以对齐文本。
	   例如，%4v，就是向左填充到足够4个宽度
	   正数，向左填充空格
	   负数，向右填充空格
	*/</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%-15v $%4v\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;SpaceX&quot;</span><span class="token punctuation">,</span> <span class="token number">94</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%-15v $%4v\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Virgin Galactic&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+`" alt="1700880012846"></p><h3 id="变量-常量" tabindex="-1"><a class="header-anchor" href="#变量-常量" aria-hidden="true">#</a> 变量 &amp; 常量</h3><p>const，用来声明常量，常量的值不可以改变</p><p>var，用来声明变量，想要使用变量首先需要进行声明</p><h3 id="分支-循环" tabindex="-1"><a class="header-anchor" href="#分支-循环" aria-hidden="true">#</a> 分支 &amp; 循环</h3><p>if 分支</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> scores <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">88</span>

	<span class="token keyword">if</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> scores <span class="token operator">&amp;&amp;</span> scores <span class="token operator">&lt;</span> <span class="token number">60</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;不及格&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token number">60</span> <span class="token operator">&lt;=</span> scores <span class="token operator">&amp;&amp;</span> scores <span class="token operator">&lt;</span> <span class="token number">90</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;良好&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token number">90</span> <span class="token operator">&lt;</span> scores <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;优秀&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;成绩不合法&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>switch 分支</p><ul><li>switch 还有一个 fallthrough 关键字，它用来执行下一个 case 的 body 部分</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> scores <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">88</span>

	<span class="token keyword">switch</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> scores <span class="token operator">&amp;&amp;</span> scores <span class="token operator">&lt;</span> <span class="token number">60</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;不及格&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token number">60</span> <span class="token operator">&lt;=</span> scores <span class="token operator">&amp;&amp;</span> scores <span class="token operator">&lt;</span> <span class="token number">90</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;良好&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">fallthrough</span>
	<span class="token keyword">case</span> <span class="token number">90</span> <span class="token operator">&lt;=</span> scores<span class="token punctuation">:</span>
		<span class="token keyword">if</span> scores <span class="token operator">&lt;</span> <span class="token number">90</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;您还差%v分就可以达到优秀程度，请继续加油&quot;</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token operator">-</span>scores<span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;优秀&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;成绩不合法&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>循环</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// 计算1~10的和</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sum <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> i
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;sum = &quot;</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span> <span class="token comment">// 55</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><h3 id="浮点型" tabindex="-1"><a class="header-anchor" href="#浮点型" aria-hidden="true">#</a> 浮点型</h3><ul><li>默认是 float64 <ul><li>64 位的浮点类型</li><li>占用 8 字节内存</li><li>某些编程语言把这种类型叫做 double（双精度）</li></ul></li><li>float32 <ul><li>占用 4 字节内存</li><li>精度比 float64 低</li><li>有时叫做单精度类型</li></ul></li></ul><h3 id="整数型" tabindex="-1"><a class="header-anchor" href="#整数型" aria-hidden="true">#</a> 整数型</h3><p><img src="`+p+`" alt="1700882244368"></p><p>int 和 uint</p><ul><li>int 和 uint 是针对目标设备优化的类型</li><li>在树莓派 2、比较老的移动设备上，int 和 uint 都是 32 位的</li><li>在比较新的计算机上，int 和 uint 都是 64 位的</li><li>虽然在某些设备上 int 可以看作是 int32，在某些设备上 int 可以看作是 int64，但它们其实是 3 种不同的类型</li></ul><h3 id="big-包" tabindex="-1"><a class="header-anchor" href="#big-包" aria-hidden="true">#</a> Big 包</h3><ul><li>对于较大的整数（超过1018 ）：big.Int，一旦使用了 big.Int，那么等式里其它的部分也必须使用 big.Int</li><li>对于任意精度的浮点类型，big.Float</li><li>对于分数，big.Rat</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;math/big&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// NewInt() 函数可以把 int64 转化为 big.Int 类型</span>
	lightSpeed <span class="token operator">:=</span> big<span class="token punctuation">.</span><span class="token function">NewInt</span><span class="token punctuation">(</span><span class="token number">299792</span><span class="token punctuation">)</span>
	secondsPerDay <span class="token operator">:=</span> big<span class="token punctuation">.</span><span class="token function">NewInt</span><span class="token punctuation">(</span><span class="token number">86400</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>lightSpeed<span class="token punctuation">,</span> secondsPerDay<span class="token punctuation">)</span>

	distance <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>big<span class="token punctuation">.</span>Int<span class="token punctuation">)</span>
	distance<span class="token punctuation">.</span><span class="token function">SetString</span><span class="token punctuation">(</span><span class="token string">&quot;2400000000000000000&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// 以10进制表示</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Andromeda Galaxy is &quot;</span><span class="token punctuation">,</span> distance<span class="token punctuation">)</span>

	seconds <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>big<span class="token punctuation">.</span>Int<span class="token punctuation">)</span>
	seconds<span class="token punctuation">.</span><span class="token function">Div</span><span class="token punctuation">(</span>distance<span class="token punctuation">,</span> lightSpeed<span class="token punctuation">)</span>

	days <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>big<span class="token punctuation">.</span>Int<span class="token punctuation">)</span>
	days<span class="token punctuation">.</span><span class="token function">Div</span><span class="token punctuation">(</span>seconds<span class="token punctuation">,</span> secondsPerDay<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;That is&quot;</span><span class="token punctuation">,</span> days<span class="token punctuation">,</span> <span class="token string">&quot;days of travel at light speed&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h2><p>声明：</p><ul><li><code>peace := &quot;peace&quot;</code></li><li><code>var peace = &quot;peace&quot;</code></li><li><code>var peace string = &quot;peace&quot;</code></li></ul><h3 id="字符串字面值-原始字符串字面值" tabindex="-1"><a class="header-anchor" href="#字符串字面值-原始字符串字面值" aria-hidden="true">#</a> 字符串字面值 &amp; 原始字符串字面值</h3><p>字符串字面值可以包含转义字符，例如 \\n，但如果你确实想得到 \\n 而不是换行的话，可以使用 \` 来代替 “，这叫做原始字符串字面值。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	str1 <span class="token operator">:=</span> <span class="token string">&quot;字符串字面值\\n&quot;</span>
	str2 <span class="token operator">:=</span> <span class="token string">\`字符串原始值\\n\`</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+'" alt="1700885529054"></p><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p>在 Go 里，使用 func 关键字声明函数，大写字母开头的函数、变量或其它标识符都会被导出，对其它包可用，小写字母开头的就不行</p><p><img src="'+o+`" alt="1700897655113"></p><p>函数可以有多个参数，如果多个形参类型相同，那么该类型只写一次即可</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Unix</span><span class="token punctuation">(</span>sec <span class="token builtin">int64</span><span class="token punctuation">,</span> nsec <span class="token builtin">int64</span><span class="token punctuation">)</span> Time
<span class="token keyword">func</span> <span class="token function">Unix</span><span class="token punctuation">(</span>sec<span class="token punctuation">,</span> nsec <span class="token builtin">int64</span><span class="token punctuation">)</span> Time
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>函数可以有多个返回值，函数的多个返回值需要用括号括起来。声明函数时可以把名字去掉，只保留类型</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	countdown<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>countdown<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Atoi</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数的参数数量是可变的，… 和空接口组合到一起就可以接受任意数量、类型的参数，比如Println函数</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Println函数的声明</span>
<span class="token comment">// ... 表示函数的参数的数量是可变的 </span>
<span class="token comment">// 参数 a 的类型为 interface{}，是一个空接口</span>

<span class="token keyword">func</span> <span class="token function">Println</span><span class="token punctuation">(</span>a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">Fprintln</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">,</span> a<span class="token operator">...</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><p>在 C#、Java 里，方法属于类。在 Go 里，它提供了方法，但是没提供类和对象</p><p>可以将方法与同包中声明的任何类型相关联，但不可以是 int、float64 等预声明的类型进行关联</p><p><img src="`+c+`" alt="1700899888749"></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> k kelvin <span class="token operator">=</span> <span class="token number">294.0</span>
	<span class="token keyword">var</span> c celsius

	c <span class="token operator">=</span> <span class="token function">kelvinToCelsius</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span> <span class="token comment">// 调用函数</span>
	c <span class="token operator">=</span> k<span class="token punctuation">.</span><span class="token function">celsius</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">// 调用方法</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 20.850000000000023</span>
<span class="token punctuation">}</span>

<span class="token comment">// 给类型声明别名，但不可以和原类型混用</span>
<span class="token keyword">type</span> kelvin <span class="token builtin">float64</span>
<span class="token keyword">type</span> celsius <span class="token builtin">float64</span>

<span class="token comment">// 函数</span>
<span class="token keyword">func</span> <span class="token function">kelvinToCelsius</span><span class="token punctuation">(</span>k kelvin<span class="token punctuation">)</span> celsius <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">celsius</span><span class="token punctuation">(</span>k <span class="token operator">-</span> <span class="token number">273.15</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 方法，接收者是kelvin</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>k kelvin<span class="token punctuation">)</span> <span class="token function">celsius</span><span class="token punctuation">(</span><span class="token punctuation">)</span> celsius <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">celsius</span><span class="token punctuation">(</span>k <span class="token operator">-</span> <span class="token number">273.15</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一等函数" tabindex="-1"><a class="header-anchor" href="#一等函数" aria-hidden="true">#</a> 一等函数</h2><ul><li>在 Go 里，函数是头等的，它可以用在整数、字符串或其它类型能用的地方: <ul><li>将函数赋给变量<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;math/rand&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 变量 sensor 就是一个函数，而不是函数执行的结果</span>
	<span class="token comment">// 这个变量的类型是函数，该函数没有参数，返回一个 kelvin 类型的值。</span>
	sensor <span class="token operator">:=</span> fakeSensor
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">sensor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	sensor <span class="token operator">=</span> realSensor
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">sensor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> kelvin <span class="token builtin">float64</span>

<span class="token keyword">func</span> <span class="token function">fakeSensor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> kelvin <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">kelvin</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">151</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">150</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">realSensor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> kelvin <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>将函数作为参数传递给函数</li><li>将函数作为函数的返回类型</li></ul></li></ul><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><p>数组是一种固定长度且有序的元素集合</p><ul><li>数组中的每个元素都可以通过[ ] 和一个从 0 开始的索引进行访问</li><li>数组的长度可由内置函数 len 来确定</li><li>在声明数组时，未被赋值元素的值是对应类型的零值</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 声明并初始化</span>
	arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>

	<span class="token comment">// for 遍历数组</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\t&quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// range 遍历数组</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> arr <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\t&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="slice" tabindex="-1"><a class="header-anchor" href="#slice" aria-hidden="true">#</a> slice</h2><p>指向数组的窗口，切分数组不会导致数组被修改，它只是创建了指向数组的一个窗口或视图，这种视图就是 slice 类型</p><ul><li>Slice 使用的是半开区间</li><li>Slice 的默认索引 <ul><li>忽略掉 slice 的起始索引，表示从数组的起始位置进行切分</li><li>忽略掉 slice 的结束索引，相当于使用数组的长度作为结束索引</li><li>如果同时省略掉起始和结束索引，那就是包含数组所有元素的一个 slice</li><li>注意：slice 的索引不能是负数</li></ul></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 声明并初始化</span>
	arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>

	s <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
	<span class="token function">printArr</span><span class="token punctuation">(</span>dwarf<span class="token punctuation">)</span> <span class="token comment">// 1       2       3</span>

	s <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
	<span class="token function">printArr</span><span class="token punctuation">(</span>dwarf<span class="token punctuation">)</span> <span class="token comment">// 4       5</span>

	s <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
	<span class="token function">printArr</span><span class="token punctuation">(</span>dwarf<span class="token punctuation">)</span> <span class="token comment">// 1       2       3       4       5</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printArr</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\t&quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h2><p>map 是 Go 提供的另外一种集合：</p><ul><li>它可以将 key 映射到 value</li><li>可快速通过 key 找到对应的 value</li><li>它的 key 几乎可以是任何类型</li></ul><p>声明 map，必须指定 key 和 value 的类型：</p><p><img src="`+l+`" alt="1700903472999"></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 复合字面值来初始化 map</span>
	temperature <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
		<span class="token string">&quot;Earth&quot;</span><span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
		<span class="token string">&quot;Mars&quot;</span><span class="token punctuation">:</span>  <span class="token operator">-</span><span class="token number">65</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// make 初始化 map，第二个参数指定 mao 的初始容量，如果不指定，默认为0</span>
	<span class="token comment">//temperature := make(map[string]int, 2)</span>
	<span class="token comment">//temperature[&quot;Earth&quot;] = 15</span>
	<span class="token comment">//temperature[&quot;Mars&quot;] = -65</span>

	<span class="token comment">// 根据key取出value</span>
	temp <span class="token operator">:=</span> temperature<span class="token punctuation">[</span><span class="token string">&quot;Earth&quot;</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;On average the Earth is %v℃\\n&quot;</span><span class="token punctuation">,</span> temp<span class="token punctuation">)</span>

	<span class="token comment">// 修改map中的值</span>
	temperature<span class="token punctuation">[</span><span class="token string">&quot;Earth&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">16</span>
	temperature<span class="token punctuation">[</span><span class="token string">&quot;Mars&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">464</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span>

	<span class="token comment">// 逗号与ok写法：当取出map中不存在的值，ok的值为false，执行else中的代码</span>
	<span class="token keyword">if</span> moon<span class="token punctuation">,</span> ok <span class="token operator">:=</span> temperature<span class="token punctuation">[</span><span class="token string">&quot;Moon&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;On average the moon is %v℃\\n&quot;</span><span class="token punctuation">,</span> moon<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Where is the moon?&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="struct" tabindex="-1"><a class="header-anchor" href="#struct" aria-hidden="true">#</a> struct</h2><p>为了将分散的零件组成一个完整的结构体，Go 提供了 struct 类型。struct 允许你将不同类型的东西组合在一起。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;encoding/json&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \`json:&quot;age&quot;\`，自定义json，表示打印改struct时，该字段显示为age</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Age  <span class="token builtin">int</span>    <span class="token string">\`json:&quot;age&quot;\`</span>
	Name <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
	Addr <span class="token builtin">string</span> <span class="token string">\`json:&quot;addr&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">var</span> user1 User
	user1<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span>
	user1<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">18</span>
	user1<span class="token punctuation">.</span>Addr <span class="token operator">=</span> <span class="token string">&quot;江西省九江市&quot;</span>

	user2 <span class="token operator">:=</span> User<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> Addr<span class="token punctuation">:</span> <span class="token string">&quot;江西省九江市&quot;</span><span class="token punctuation">}</span>

	<span class="token comment">// 不会修改user1中的值</span>
	user3 <span class="token operator">:=</span> user1
	user3<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">10</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span> <span class="token comment">// {18 张三 江西省九江市}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>user2<span class="token punctuation">)</span> <span class="token comment">// {20 李四 江西省九江市}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>user3<span class="token punctuation">)</span> <span class="token comment">// {10 张三 江西省九江市}</span>

	<span class="token comment">// 将 struct 装换为 JSON，需要注意的是Marshal 函数只会对 struct 中被导出的字段(首字母是大写的字段)进行编码，</span>
	bytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;转换错误，err: %v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {&quot;age&quot;:18,&quot;name&quot;:&quot;张三&quot;,&quot;addr&quot;:&quot;江西省九江市&quot;}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组合与转发" tabindex="-1"><a class="header-anchor" href="#组合与转发" aria-hidden="true">#</a> 组合与转发</h2><p>在面向对象的世界中，对象由更小的对象组合而成</p><p>Go 通过结构体实现组合(composition)，提供了“嵌入”（embedding）特性，它可以实现方法的转发（forwarding）</p><p><strong>组合是一种更简单、灵活的方式</strong></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> report <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	sol         <span class="token builtin">int</span>
	temperature temperature
	location    location
<span class="token punctuation">}</span>

<span class="token comment">// 最高温，最低温</span>
<span class="token keyword">type</span> temperature <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	high<span class="token punctuation">,</span> low celsius
<span class="token punctuation">}</span>

<span class="token comment">// 纬度，经度</span>
<span class="token keyword">type</span> location <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	lat<span class="token punctuation">,</span> long <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> celsius <span class="token builtin">float64</span>

<span class="token comment">// 定义一个 average 方法，接收者是 temperature</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t temperature<span class="token punctuation">)</span> <span class="token function">average</span><span class="token punctuation">(</span><span class="token punctuation">)</span> celsius <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>t<span class="token punctuation">.</span>high <span class="token operator">+</span> t<span class="token punctuation">.</span>low<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token comment">// 方法的转发，定义一个 average 方法，接收者是 report</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r report<span class="token punctuation">)</span> <span class="token function">average</span><span class="token punctuation">(</span><span class="token punctuation">)</span> celsius <span class="token punctuation">{</span>
	<span class="token keyword">return</span> r<span class="token punctuation">.</span>temperature<span class="token punctuation">.</span><span class="token function">average</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	bradbury <span class="token operator">:=</span> location<span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">4.5895</span><span class="token punctuation">,</span> <span class="token number">137.4417</span><span class="token punctuation">}</span>
	t <span class="token operator">:=</span> temperature<span class="token punctuation">{</span>high<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span> low<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">78.0</span><span class="token punctuation">}</span>
	report <span class="token operator">:=</span> report<span class="token punctuation">{</span>
		sol<span class="token punctuation">:</span>         <span class="token number">15</span><span class="token punctuation">,</span>
		temperature<span class="token punctuation">:</span> t<span class="token punctuation">,</span>
		location<span class="token punctuation">:</span>    bradbury<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%+v\\n&quot;</span><span class="token punctuation">,</span> report<span class="token punctuation">)</span>             <span class="token comment">// {sol:15 temperature:{high:-1 low:-78} location:{lat:-4.5895 long:137.4417}}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%+v\\n&quot;</span><span class="token punctuation">,</span> report<span class="token punctuation">.</span>temperature<span class="token punctuation">)</span> <span class="token comment">// {high:-1 low:-78}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;average temperature is %v\\n&quot;</span><span class="token punctuation">,</span> report<span class="token punctuation">.</span><span class="token function">average</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// average temperature is -39.5</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="struct-嵌入实现方法转发" tabindex="-1"><a class="header-anchor" href="#struct-嵌入实现方法转发" aria-hidden="true">#</a> struct 嵌入实现方法转发</h3><p>在 struct 中只给定字段类型，不给定字段名即可，并且可以转发任意类型。</p><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><ul><li>接口关注于类型可以做什么，而不是存储了什么</li><li>接口通过列举类型必须满足的一组方法来进行声明</li><li>按约定，接口名称通常以 er 结尾，并且接口都是隐式满足的</li><li>接口可以与 struct 嵌入 特性一同使用，同时使用组合和接口将构成非常强大的设计工具</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> talker <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> martian <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m martian<span class="token punctuation">)</span> <span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string">&quot;nack nack&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> laser <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l laser<span class="token punctuation">)</span> <span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> strings<span class="token punctuation">.</span><span class="token function">Repeat</span><span class="token punctuation">(</span><span class="token string">&quot;pew &quot;</span><span class="token punctuation">,</span> <span class="token function">int</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">shout</span><span class="token punctuation">(</span>t talker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	louder <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>louder<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> starship <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	laser
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">shout</span><span class="token punctuation">(</span>martian<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// NACK NACK</span>
	<span class="token function">shout</span><span class="token punctuation">(</span><span class="token function">laser</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// PEW PEW</span>

	<span class="token comment">// 接口可以与 struct 嵌入一起使用</span>
	s <span class="token operator">:=</span> starship<span class="token punctuation">{</span><span class="token function">laser</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// pew pew pew</span>
	<span class="token function">shout</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>              <span class="token comment">// PEW PEW PEW</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指针" tabindex="-1"><a class="header-anchor" href="#指针" aria-hidden="true">#</a> 指针</h2><p><strong>指针是指向另一个变量地址的变量</strong>，Go 语言的指针同时也强调安全性，不会出现迷途指针（dangling pointers）</p><p>变量会将它们的值存储在计算机的 RAM 里，存储位置就是该变量的内存地址</p><ul><li>&amp; 表示地址操作符，通过 &amp; 可以获得变量的内存地址</li><li>&amp; 操作符无法获得字符串/数值/布尔字面值的地址，<code>&amp;42，&amp;&quot;hello&quot;</code>这些都会导致编译器报错</li><li><code>*</code> 操作符与 &amp; 的作用相反，它用来<strong>解引用</strong>，提供内存地址指向的值</li></ul><p><img src="`+u+`" alt="Alt text"></p><blockquote><p>注意：C 语言中的内存地址可以通过例如 address++ 这样的指针运算进行操作，但是在 Go 里面不允许这种不安全操作。</p></blockquote><h3 id="指针类型" tabindex="-1"><a class="header-anchor" href="#指针类型" aria-hidden="true">#</a> 指针类型</h3><p>指针类型和其它普通类型一样，出现在所有需要用到类型的地方，如变量声明、函数形参、返回值类型、结构体字段等。</p><h4 id="结构体指针" tabindex="-1"><a class="header-anchor" href="#结构体指针" aria-hidden="true">#</a> 结构体指针</h4><p>与字符串和数值不一样，复合字面量的前面可以放置 &amp;。 访问字段时，对结构体进行解引用并不是必须的。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		name<span class="token punctuation">,</span> superpower <span class="token builtin">string</span>
		age              <span class="token builtin">int</span>
	<span class="token punctuation">}</span>

	timmy <span class="token operator">:=</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> <span class="token string">&quot;Timothy&quot;</span><span class="token punctuation">,</span>
		age<span class="token punctuation">:</span>  <span class="token number">10</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	timmy<span class="token punctuation">.</span>superpower <span class="token operator">=</span> <span class="token string">&quot;flying &quot;</span>
	<span class="token punctuation">(</span><span class="token operator">*</span>timmy<span class="token punctuation">)</span><span class="token punctuation">.</span>superpower <span class="token operator">=</span> <span class="token string">&quot;flying&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%+v\\n&quot;</span><span class="token punctuation">,</span> timmy<span class="token punctuation">)</span> <span class="token comment">// &amp;{name:Timothy superpower:flying age:10}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="指向数组的指针" tabindex="-1"><a class="header-anchor" href="#指向数组的指针" aria-hidden="true">#</a> 指向数组的指针</h4><p>和结构体一样，可以把 &amp; 放在数组的复合字面值前面来创建指向数组的指针。</p><p>数组在执行索引或切片操作时会自动解引用，没有必要写 (*superpower)[0] 这种形式。 与 C 语言不一样，Go 里面数组和指针是两种完全独立的类型。</p><p>Slice 和 map 的复合字面值前面也可以放置 &amp; 操作符，但是 Go 并没有为它们提供自动解引用的功能。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	superpowers <span class="token operator">:=</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;flight&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;invisibility&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;super strength&quot;</span><span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>superpowers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>   <span class="token comment">// flight</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>superpowers<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [invisibility]</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nil" tabindex="-1"><a class="header-anchor" href="#nil" aria-hidden="true">#</a> nil</h2><p>Nil 是一个名词，表示“无”或者“零”。</p><p>在 Go 里，nil 是一个零值。如果一个指针没有明确的指向，那么它的值就是 nil。除了指针，nil 还是 slice、map 和接口的零值。</p><p>Go 语言的 nil，比以往语言中的 null 更为友好，并且用的没那么频繁，但是仍需谨慎使用。</p><h2 id="error" tabindex="-1"><a class="header-anchor" href="#error" aria-hidden="true">#</a> Error</h2><ul><li>Go 语言允许函数和方法同时返回多个值</li><li>按照惯例，函数在返回错误时，最后边的返回值应用来表示错误，且这个值是一个内置类型 error</li><li>调用函数后，应立即检查是否发生错误 <ul><li>如果没有错误发生，那么返回的错误值为 nil</li></ul></li><li>当错误发生时，函数返回的其它值通常就不再可信</li><li>减少错误处理代码的一种策略是：将程序中不会出错的部分和包含潜在错误隐患的部分隔离开来</li><li>对于不得不返回错误的代码，应尽力简化相应的错误处理代码</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;io/ioutil&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 读取当前目录下的文件，如果没有发生错误，打印当前目录下所有文件的文件名</span>
	files<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadDir</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> file <span class="token operator">:=</span> <span class="token keyword">range</span> files <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义错误类型" tabindex="-1"><a class="header-anchor" href="#自定义错误类型" aria-hidden="true">#</a> 自定义错误类型</h3><p>error 类型是一个内置的接口：任何类型只要实现了返回 string 的 Error() 方法就满足了该接口。 可以创建新的错误类型。</p><p>按照惯例，自定义错误类型的名字应以 Error 结尾，有时候名字就是 Error，例如 url.Error</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// The error built-in interface type is the conventional interface for</span>
<span class="token comment">// representing an error condition, with the nil value representing no error.</span>
<span class="token keyword">type</span> <span class="token builtin">error</span> <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="保持冷静并继续" tabindex="-1"><a class="header-anchor" href="#保持冷静并继续" aria-hidden="true">#</a> 保持冷静并继续</h3><p>为了防止 panic 导致程序崩溃，Go 提供了 recover 函数。</p><p>defer 的动作会在函数返回前执行，即使发生了 panic，但如果 defer 的函数调用了 recover，panic 就会停止，程序将继续运行。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> e <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> e <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token comment">// I forgot my towel</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;I forgot my towel&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defer" tabindex="-1"><a class="header-anchor" href="#defer" aria-hidden="true">#</a> defer</h2><ul><li>defer 关键字，可以确保所有 deferred 的动作可以在函数返回前执行</li><li>可以 defer 任意的函数和方法</li><li>defer 并不是专门做错误处理的</li><li>defer 可以消除必须时刻惦记执行资源释放的负担</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">proverbs</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// 创建名为 name 的文件</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// defer 关键字确保 f.Close() 被调用</span>

	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token string">&quot;Errors are values.&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>

	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token string">&quot;Don&#39;t just check errors, handle them gracefully.&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> err
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	err <span class="token operator">:=</span> <span class="token function">proverbs</span><span class="token punctuation">(</span><span class="token string">&quot;proverbs.txt&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="goroutine" tabindex="-1"><a class="header-anchor" href="#goroutine" aria-hidden="true">#</a> goroutine</h2><ul><li>在 Go 中，独立的任务叫做 goroutine <ul><li>虽然 goroutine 与其它语言中的协程、进程、线程都有相似之处，但 goroutine 和它们并不完全相同</li><li>Goroutine 创建效率非常高</li><li>Go 能直截了当的协同多个并发（concurrent）操作</li></ul></li><li>在某些语言中，将顺序式代码转化为并发式代码需要做大量修改</li><li>在 Go 里，无需修改现有顺序式的代码，就可以通过 goroutine 以并发的方式运行任意数量的任务</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">sleepyGopher</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token comment">// 输出结果无法预测</span>
	<span class="token comment">/**
	...snore...  1
	...snore...  3
	...snore...  2
	...snore...  4
	...snore...  5
	...snore...  0
	*/</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sleepyGopher</span><span class="token punctuation">(</span>id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;...snore... &quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="channel" tabindex="-1"><a class="header-anchor" href="#channel" aria-hidden="true">#</a> channel</h2><ul><li>通道（channel）可以在多个 goroutine 之间安全的传值</li><li>通道可以用作变量、函数参数、结构体字段…</li><li>创建通道用 make 函数，并指定其传输数据的类型 <ul><li><code>c := make(chan int)</code></li></ul></li><li>关闭通道：<code>close(chan)</code></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">sleepyGopher</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		gopherId <span class="token operator">:=</span> <span class="token operator">&lt;-</span>c <span class="token comment">// 从通道接收值</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;gopher &quot;</span><span class="token punctuation">,</span> gopherId<span class="token punctuation">,</span> <span class="token string">&quot; has finished sleeping&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sleepyGopher</span><span class="token punctuation">(</span>id <span class="token builtin">int</span><span class="token punctuation">,</span> c <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;...snore... &quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
	c <span class="token operator">&lt;-</span> id <span class="token comment">// 向通道发送值</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
...snore...  5
gopher  5  has finished sleeping
...snore...  4
gopher  4  has finished sleeping
...snore...  1
gopher  1  has finished sleeping
...snore...  3
gopher  3  has finished sleeping
...snore...  2
gopher  2  has finished sleeping
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="Alt text"></p><h3 id="select-处理通道" tabindex="-1"><a class="header-anchor" href="#select-处理通道" aria-hidden="true">#</a> select 处理通道</h3><ul><li>等待不同类型的值</li><li>select 和 switch 有点像 <ul><li>该语句包含的每个 case 都持有一个通道，用来发送或接收数据</li><li>select 会等待直到某个 case 分支的操作就绪，然后就会执行该 case 分支</li></ul></li><li><strong>注意</strong>：即使已经停止等待 goroutine，但只要 main 函数还没返回，仍在运行的 goroutine 将会继续占用内存</li><li>select 语句在不包含任何 case 的情况下将永远等下去</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;math/rand&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">sleepyGopher</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// time.After 函数，返回一个通道，该通道在指定时间后会接收到一个值</span>
	timeout <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> gopherId <span class="token operator">:=</span> <span class="token operator">&lt;-</span>c<span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;gopher &quot;</span><span class="token punctuation">,</span> gopherId<span class="token punctuation">,</span> <span class="token string">&quot; has finished sleeping&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>timeout<span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;my patience ran out&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/*  运行结果：
		gopher  4  has finished sleeping
		my patience ran out
	*/</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sleepyGopher</span><span class="token punctuation">(</span>id <span class="token builtin">int</span><span class="token punctuation">,</span> c <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	c <span class="token operator">&lt;-</span> id <span class="token comment">// 向通道发送值</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="阻塞和死锁" tabindex="-1"><a class="header-anchor" href="#阻塞和死锁" aria-hidden="true">#</a> 阻塞和死锁</h2><ul><li>当 goroutine 在等待通道的发送或接收时，我们就说它被阻塞了</li><li>除了 goroutine 本身占用少量的内存外，被阻塞的 goroutine 并不消耗任何其它资源 <ul><li>goroutine 静静的停在那里，等待导致其阻塞的事情来解除阻塞</li></ul></li><li>当一个或多个 goroutine 因为某些永远无法发生的事情被阻塞时，我们称这种情况为死锁。而出现死锁的程序通常会崩溃或挂起</li></ul>`,131),v=[k];function m(b,g){return s(),a("div",null,v)}const h=n(d,[["render",m],["__file","base.html.vue"]]);export{h as default};
