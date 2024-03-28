import{_ as n,o as s,c as a,e}from"./app-4259075f.js";const i={},t=e(`<h2 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理" aria-hidden="true">#</a> 文件管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将该目录下所有文件放入暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 将已经放入暂存区文件回退到工作区</span>
<span class="token function">git</span> reset -- 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理" aria-hidden="true">#</a> 分支管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有分支，包括远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment"># 创建分支并切换到新的分支上</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> 新分支名

<span class="token comment"># 删除本地分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> 分支名

<span class="token comment"># 新建远程分支, 如果远程没有该分支，则创建一个</span>
<span class="token function">git</span> push origin 本地分支:远程分支

<span class="token comment"># 删除远程分支</span>
<span class="token comment"># 方式一，指定需要删除的远程分支</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> 分支名
<span class="token comment"># 方式二，推送一个空分支，也相当于删除远程分支</span>
<span class="token function">git</span> push origin :分支名

<span class="token comment"># 关联分支</span>
<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/远程分支 本地分支

<span class="token comment"># 回退分支</span>
<span class="token function">git</span> reset HEAD^           <span class="token comment"># 回退到上一个版本，暂存区中的内容被重置，工作区保持不变</span>
<span class="token function">git</span> reset HEAD^ xx.file   <span class="token comment"># 回退某一个文件到上一个版本</span>
<span class="token function">git</span> reset commitID        <span class="token comment"># 回退到指定版本 </span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> commitID <span class="token comment"># 回退到指定版本，暂存区，工作区不会被重置</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> commitID <span class="token comment"># 撤销工作区中未提交的修改内容，将暂存区和工作区的内容都回退到指定版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓库管理" tabindex="-1"><a class="header-anchor" href="#仓库管理" aria-hidden="true">#</a> 仓库管理</h2><p>如果远程仓库没有文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init            <span class="token comment"># 初始化git仓库</span>
<span class="token function">git</span> remote <span class="token function">add</span> 地址 <span class="token comment"># 设置remote地址</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>           <span class="token comment"># 将所有变更提交到本地仓库</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;&quot;</span>    <span class="token comment"># 提交注释</span>
<span class="token function">git</span> push            <span class="token comment"># 本地仓库推送到远程仓库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果远程仓库有文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init               <span class="token comment"># 初始化git仓库</span>
<span class="token function">git</span> remote <span class="token function">add</span> 地址    <span class="token comment"># 设置remote地址</span>
<span class="token function">git</span> pull origin master <span class="token comment"># 拉取远程仓库master的文件</span>
<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/master master <span class="token comment"># 将本地master与远程master分支关联</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>              <span class="token comment"># 将所有变更提交到本地仓库</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;&quot;</span>       <span class="token comment"># 提交注释</span>
<span class="token function">git</span> push               <span class="token comment"># 本地仓库推送到远程仓库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh-keygen" tabindex="-1"><a class="header-anchor" href="#ssh-keygen" aria-hidden="true">#</a> ssh-keygen</h2><p>通过 https 克隆的项目，在 push 时需要输入用户名和密码</p><p>通过 ssh 克隆的项目，在 push 时不需要输入用户名和密码，但是需要提前配置 ssh key</p><p>在ssh目录（C:\\Users\\32194.ssh）下打开 cmd 窗口操作</p><ol><li>创建ssh key：<code>ssh-keygen -t rsa -C &quot;your_email -f &quot;id_ras_test&quot;</code><ol><li>-t: 指定密钥类型，默认是 rsa, 可以省略</li><li>-C: 设置注释文字，比如邮箱</li></ol></li><li>输入文件名，保存生成的 ssh key,默认的是id_rsa 和 id_rsa.pub</li><li>需要输入密码，可以不输入，那么 push 的时候不需要输入密码</li><li>生成对应的文件后，需要将生成的 .pub 文件内容添加到github/gitee中</li><li>测试：<code>ssh -T git@github.com</code></li></ol><h2 id="账户管理" tabindex="-1"><a class="header-anchor" href="#账户管理" aria-hidden="true">#</a> 账户管理</h2><p>配置多个账号：https://blog.csdn.net/q13554515812/article/details/83506172</p>`,16),c=[t];function l(o,p){return s(),a("div",null,c)}const r=n(i,[["render",l],["__file","git.html.vue"]]);export{r as default};
