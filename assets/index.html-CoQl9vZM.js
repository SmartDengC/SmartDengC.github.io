import{_ as d,r as c,o as r,c as o,a as e,b as a,w as t,d as s,e as l}from"./app-BhrpVKwE.js";const p={},h={class:"table-of-contents"},u=l('<p>今天突然发现 hub.docker.com 能够上传镜像了，这里就简单记录一下托管镜像的两种方式。</p><h1 id="hub-docker-com-托管" tabindex="-1"><a class="header-anchor" href="#hub-docker-com-托管"><span>hub.docker.com 托管</span></a></h1><p>这种方式需要能够访问外网 说实话，我都快放弃这种方式了，我都已经想托管到阿里云上面的，但是今天在做反面教材的时候，突然就可以了，真的很苦笑（😂）</p><p>现在我们开始吧！</p><h2 id="_1、hub-docker-com-账号" tabindex="-1"><a class="header-anchor" href="#_1、hub-docker-com-账号"><span>1、hub.docker.com 账号</span></a></h2><p>我们需要有一个 hub.docker.com 的账号，如果没有的话，可以去网站申请一个； 在创建用户名的时候，自己要想一个好点的名字，我这搞了一个 cityhub， 同事看了以为是 citywalk，网上的一个梗。 因为这个用户名会是你镜像信息的一部分，比如<code>cityhubself_ubuntu</code> 这个镜像。</p><h2 id="_2、使用-docker-login-登录" tabindex="-1"><a class="header-anchor" href="#_2、使用-docker-login-登录"><span>2、使用 docker login 登录</span></a></h2>',7),k={href:"https://docs.docker.com/go/access-tokens/",target:"_blank",rel:"noopener noreferrer"},b=l(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">base</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ➜ </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">~</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> docker login -u cityhub</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Password:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Login</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Succeeded</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Logging</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> in with your password grants your terminal complete access to your account.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">For</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> better security, log in with a limited-privilege personal access token. Learn more at https://docs.docker.com/go/access-tokens/</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、创建-docker-仓库" tabindex="-1"><a class="header-anchor" href="#_3、创建-docker-仓库"><span>3、创建 docker 仓库</span></a></h2><p>在 hub.docker.com 界面创建一个仓库，这个仓库名需要后面提交的时候会在用到，我们以<strong>self_ubuntu</strong>为例。</p><p>Repositories -&gt; Create repository（操作路径）</p><h2 id="_4、上传-docker-镜像" tabindex="-1"><a class="header-anchor" href="#_4、上传-docker-镜像"><span>4、上传 docker 镜像</span></a></h2><p>如下是我电脑现在存在的镜像，我们需要将 ubuntu 这个镜像托管上去。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>(base) ➜ ~ docker images</span></span>
<span class="line"><span>REPOSITORY                                               TAG       IMAGE ID       CREATED        SIZE</span></span>
<span class="line"><span>ubuntu                                                   latest    174c8c134b2a   4 weeks ago    77.9MB</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先打一个 tag，就是将镜像复制重名，这里就用到上面的仓库名了 <strong>cityhub/self_ubuntu</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>(base) ➜ ~ docker tag 174c8c134b2a cityhub/self_ubuntu:v0.1.1</span></span>
<span class="line"><span>174c8c134b2a 表示原来镜像的镜像id</span></span>
<span class="line"><span>cityhub/self_ubuntu 是用户名+仓库名 （这个命名方式后面阿里云托管也会用到）</span></span>
<span class="line"><span>v0.1.1是对应版本</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后 docker push 上去</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>(base) ➜ ~ docker push cityhub/self_ubuntu:v0.1.1</span></span>
<span class="line"><span>The push refers to repository [docker.io/cityhub/self_ubuntu]</span></span>
<span class="line"><span>a1360aae5271: Pushed</span></span>
<span class="line"><span>v0.1.1: digest: sha256:f958ac6f7075e036cdd6f4c99fe128955a301bcc5da654cd5b6c088cf1a5ef98 size: 529</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="阿里云托管" tabindex="-1"><a class="header-anchor" href="#阿里云托管"><span>阿里云托管</span></a></h1>`,12),v={href:"https://blog.csdn.net/nuptaxin/article/details/124008353",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.cnblogs.com/pzk7788/p/10180919.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/weixin_44112083/article/details/125131147",target:"_blank",rel:"noopener noreferrer"};function _(f,x){const n=c("router-link"),i=c("ExternalLinkIcon");return r(),o("div",null,[e("nav",h,[e("ul",null,[e("li",null,[a(n,{to:"#_1、hub-docker-com-账号"},{default:t(()=>[s("1、hub.docker.com 账号")]),_:1})]),e("li",null,[a(n,{to:"#_2、使用-docker-login-登录"},{default:t(()=>[s("2、使用 docker login 登录")]),_:1})]),e("li",null,[a(n,{to:"#_3、创建-docker-仓库"},{default:t(()=>[s("3、创建 docker 仓库")]),_:1})]),e("li",null,[a(n,{to:"#_4、上传-docker-镜像"},{default:t(()=>[s("4、上传 docker 镜像")]),_:1})])])]),u,e("p",null,[s("使用 docker login 的时候，可能会提示没有成功，为了安全，使用 personal access token 来登录，参考这个网址 "),e("a",k,[s("access-tokens"),a(i)]),s(" 这个是官网的一个教程，简单明了，就是创建一个 access token，在登录的时候用这个 access-token 来登录，成功登录提示如下，只要有 Login Succeeded 就表示登录成功了。")]),b,e("p",null,[s("这里就因为一个参考文章吧，写的还是很清晰的，按照这个就是可以托管上去。 "),e("a",v,[s("# 阿里云创建 docker 免费个人容器镜像托管(私服)服务"),a(i)])]),e("p",null,[s("这里我简单提几点我的理解。 1、阿里云托管命名空间可以创建 3 个，仓库可以创建 3000 个，一个仓库就对应一个镜像，开始我以为所有的镜像都放到一个里面，这是错误的。 2、docker tag 是什么？如何删除构建出来的 tag 镜像？ "),e("a",g,[s("docker tag 详解"),a(i)]),s(),e("a",m,[s("删除 docker tag 镜像"),a(i)])])])}const A=d(p,[["render",_],["__file","index.html.vue"]]);export{A as default};
