import{_ as n,r as t,o as h,c as d,a as s,b as a,w as l,d as e,e as p}from"./app-BhrpVKwE.js";const k={},r={class:"table-of-contents"},c=p(`<h2 id="本地安装-lua-运行环境" tabindex="-1"><a class="header-anchor" href="#本地安装-lua-运行环境"><span>本地安装 lua 运行环境</span></a></h2><p>我们学习使用 lua 需要有 lua 的运行环境，我看 b 站视频里面，说是可以在 luatos 网页里执行代码，我这里暂时没有打开，就尝试在本地安装一个，也不是很难。</p><p>我们可以从官网中可以找到 lua 安装的方式:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -L</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -R</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -O</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://www.lua.org/ftp/lua-5.4.6.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">tar</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> zxf lua-5.4.6.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> lua-5.4.6</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">make</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> all test</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">make</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> all install</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果<code>make all test</code>出现权限不匹配的话， 可以使用 sudo 来执行. 执行完之后，我们 lua -a 检查一下是否安装成功</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">base</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ➜ lua-5.4.6 lua -v</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Lua</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 5.4</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.6  Copyright </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">C</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1994</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-2023 Lua.org, PUC-Rio</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lua-语法" tabindex="-1"><a class="header-anchor" href="#lua-语法"><span>lua 语法</span></a></h2><hr>`,8);function u(o,g){const i=t("router-link");return h(),d("div",null,[s("nav",r,[s("ul",null,[s("li",null,[a(i,{to:"#本地安装-lua-运行环境"},{default:l(()=>[e("本地安装 lua 运行环境")]),_:1})]),s("li",null,[a(i,{to:"#lua-语法"},{default:l(()=>[e("lua 语法")]),_:1})])])]),c])}const A=n(k,[["render",u],["__file","index.html.vue"]]);export{A as default};
