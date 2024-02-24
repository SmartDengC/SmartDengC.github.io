import{_ as s,o as n,c as a,e as i}from"./app-BhrpVKwE.js";const e={},l=i(`<p>我在前一段时间不是用docker创建了一个mysql5.7的容器吗，里面运行这mysql的服务，不知道为什么这个mysql的服务老是挂掉，第一次是在20小时之前，我看也没啥问题，昨天我又给起起来了，今天早上我就说去检查一下，看能不能连的上，结果呢，又在4个小时之前挂掉了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">root@iZ2vc34h4mxsxearc36g2yZ:~#</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker ps -a</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">CONTAINER</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ID   IMAGE              COMMAND                  CREATED      STATUS                   PORTS     NAMES</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">81a924418695</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   cityhub/mysql5.7   </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">docker-entrypoint.s…</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">   2</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> days ago   Exited </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 4</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> hours ago             mysql5.7</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没关系，我又给起起来，想着晚点再看下为什么会掉，起起来之后我连上数据库，我发现我之前建的表不见了， 多个一个新的数据库，我丢，不见了。</p><p>好好好，我看新的数据库是啥，打开一看，感觉我的数据库应该是被盗了，好好好，他给我留了两句话。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>All your data is backed up. You must pay 0.015 BTC to 16w2xEN9pcjFgECWH1LDVpxxxx In 48 hours, your data will be publicly disclosed and deleted. (more information: go to http://iplis.ru/data2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>After paying send mail to us: rambler+2cjzw@onionmail.org and we will provide a link for you to download your data. Your DBCODE is: xxxx</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大概得意思就是：“我的数据库数据已经备份了，我必须向某某某账户支付0.015个比特币，不然的话，在48小时之后我的数据会被公开或者删除，更多信息访问这个http://iplis.ru/data2 网站。付款后给rambler+2cjzw@onionmail.org这个邮箱发邮件，给我提供下载的数据的连接。”</p><p><img src="https://gitee.com/jet5devil/typora-picture/raw/master/mac_img/202402231158878.png" alt="image-20240223115813845"></p><p>好好好，恢复数据要我5K多，可以，还是很有意思的，让我得空研究一下这玩意。</p><p>打开上面的网站还挺礼貌地，害怕我没有比特币，一点点给我说怎么弄，一点都不提盗我数据库里面数据的行为。😅</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>You can contact us if you are having problems paying with crypto, discuss other crypto payment methods, etc. we will answer promptly. </span></span>
<span class="line"><span>If you already sent the payment then contact us with the transaction ID or payment screenshot. We will check as soon as possible </span></span>
<span class="line"><span>send you a link for you to download the entire database and delete our copy.  </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>The only payment method is using crypto. Bitcoin is the easiest but we can accept any other crypto. </span></span>
<span class="line"><span>ONLY CRYPTO, no Paypal, no Alipay, etc.</span></span>
<span class="line"><span>If you don&#39;t have Bitcoin, you can purchase it using a credit card from the following websites:</span></span>
<span class="line"><span>MoonPay: https://www.moonpay.com/buy</span></span>
<span class="line"><span>Paybis: https://paybis.com/</span></span>
<span class="line"><span>Changelly: https://changelly.com/buy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You can buy BTC with a credit card, bank transfer, Google Pay or Apple pay easily in:</span></span>
<span class="line"><span>https://guardarian.com</span></span>
<span class="line"><span>https://simpleswap.io or https://www.moonpay.com/buy</span></span>
<span class="line"><span>https://buy.simplex.com</span></span>
<span class="line"><span>https://https://global.transak.com/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Alternatively, you can buy Bitcoin using other payment methods from the following platforms (some of them work in China):</span></span>
<span class="line"><span>Paxful: https://paxful.com/</span></span>
<span class="line"><span>Binance: https://www.binance.com/</span></span>
<span class="line"><span>Crypto.com: https://www.crypto.com/</span></span>
<span class="line"><span>Huobi: https://www.huobi.com/</span></span>
<span class="line"><span>OKCoin: https://www.okcoin.com/</span></span>
<span class="line"><span>BTCC: https://www.btcc.com/</span></span>
<span class="line"><span>Paybis: https://paybis.com/</span></span>
<span class="line"><span>Coinmama: https://coinmama.com/</span></span>
<span class="line"><span>Bitfinex: https://www.bitfinex.com/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For users in China, Bitcoin can be purchased with Alipay from:</span></span>
<span class="line"><span>CoinCola: https://www.coincola.com/?lang=zh-HK</span></span>
<span class="line"><span>BitValve: https://www.bitvalve.com/buy-bitcoin/alipay</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Please take note of the following:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We are aware that you have accessed this guide.</span></span>
<span class="line"><span>THE ONLY WAY TO RECOVER YOUR DATA IS BY MAKING THE PAYMENT. WE WILL NOT PROVIDE THE DATA FOR FREE OR AT A DISCOUNT.</span></span>
<span class="line"><span>If you decide not to retrieve the data, we may sell your database in online markets, disclose it to your users </span></span>
<span class="line"><span>and request payment from them, disclose it in online breach forums, or delete it.</span></span>
<span class="line"><span>We will contact the GDPR authorities in your country if applicable.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>If you cannot contact us, please visit https://getsession.org/ and download the Session Messenger. </span></span>
<span class="line"><span>Add us using the following ID for a fluid conversation and better negotiation, </span></span>
<span class="line"><span>*** Don&#39;t forget to mention the DBCODE that was assigned to you***:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>05a5ba6491a15908207cce6e257b3316cd11cb2575f75194d3c59c37de68eaf55a</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[l];function t(c,d){return n(),a("div",null,p)}const r=s(e,[["render",t],["__file","index.html.vue"]]);export{r as default};
