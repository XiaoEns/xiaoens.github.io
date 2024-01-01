import{_ as n,o as s,c as a,e as t}from"./app-2eca34d6.js";const p="/assets/image-e4ad2f46.png",e={},o=t(`<h2 id="连接数据库" tabindex="-1"><a class="header-anchor" href="#连接数据库" aria-hidden="true">#</a> 连接数据库</h2><ol><li><p>下载目标数据库驱动<br><code>go get github.com/go-sql-driver/mysql</code></p></li><li><p>注册驱动<br><code>import _ &quot;github.com/go-sql-driver/mysql&quot;</code><br> 这种方式引入驱动包时，会进行自我注册，执行init方法。正常做法是使用 sql.Register() 函数、数据库驱动的名称和一个实现了 driver.Driver 接口的 struct 来注册数据库的驱动</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// driver.go</span>
<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 	sql<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span><span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>MySQLDriver<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>打开连接sql.Open()</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 连接配置，不同的数据库的配置不同，这里是mysql的配置</span>
connStr <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%s:%s@tcp(%s:%s)/%s?charset=utf8&amp;parseTime=True&amp;loc=Local&quot;</span><span class="token punctuation">,</span>
 user<span class="token punctuation">,</span> password<span class="token punctuation">,</span> server<span class="token punctuation">,</span> port<span class="token punctuation">,</span> database<span class="token punctuation">)</span>

<span class="token comment">// 打开连接</span>
<span class="token keyword">var</span> err <span class="token builtin">error</span>
db<span class="token punctuation">,</span> err <span class="token operator">=</span> sql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span> connStr<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：sql.Open()得到一个指向sql.DB这个struct的指针sql.DB是用来操作数据库的，它代表了0个或者多个底层连接的池，这些连接由sql包来维护，sql 包会自动的创建和释放这些连接</p><ul><li>它对于多个goroutine并发的使用是安全的</li><li>Open()函数并不会连接数据库，甚至不会验证其参数，它只是把后续连接到数据库所必需的structs给设置好了，而真正的连接是在被需要的时候才进行懒设置的</li><li>sqI.DB不需要进行关闭(当然你想关闭也是可以的)，它就是用来处理数据库的，而不是实际的连接，这个抽象包含了数据库连接的池，而且会对此进行维护</li><li>在使用sql.DB的时候，可以定义它的全局变量进行使用，也可以将它传递函数/方法里</li></ul></li><li><p>测试连接是否有效</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 验证与数据库的连接是否有效</span>
ctx <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
err <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">PingContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="操作数据库" tabindex="-1"><a class="header-anchor" href="#操作数据库" aria-hidden="true">#</a> 操作数据库</h2><p>目录结构 <img src="`+p+`" alt="Alt text"></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;database/sql&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>

	<span class="token boolean">_</span> <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> db <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	server   <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1&quot;</span>
	port     <span class="token operator">=</span> <span class="token string">&quot;3306&quot;</span>
	user     <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span>
	password <span class="token operator">=</span> <span class="token string">&quot;123456&quot;</span>
	database <span class="token operator">=</span> <span class="token string">&quot;demo&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 连接配置，不同的数据库的配置不同，这里是mysql的配置</span>
	connStr <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%s:%s@tcp(%s:%s)/%s?charset=utf8&amp;parseTime=True&amp;loc=Local&quot;</span><span class="token punctuation">,</span>
		user<span class="token punctuation">,</span> password<span class="token punctuation">,</span> server<span class="token punctuation">,</span> port<span class="token punctuation">,</span> database<span class="token punctuation">)</span>

	<span class="token comment">// 打开连接</span>
	<span class="token keyword">var</span> err <span class="token builtin">error</span>
	db<span class="token punctuation">,</span> err <span class="token operator">=</span> sql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span> connStr<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 验证与数据库的连接是否有效</span>
	ctx <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	err <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">PingContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Connected!&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// 插入数据</span>
	<span class="token comment">//user1 := userInfo{name: &quot;王五&quot;, age: 20}</span>
	<span class="token comment">//insertUserInfo(user1)</span>

	<span class="token comment">// 查询单行数据</span>
	<span class="token comment">//u := queryRow(1)</span>
	<span class="token comment">//fmt.Println(u)</span>

	<span class="token comment">// 查询多行数据</span>
	<span class="token comment">//us := queryRows(0)</span>
	<span class="token comment">//for _, u := range us {</span>
	<span class="token comment">//	fmt.Println(u)</span>
	<span class="token comment">//}</span>

	<span class="token comment">// 修改数据</span>
	<span class="token comment">//u := userInfo{id: 3, name: &quot;王二狗&quot;, age: 20}</span>
	<span class="token comment">//updateUserInfo(u)</span>
	<span class="token comment">//u = queryRow(u.id)</span>
	<span class="token comment">//fmt.Println(u)</span>

	<span class="token comment">// 删除数据</span>
	<span class="token function">deleteUserInf</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// models.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">type</span> userInfo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	id   <span class="token builtin">int</span>
	age  <span class="token builtin">int</span>
	name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// service.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// 查询单行数据 by id</span>
<span class="token keyword">func</span> <span class="token function">queryRow</span><span class="token punctuation">(</span>id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>u userInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 查询的SQL语句</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;select * from user where id = ?&quot;</span>

	<span class="token comment">// 声明userInfo变量，用来接收查询的数据</span>
	err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">QueryRow</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>u<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;query failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span> u
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> u
<span class="token punctuation">}</span>

<span class="token comment">// 查询多行数据 by id</span>
<span class="token keyword">func</span> <span class="token function">queryRows</span><span class="token punctuation">(</span>id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>us <span class="token punctuation">[</span><span class="token punctuation">]</span>userInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 查询的SQL语句</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;select * from user where id &gt; ?&quot;</span>
	rows<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> id<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;query failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span> us
	<span class="token punctuation">}</span>

	<span class="token comment">// 关闭rows持有的数据库链接</span>
	<span class="token keyword">defer</span> rows<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 读取rows中的数据</span>
	<span class="token keyword">for</span> rows<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> u userInfo
		err <span class="token operator">:=</span> rows<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>u<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;scan rows failed, err:&amp;v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token keyword">return</span> us
		<span class="token punctuation">}</span>
		us <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>us<span class="token punctuation">,</span> u<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// 插入数据</span>
<span class="token keyword">func</span> <span class="token function">insertUserInfo</span><span class="token punctuation">(</span>user userInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 插入的SQL语句</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;insert into user(name, age) values(?, ?)&quot;</span>

	<span class="token comment">// 执行SQL语句</span>
	result<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> user<span class="token punctuation">.</span>name<span class="token punctuation">,</span> user<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;insert failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 获取插入后的ID</span>
	userId<span class="token punctuation">,</span> err <span class="token operator">:=</span> result<span class="token punctuation">.</span><span class="token function">LastInsertId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;insert failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;insert success, the is id %d\\n&quot;</span><span class="token punctuation">,</span> userId<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 修改数据</span>
<span class="token keyword">func</span> <span class="token function">updateUserInfo</span><span class="token punctuation">(</span>user userInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 修改的SQL语句</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;update user set name=?, age=? where id = ?&quot;</span>

	<span class="token comment">// 执行SQL语句</span>
	result<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> user<span class="token punctuation">.</span>name<span class="token punctuation">,</span> user<span class="token punctuation">.</span>age<span class="token punctuation">,</span> user<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;update failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 获取影响的行数</span>
	affected<span class="token punctuation">,</span> err <span class="token operator">:=</span> result<span class="token punctuation">.</span><span class="token function">RowsAffected</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;get RowsAffected failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;RowsAffected %d\\n&quot;</span><span class="token punctuation">,</span> affected<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 删除数据</span>
<span class="token keyword">func</span> <span class="token function">deleteUserInf</span><span class="token punctuation">(</span>id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 删除的SQL语句</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;delete from user where id = ?&quot;</span>

	<span class="token comment">// 执行SQL语句</span>
	result<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> id<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;delete userInfo failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 获取影响的行数</span>
	affected<span class="token punctuation">,</span> err <span class="token operator">:=</span> result<span class="token punctuation">.</span><span class="token function">RowsAffected</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;get RowsAffected failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;RowsAffected %d\\n&quot;</span><span class="token punctuation">,</span> affected<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预处理" tabindex="-1"><a class="header-anchor" href="#预处理" aria-hidden="true">#</a> 预处理</h2><p>使用<code>database/sql</code>中下面的<code>Prepare(query string)</code>来实现预处理操作</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// PrepareContext.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>db <span class="token operator">*</span>DB<span class="token punctuation">)</span> <span class="token function">Prepare</span><span class="token punctuation">(</span>query <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Stmt<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> db<span class="token punctuation">.</span><span class="token function">PrepareContext</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> query<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Prepare方法会先将sql语句发送给MySQL服务端，返回一个准备好的状态用于之后的查询和命令。返回值可以同时执行多个查询和命令。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 预处理，防止SQL注入</span>
<span class="token keyword">func</span> <span class="token function">prepareQueryRows</span><span class="token punctuation">(</span>id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>us <span class="token punctuation">[</span><span class="token punctuation">]</span>userInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 查询的SQL语句</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;select * from user where id &gt; ?&quot;</span>

	<span class="token comment">// 进行预处理</span>
	prepare<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Prepare</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;prepare failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span> us
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> prepare<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	rows<span class="token punctuation">,</span> err <span class="token operator">:=</span> prepare<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;query failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span> us
	<span class="token punctuation">}</span>

	<span class="token comment">// 关闭rows持有的数据库链接</span>
	<span class="token keyword">defer</span> rows<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 读取rows中的数据</span>
	<span class="token keyword">for</span> rows<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> u userInfo
		err <span class="token operator">:=</span> rows<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>u<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;scan rows failed, err:&amp;v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token keyword">return</span> us
		<span class="token punctuation">}</span>
		us <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>us<span class="token punctuation">,</span> u<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增删改的操作和上面类似</p><h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2><p>相关方法</p><ul><li>开启事务：<code>func (db *DB) Begin() (*Tx, error)</code></li><li>提交事务：<code>func (tx *Tx) Commit() error</code></li><li>回滚事务：<code>func (tx *Tx) Rollback() error</code></li></ul><p>下面是是一个事务示例，同时修改两个user的age，确保要么同时成功，要么同时失败</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// main.go</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	user1 <span class="token operator">:=</span> userInfo<span class="token punctuation">{</span>id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">&quot;张一&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">44</span><span class="token punctuation">}</span>
	user2 <span class="token operator">:=</span> userInfo<span class="token punctuation">{</span>id<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">&quot;王二&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">66</span><span class="token punctuation">}</span>
	us <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>userInfo<span class="token punctuation">{</span>user1<span class="token punctuation">,</span> user2<span class="token punctuation">}</span>
	<span class="token function">transactionDemo</span><span class="token punctuation">(</span>us<span class="token punctuation">)</span>

	us <span class="token operator">=</span> <span class="token function">queryRows</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> u <span class="token operator">:=</span> <span class="token keyword">range</span> us <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// server.go</span>
<span class="token keyword">func</span> <span class="token function">transactionDemo</span><span class="token punctuation">(</span>us <span class="token punctuation">[</span><span class="token punctuation">]</span>userInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 开启事务</span>
	trans<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token comment">// 手动回滚事务</span>
		<span class="token keyword">if</span> trans <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			trans<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;begin transaction failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// SQL预处理</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;update user set name = ?, age = ? where id = ?&quot;</span>
	prepare<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Prepare</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;prepare failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token comment">// 手动回滚事务</span>
		<span class="token keyword">if</span> trans <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			trans<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> prepare<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> user <span class="token operator">:=</span> <span class="token keyword">range</span> us <span class="token punctuation">{</span>
		<span class="token comment">// 执行SQL语句</span>
		<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> prepare<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">,</span> user<span class="token punctuation">.</span>age<span class="token punctuation">,</span> user<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;update failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token comment">// 如果执行失败，手动回滚事务</span>
			<span class="token keyword">if</span> trans <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				trans<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 提交事务</span>
	trans<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;update success&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[o];function i(l,u){return s(),a("div",null,c)}const k=n(e,[["render",i],["__file","go-mysql.html.vue"]]);export{k as default};
