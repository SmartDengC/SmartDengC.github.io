import{_ as e,r as a,o as n,c as d,a as s,d as l,b as h,e as t}from"./app-BhrpVKwE.js";const r={},p=t(`<p>今天阿里云给我推送了一条消息，说是有优惠，然后我就购买了一台便宜的服务器，正好也有这个计划，就购买了。</p><p>现在就是简单的构建。</p><p>首先需要做的就是创建一个自己使用的角色，平常用 root 来没啥问题，我们还是正规一点，当做线上服务器来用，创建一个用户，那我们开始吧。</p><h2 id="_1、创建新用户" tabindex="-1"><a class="header-anchor" href="#_1、创建新用户"><span>1、创建新用户</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">root@iZ2vc34h4mxsxearc36g2yZ:~#</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sudo useradd -r -m -s /bin/bash dengc4r</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中参数的意义如下：</p><ul><li>-r 建立系统账号</li><li>-m 自动建立用户的登入目录</li><li>-s 指定用户登入后所使用的 shell</li></ul><p>这个时候我们<code>ls /home</code> 就可以看到创建的用户目录了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">root@iZ2vc34h4mxsxearc36g2yZ:~#</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ls /home/</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dengc4r</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、在-ubuntu18-04-中不会在创建用户的时候自动提示设置密码-需要手动执行" tabindex="-1"><a class="header-anchor" href="#_2、在-ubuntu18-04-中不会在创建用户的时候自动提示设置密码-需要手动执行"><span>2、在 ubuntu18.04 中不会在创建用户的时候自动提示设置密码，需要手动执行</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">root@iZ2vc34h4mxsxearc36g2yZ:~#</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sudo passwd dengc4r</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Enter</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> new UNIX password:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Retype</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> new UNIX password:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">passwd:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> password updated successfully</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、修改用户权限-添加-root-权限" tabindex="-1"><a class="header-anchor" href="#_3、修改用户权限-添加-root-权限"><span>3、修改用户权限（添加 root 权限）</span></a></h2><p>这里采取修改<code>/etc/sudoers</code>文件的方式来分配用户权限，因为文件只有只读权限，在改动之前我们需要增加修改权限，改动之后，在去掉修改权限</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">root@iZ2vc34h4mxsxearc36g2yZ:~#</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sudo chmod +w /etc/sudoers</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">root@iZ2vc34h4mxsxearc36g2yZ:~#</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vim /etc/sudoers</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">root@iZ2vc34h4mxsxearc36g2yZ:~#</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sudo chmod -w /etc/sudoers</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改成如下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># User privilege specification</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">root</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    ALL=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ALL:ALL</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">) ALL</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dengc4r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ALL=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ALL:ALL</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">) ALL</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候我们的用户就创建成功了。</p><h2 id="_4、增加用户到某个用户组里-可选" tabindex="-1"><a class="header-anchor" href="#_4、增加用户到某个用户组里-可选"><span>4、增加用户到某个用户组里（可选）</span></a></h2><p>在创建完用户之后，系统会默认创建一个和用户名一样额用户组，这里我想新建用户组，然后将用户添加进来。</p><h3 id="新建用户组" tabindex="-1"><a class="header-anchor" href="#新建用户组"><span>新建用户组</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">root@iZ2vc34h4mxsxearc36g2yZ:~#</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> groupadd self  // self为用户组名</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加用户到用户组" tabindex="-1"><a class="header-anchor" href="#添加用户到用户组"><span>添加用户到用户组</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">root@iZ2vc34h4mxsxearc36g2yZ:~#</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> usermod -g self dengc4r  // dengc4r为用户名</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个时候我们用<code>id dengc4r</code>就可以看到用户的信息。uid 为用户 id， groups 表示用户组的 id</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>uid=999(dengc4r) gid=1000(self) groups=1000(self)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5、补充" tabindex="-1"><a class="header-anchor" href="#_5、补充"><span>5、补充</span></a></h2><p>1、 这里额外说一个点，就是<code>su dengc4r</code> 和<code>su - dengc4r</code>之间有什么区别，区别就是使用<code>su - dengc4r</code>会默认进入到当前用户的家目录，如果不带 <code>- </code>的话默认是进入到<code>/root</code>目录</p><p>2、查看存在的用户组</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dengc4r@iZ2vc34h4mxsxearc36g2yZ:~$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cat /etc/group</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dengc4r:x:999:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">self:x:1000:</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、查看用户信息</p><p>dengc4r 为用户名， x 表示密码，999 表示用户 id， 1000 表示用户组 id，<code>/home/dengc4r</code>是用户 home 目录， <code>/bin/bash</code>是 shell 命令所在的目录</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dengc4r@iZ2vc34h4mxsxearc36g2yZ:~$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cat /etc/passwd </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dengc4r</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dengc4r:x:999:1000::/home/dengc4r:/bin/bash</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参考：</p>`,33),c={href:"https://blog.csdn.net/BigData_Mining/article/details/104986203",target:"_blank",rel:"noopener noreferrer"};function k(o,v){const i=a("ExternalLinkIcon");return n(),d("div",null,[p,s("p",null,[s("a",c,[l("ubuntu 下添加新用户（详细教程）"),h(i)])])])}const u=e(r,[["render",k],["__file","index.html.vue"]]);export{u as default};
