import{_ as n,o as s,c as a,e}from"./app-2eca34d6.js";const i={},c=e(`<h2 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理" aria-hidden="true">#</a> 文件管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将该目录下所有文件放入暂存区</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="账户管理" tabindex="-1"><a class="header-anchor" href="#账户管理" aria-hidden="true">#</a> 账户管理</h2><p>配置多个账号：https://blog.csdn.net/q13554515812/article/details/83506172</p>`,6),l=[c];function t(d,r){return s(),a("div",null,l)}const p=n(i,[["render",t],["__file","git.html.vue"]]);export{p as default};
