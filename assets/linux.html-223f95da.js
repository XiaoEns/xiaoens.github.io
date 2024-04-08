import{_ as i,r as t,o as c,c as d,a as n,b as a,d as e,e as l}from"./app-52052bff.js";const r={},o=n("p",null,"常用网站：",-1),p={href:"https://www.runoob.com/linux/linux-tutorial.html",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙" aria-hidden="true">#</a> 防火墙</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Centos</span>
<span class="token comment"># 查看防火墙状态</span>
systemctl status firewalld
<span class="token comment"># 开启防火墙</span>
systemctl start firewalld
<span class="token comment"># 关闭防火墙</span>
systemctl stop firewalld
<span class="token comment"># 重启防火墙</span>
systemctl restart firewalld
<span class="token comment"># 查看所有打开的端口</span>
firewall-cmd --list-all
<span class="token comment"># 开放指定端口</span>
firewall-cmd --add-port<span class="token operator">=</span>端口号/tcp <span class="token parameter variable">--permanent</span>
<span class="token comment"># 更新防火墙规则</span>
firewall-cmd <span class="token parameter variable">--reolaod</span>
<span class="token comment"># 关闭指定端口</span>
firewall-cmd --remove-port<span class="token operator">=</span>端口号/tcp <span class="token parameter variable">--permanent</span>

<span class="token comment">#---------------------------------------------------#</span>

<span class="token comment"># Ubuntu</span>
<span class="token comment"># 查看防火墙状态</span>
<span class="token function">sudo</span> ufw status
<span class="token comment"># 开启防火墙</span>
<span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span>
<span class="token comment"># 关闭防火墙</span>
<span class="token function">sudo</span> ufw disable
<span class="token comment"># 重启防火墙</span>
<span class="token function">sudo</span> ufw reload
<span class="token comment"># 开放指定端口</span>
<span class="token function">sudo</span> ufw allow <span class="token number">80</span>/tcp
<span class="token comment"># 关闭指定端口</span>
<span class="token function">sudo</span> ufw delete allow <span class="token number">80</span>/tcp
<span class="token comment"># 批量开放端口</span>
<span class="token function">sudo</span> ufw allow <span class="token number">1</span>:9000/tcp
<span class="token comment"># 批量关闭端口</span>
<span class="token function">sudo</span> ufw delete allow <span class="token number">1</span>:9000/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mv" tabindex="-1"><a class="header-anchor" href="#mv" aria-hidden="true">#</a> mv</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将a文件夹下面的 t.java 移动到b文件夹下面</span>
<span class="token function">mv</span> a/t.java b/
<span class="token comment"># 将a文件夹下面的 t.java 移动到b文件夹下面，并改名为a.java</span>
<span class="token function">mv</span> a/t.java b/a.java
<span class="token comment"># 将当前目录下面的t.java 改名成 a.java</span>
<span class="token function">mv</span> t.java a.java
<span class="token comment"># 将a目录下的所有文件移动到b文件夹下面</span>
<span class="token function">mv</span> a/* b/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tar" tabindex="-1"><a class="header-anchor" href="#tar" aria-hidden="true">#</a> tar</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 压缩文件</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> 压缩文件名.tar
<span class="token comment"># 解压文件</span>
<span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> 压缩文件名.tar file1 file2 directory

<span class="token comment"># -z：表示使用gzip压缩算法</span>
<span class="token comment"># -x: 表示解打包文件</span>
<span class="token comment"># -c: 表示打包文件</span>
<span class="token comment"># -v: 显示压缩/解压过程中正在处理的文件名显示出来</span>
<span class="token comment"># -f filename: 需要处理的文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> ps</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前运行的进程信息</span>
<span class="token function">ps</span> <span class="token parameter variable">-e</span> :以树状结构显示进程，显示进程的层级关系
<span class="token function">ps</span> <span class="token parameter variable">-f</span> :显示指定进程的完整，包括父进程ID,CPU使用情况等
<span class="token function">ps</span> <span class="token parameter variable">-u</span> 用户名：显示指定用户的进程信息
<span class="token function">ps</span> <span class="token parameter variable">-p</span> :显示指定进程ID的进程信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="top" tabindex="-1"><a class="header-anchor" href="#top" aria-hidden="true">#</a> top</h3>`,10),v={href:"https://blog.csdn.net/weixin_45465395/article/details/115728520",target:"_blank",rel:"noopener noreferrer"},u=l('<h2 id="程序部署-运行" tabindex="-1"><a class="header-anchor" href="#程序部署-运行" aria-hidden="true">#</a> 程序部署 &amp; 运行</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><ul><li><code>java -jar xxx.jar</code>：运行程序，占用当前窗口，窗口关闭时程序<strong>终止</strong></li><li><code>java -jar xxx.jar &amp;</code>：后台运行程序，不占用当前窗口，窗口关闭时程序<strong>终止</strong></li><li><code>nohup java -jar xxx.jar &amp;</code>：后台运行程序，不占用当前窗口，窗口关闭时程序<strong>不终止</strong></li><li><code>nohup java -jar xxx.jar &gt; log.txt &amp;</code>：后台运行程序，不占用当前窗口，且窗口关闭时程序<strong>不终止</strong>，并且将打印信息保存到log.txt中</li><li><code>tail -f log.txt</code>: 在后台实时打印日志内容</li><li><code>jps</code><ul><li>-l:显示当前正在运行的Java进程的PID和完整的进程类名</li><li>-v:显示传递给JVM的参数</li></ul></li></ul>',3);function b(h,k){const s=t("ExternalLinkIcon");return c(),d("div",null,[o,n("ul",null,[n("li",null,[n("a",p,[a("https://www.runoob.com/linux/linux-tutorial.html"),e(s)])])]),m,n("p",null,[a("实时监控系统性能的工具 "),n("a",v,[a("https://blog.csdn.net/weixin_45465395/article/details/115728520"),e(s)])]),u])}const x=i(r,[["render",b],["__file","linux.html.vue"]]);export{x as default};
