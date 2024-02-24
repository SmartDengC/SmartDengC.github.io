import{_ as r,r as n,o as d,c as a,a as e,d as o,b as t,e as l}from"./app-BhrpVKwE.js";const s={},_=e("p",null,"简单对docker使用过程中一些知识进行整理总结。",-1),i=e("h2",{id:"_1、ubuntu安装dokcer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1、ubuntu安装dokcer"},[e("span",null,"1、ubuntu安装dokcer")])],-1),h=e("p",null,"这里参考大佬在csdn上面的文章，完美安装。",-1),p={href:"https://blog.csdn.net/weixin_50999155/article/details/119581698",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"_2、docker根据容器构建镜像",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2、docker根据容器构建镜像"},[e("span",null,"2、docker根据容器构建镜像")])],-1),k={href:"https://blog.csdn.net/QMW19910301/article/details/88070159",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,[e("code",null,'docker commit -a "cityhub" -m "cityhub_build_image_from_contain" 容器id 镜像名称:版本')],-1),m=e("blockquote",null,[e("p",null,"docker commit : 从容器创建一个新的镜像"),e("p",null,"-a: 提交的镜像作者"),e("p",null,"-c：使用dockerfile指令来创建镜像"),e("p",null,"-m：提交时的说明文字")],-1),f=e("h2",{id:"_3、docker镜像的导入导出",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3、docker镜像的导入导出"},[e("span",null,"3、docker镜像的导入导出")])],-1),g={href:"https://blog.csdn.net/geol200709/article/details/127260420",target:"_blank",rel:"noopener noreferrer"},y=l('<p>如果说镜像比较小的话，我们可以将镜像上传到dockerhub，但是有些情况，像是服务器镜像，经常包比较大；或者说服务器不能够连接到外网，这个时候，就需要将镜像压缩导出来，在其他的服务器上面使用。</p><p>导出：docker save cityhub/mysql5.7:v0.0.1 -o docker_cityhub_mysql.tar</p><p>导入：docker load -i docker_cityhub_mysql.tar</p><p>镜像压缩导入导出</p><p>压缩导出：docker save cityhub/mysql5.7:v0.0.1 | gzip &gt; docker_cityhub_mysql.tar.gz</p><p>压缩导入：gunzip -c docker_cityhub_mysql.tar.gz | docker load</p><h2 id="_4、清除docker的日志" tabindex="-1"><a class="header-anchor" href="#_4、清除docker的日志"><span>4、清除docker的日志</span></a></h2><p><code>cat /dev/null &gt; *-json.log</code></p><p>我们想要从根本上解决docker日志大的问题，我们可以设置容器日志的上限。</p>',9);function x(v,q){const c=n("ExternalLinkIcon");return d(),a("div",null,[_,i,h,e("p",null,[e("a",p,[o("Ubuntu的docker详细安装教程"),t(c)])]),u,e("p",null,[o("参考："),e("a",k,[o("Docker通过容器生成镜像(通过容器提交（docker commit）成镜像)"),t(c)])]),b,m,f,e("p",null,[o("参考： "),e("a",g,[o("docker镜像压缩导入导出"),t(c)])]),y])}const N=r(s,[["render",x],["__file","index.html.vue"]]);export{N as default};