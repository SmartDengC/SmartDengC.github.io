import{_ as e,o as i,c as s,e as t}from"./app-BhrpVKwE.js";const n={},a=t(`<p>有的时候我们不想要将某些文件提交到 github 上面，这个时候我们该怎么办了？ 我们可以创建.gitignore 文件， 然后把不想要提交的文件写到这个文件里面。</p><p>但是有时候你会发现，我明明都在这个文件里面定义了不提交的文件或者是目录，但是最后还是提交上去了，这是为什么呢？</p><p>那是因为.gitignore 只能忽略那些原来没有被 track 的文件， 如果某些文件已经被纳入到了版本管理中，则修改.gitignore 是无效的。解决方法就是先把本地缓存删掉（改变成未 track 状态），然后在提交。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>git rm -r --cache .   // . 表示所有的文件，如果需要指定某一个文件，这里可以写上文件名</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m &#39;update .gitignore&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：不要误解了.gitignore 文件的用途，该文件只能作用于 Untracked Files， 也就是那些从来没有被 git 记录过的文件（自添加以后，从未 add 及 commit 过的文件）。如果文件曾经被 git 记录过，那么.gitignore 就对他们完全无效</p>`,5),c=[a];function d(r,l){return i(),s("div",null,c)}const p=e(n,[["render",d],["__file","index.html.vue"]]);export{p as default};
