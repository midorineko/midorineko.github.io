var IDRViewer=function(){var u={View:{MultiFile:0,SplitSpreads:1,SingleFile:2,IDR:3}},p=1,v=0,w=0,c=0,k=0,la=0,g,m,n,r,aa=[],ba,y,ia=!0,ta,D,l=u.View,P=l.MultiFile,z,B,Q,H,ca,ua,R,M,ma,na,E,S,va,wa,xa,ya,da,F,ea,T,fa,za,Aa,Ba,G={},q;u.makeNavBar=function(a,d,b,c){ba=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);/iPhone|iPad|iPod/i.test(navigator.userAgent);D=!c;q=b;m=h("contentContainer");n=h("mainContent");k=a;h("pgCount").innerHTML="/"+k;z=h("goBtn");
B=h("zoomBtn");Q=h("btnFullscreen");H=h("btnOutlines");ca=h("btnThumbnails");ua=h("btnPrev");h("btnNext");R=h("btnMove");M=h("btnSelect");ma=h("btnZoomIn");na=h("btnZoomOut");F=0;ea=1;S=0;va=1;wa=2;xa=3;ya=4;y=da=5;g=h("jpedal");U.setup(q,d);document.fullscreenEnabled||document.msFullscreenEnabled||document.mozFullScreenEnabled||document.webkitFullscreenEnabled?(V("fullscreenchange",document,ja),V("MSFullscreenChange",document,ja),V("mozfullscreenchange",document,ja),V("webkitfullscreenchange",document,
ja)):Q.parentNode.removeChild(Q);this.setSelectMode(F);a=Ea("page");a=""!=a?parseInt(a):1;for(d=0;d<k;d++)if(b[d][0]!=b[0][0]||b[d][1]!=b[0][1]){ia=!1;break}ba?(B.parentNode.removeChild(B),R.parentNode.removeChild(R),M.parentNode.removeChild(M),ma.parentNode.removeChild(ma),na.parentNode.removeChild(na),n.style.overflow="hidden",W.setup(a),b=function(){setTimeout(function(){W.handleResize()},300)},window.onorientationchange=b,window.onresize=b):(ia&&!ta&&1<k&&(E=document.createElement("select"),E.id=
"viewBtn",b=document.createElement("option"),b.innerHTML="Single Pages",E.appendChild(b),b=document.createElement("option"),b.innerHTML="Magazine",E.appendChild(b),b=document.createElement("option"),b.innerHTML="Continuous",E.appendChild(b),E.onchange=Fa,h("mainNav").appendChild(E),E.selectedIndex=P),G.setViewMode(P),ia&&P===l.SplitSpreads?X.setup(a):ia&&P===l.SingleFile?N.setup(a):O.setup(a),y=da,B.selectedIndex=y,window.onresize=C)};var U=function(){var a={},d=[],b=0,x,f,e,g=!1,m=!1,l=!1,pa=!0;
a.setup=function(a,b){f=h("leftContent");x=h("left");e=b;p(a);for(var c=0;c<k;c++)d[c]=!1;m=g=!1;V("scroll",f,Ca);c=document.createElement("script");c.setAttribute("src","bookmarks/bookmarks.js");c.setAttribute("onload","IDRViewer.setBookmarks(bookmarks);");c.onreadystatechange=function(){"complete"==this.readyState&&IDRViewer.setBookmarks(bookmarks)};(document.head||document.getElementsByTagName("head")[0]).appendChild(c)};a.toggleThumbnails=function(){g?(x.style.width="0",x.style.left="-20px"):
(n(-1),x.style.width="200px",x.style.left="0",Ca());g=!g};a.toggleOutlines=function(a){m&&!a?(h("thumbnailPanel").style.display="inline",h("outlinePanel").style.display="none",f.scrollTop=h("thumb"+c).getBoundingClientRect().top-80,m=!m,ca.className="inactive navBtn",H.className="navBtn"):a&&"inactive navBtn"!=H.className&&(h("thumbnailPanel").style.display="none",h("outlinePanel").style.display="inline",m=!m,ca.className="navBtn",H.className="inactive navBtn")};var p=function(a){for(var d=[],b=0;b<
k;b++){var c=Math.floor(160/a[b][0]*a[b][1]);d[b]=a[b][0]>a[b][1]||200>=c?c:200}for(a=1;a<=k;a++){var e=document.createElement("a");e.style.height=d[a-1]+"px";e.className="thumbnail";e.href="?page="+a;e.id="thumb"+a;(function(a){e.onclick=function(){pa=!1;IDRViewer.goToPage(a);return!1}})(a);e.setAttribute("title","Page "+a);e.innerHTML='<img src="assets/loading.gif"/>';f.children[0].appendChild(e)}},Ca=function(a){var d=f.scrollTop;b=d;setTimeout(function(){n(d)},500)},n=function(a){if(a==b||-1==
a)for(a=0;a<k;a++)if(!d[a]){var c=f.children[0].children[a];if(c.offsetTop>f.scrollTop+f.clientHeight)break;c.offsetTop+c.clientHeight>f.scrollTop&&(c=a,d[c]||(f.children[0].children[c].children[0].setAttribute("src","thumbnails/"+(c+1)+e),d[c]=!0))}};a.scrollToPage=function(a,d){var b=h("thumb"+a);if("thumbnail currentPageThumbnail"!=b.className){for(var c=1;c<=k;c++)h("thumb"+c).className="thumbnail";b.className="thumbnail currentPageThumbnail";pa&&(c=l?80:40,f.scrollTop=f.scrollTop+b.getBoundingClientRect().top-
c)}"undefined"!=typeof d&&(h("thumb"+d).className="thumbnail currentPageThumbnail");pa=!0};a.setBookmarks=function(a){h("leftContent").style.top="40px";h("leftNav").style.display="block";t(h("outlinePanel"),a);m?ca.className="navBtn":H.className="navBtn";l=!0};var t=function(a,d){for(var b=document.createElement("ul"),c=0;c<d.length;c++)(function(){var a=d[c],e=document.createElement("li");e.setAttribute("title","Page "+a.page);e.innerHTML=a.title;e.onclick=function(){IDRViewer.goToPage(parseInt(a.page))};
b.appendChild(e);"undefined"!=typeof a.children&&t(b,a.children)})();a.appendChild(b)};return a}(),Da=function(){z.style.width="65px";z.innerHTML="";var a=document.createElement("option");a.value=1;a.innerHTML="1";z.appendChild(a);for(var d,b=2;b<=k;b+=2)a=document.createElement("option"),a.value=b,d=b!==k||1===k%2?String(b+"-"+(b+1)):String(b),a.innerHTML=d,z.appendChild(a);z.selectedIndex=c/2},qa=function(){z.innerHTML="";for(var a=1;a<=k;a++){var d=document.createElement("option");d.value=a;d.innerHTML=
String(a);z.appendChild(d)}z.selectedIndex=c-1},A={applyTransform:function(a,d){a.style.webkitTransform=d;a.style.mozTransform=d;a.style.msTransform=d;a.style.oTransform=d;a.style.transform=d},applyTransformOrigin:function(a,d){a.style.webkitTransformOrigin=d;a.style.mozTransformOrigin=d;a.style.msTransformOrigin=d;a.style.oTransformOrigin=d;a.style.transformOrigin=d},applyTransitionDuration:function(a,d){a.style.webkitTransitionDuration=d;a.style.mozTransitionDuration=d;a.style.msTransitionDuration=
d;a.style.oTransitionDuration=d;a.style.transitionDuration=d}},X=function(){var a={},d,b,c,f,e;a.setup=function(b){r=l.SplitSpreads;Da();v=q[0][0];w=q[0][1];d=v;window.onpopstate=function(d){a.goToPage(d.state.page,!1)};a.goToPage(b,!1)};a.goToPage=function(a,b){a>k&&(a=k);1!==a&&0!==a%2&&--a;g.parentNode.removeChild(g);f=c=void 0;G.setPage(a);var l=1<a&&a<k,n=l?a+1:void 0;U.scrollToPage(a,n);v=d;l&&(v*=2);m.style.width=v+"px";var q="container"+a;z.selectedIndex=a/2;if(b&&history.pushState)try{history.pushState({page:a},
null,"?page="+a)}catch(I){}g=document.createElement("div");g.id=q;g.style.width=v+"px";m.appendChild(g);A.applyTransformOrigin(g,"top left");g.style.margin="0";C();if(D)c=document.createElement("object"),c.setAttribute("width",""+d),c.setAttribute("height",""+w),c.setAttribute("data",a+".svg"),c.setAttribute("type","image/svg+xml"),g.appendChild(c),C();else{var t=function(){e||(p(),e=!0);var b=document.createElement("iframe");b.setAttribute("src",a+".html");b.setAttribute("style","width: "+d+"px; height: "+
w+"px; position: absolute; border: 0;");b.onload=function(){c=b};g.appendChild(b)};$.ajax({url:a+".html",success:function(b){try{var d=$("<div />").html(b).find("#jpedal").attr("id","page"+a).css({position:"absolute"});$(g).append(d);setTimeout(function(){if("file:"==window.location.protocol){var b=h("fonts"+a),d=document.createElement("style");d.setAttribute("type","text/css");d.innerHTML=b.innerHTML;g.appendChild(d)}},1)}catch(c){t()}},error:t})}if(l)if(D)f=document.createElement("object"),f.setAttribute("width",
""+d),f.setAttribute("height",""+w),f.setAttribute("data",n+".svg"),f.setAttribute("type","image/svg+xml"),f.setAttribute("style","position: absolute; left: "+d+"px;"),g.appendChild(f),C();else{var r=function(){e||(p(),e=!0);var a=document.createElement("iframe");a.setAttribute("src",n+".html");a.setAttribute("style","width: "+d+"px; height: "+w+"px; position: absolute; border: 0; left: "+d+"px;");a.onload=function(){f=a};g.appendChild(a)};$.ajax({url:n+".html",success:function(a){try{var b=$("<div />").html(a).find("#jpedal").attr("id",
"page"+n).css({position:"absolute",left:d});$(g).append(b);setTimeout(function(){if("file:"==window.location.protocol){var a=h("fonts"+n),b=document.createElement("style");b.setAttribute("type","text/css");b.innerHTML=a.innerHTML;g.appendChild(b)}},1)}catch(c){r()}},error:r})}};var p=function(){Y.currentSelectMode==ea?a.enablePanning():a.enableTextSelection()};a.enableTextSelection=function(){if(e||D)n(),b.style.visibility="hidden"};a.enablePanning=function(){if(e||D)"undefined"!=typeof c&&Z(c.contentWindow),
"undefined"!=typeof f&&Z(f.contentWindow),n(),b.style.visibility="visible"};var n=function(){"undefined"==typeof b&&(b=document.createElement("div"),b.id="jpedalOverlay",b.setAttribute("style","width: inherit; height: inherit; position: absolute; z-index: 10; visibility: hidden;"),m.insertBefore(b,m.firstChild))};return a}(),O=function(){var a={},d,b,x;a.setup=function(b){r=l.MultiFile;qa();window.onpopstate=function(b){a.goToPage(b.state.page,!1)};a.goToPage(b,!1)};a.goToPage=function(b,f){g.parentNode.removeChild(g);
d=void 0;G.setPage(b);U.scrollToPage(c);v=q[c-1][0];w=q[c-1][1];m.style.width=v+"px";m.style.height=w+"px";n.scrollTop=0;z.selectedIndex=c-1;if(f&&history.pushState)try{history.pushState({page:c},null,"?page="+c)}catch(l){}if(D)g=document.createElement("object"),g.setAttribute("width",""+v),g.setAttribute("height",""+w),g.setAttribute("data",c+".svg"),g.setAttribute("type","image/svg+xml"),g.setAttribute("id","jpedal"),m.appendChild(g),d=g,A.applyTransformOrigin(g,"top left"),C();else{var k=function(){x||
(Y.currentSelectMode==ea?a.enablePanning():a.enableTextSelection(),x=!0);g=document.createElement("iframe");g.setAttribute("id","jpedal");g.setAttribute("src",c+".html");g.setAttribute("style","width: "+v+"px; height: "+w+"px; position: relative; border: 0;");g.onload=function(){d=g};m.appendChild(g);A.applyTransformOrigin(g,"top left");C()};$.ajax({url:c+".html",success:function(a){try{var b=$("<div />").html(a).find("#jpedal").css({margin:"0",overflow:"hidden",position:"relative"});$(m).append(b);
setTimeout(function(){g=h("jpedal");A.applyTransformOrigin(g,"top left");C();if("file:"==window.location.protocol){var a=h("fonts"+c),b=document.createElement("style");b.setAttribute("type","text/css");b.innerHTML=a.innerHTML;a.parentNode.removeChild(a);h("jpedal").appendChild(b)}},1)}catch(d){k()}setTimeout(function(){G.pageLoad(c)},0)},error:k})}};a.enableTextSelection=function(){if(x||D)f(),b.style.visibility="hidden"};a.enablePanning=function(){if(x||D)"undefined"!=typeof d&&Z(d.contentWindow),
f(),b.style.visibility="visible"};var f=function(){"undefined"==typeof b&&(b=document.createElement("div"),b.id="jpedalOverlay",b.setAttribute("style","width: inherit; height: inherit; position: absolute; z-index: 10; visibility: hidden;"),m.insertBefore(b,m.firstChild))};return a}(),N=function(){var a={},d=[],b=0,x,f,e;a.setup=function(b){r=l.SingleFile;qa();x=[];window.onpopstate=function(b){a.goToPage(b.state.page,!1)};A.applyTransformOrigin(g,"top left");w=0;v=q[0][0];for(var c=0;c<k;c++){d[c]=
!1;var e=document.createElement("div");e.id="page"+(c+1);e.setAttribute("style","position:relative; overflow: hidden; background-color: white; margin: 0 auto 10px; width: "+q[c][0]+"px; height: "+q[c][1]+"px;");g.appendChild(e);w+=q[c][1]+10}m.style.height=w+"px";n.onscroll=p;a.goToPage(b,!1)};var p=function(a){var e=window.pageYOffset;b=e;setTimeout(function(){if(e==b){if(0<h("page1").getBoundingClientRect().top)G.setPage(1),z.selectedIndex=c-1;else for(var a=1;a<=k;a++){var f=h("page"+a).getBoundingClientRect(),
g=f.top,f=f.bottom-f.top;if(g<=.25*f&&g>.5*-f){G.setPage(a);z.selectedIndex=c-1;break}}U.scrollToPage(c);for(a=1;a<=k;a++)d[a]||(f=h("page"+a),g=f.getBoundingClientRect().top,g<=f.clientHeight&&g>=-f.clientHeight&&u(a))}},250)};a.goToPage=function(a,b){n.scrollTop=n.scrollTop+h("page"+a).getBoundingClientRect().top-45;d[a]||u(a)};var u=function(b){d[b]=!0;if(D){var c=document.createElement("object");c.setAttribute("width",""+q[b-1][0]);c.setAttribute("height",""+q[b-1][1]);c.setAttribute("data",b+
".svg");c.setAttribute("type","image/svg+xml");x[b-1]=c;h("page"+b).appendChild(c)}else{var e=function(){f||(Y.currentSelectMode==ea?a.enablePanning():a.enableTextSelection(),f=!0);var d=document.createElement("iframe");d.setAttribute("src",b+".html");d.setAttribute("style","width: "+q[b-1][0]+"px; height: "+q[b-1][1]+"px; position: relative; border: 0;");x[b-1]=d;h("page"+b).appendChild(d)};$.ajax({url:b+".html",success:function(a){try{var d=$("<div />").html(a).find("#jpedal").html();$("#page"+
b).html(d);setTimeout(function(){if("file:"==window.location.protocol){var a=h("fonts"+b),d=document.createElement("style");d.setAttribute("type","text/css");d.innerHTML=a.innerHTML;a.parentNode.removeChild(a);h("jpedal").appendChild(d)}},1)}catch(c){e()}},error:e})}};a.enableTextSelection=function(){if(f||D)y(),e.style.visibility="hidden"};a.enablePanning=function(){if(f||D){for(var a=0;a<x.length;a++)"undefined"!=typeof x[a]&&Z(x[a].contentWindow);y();e.style.visibility="visible"}};var y=function(){"undefined"==
typeof e&&(e=document.createElement("div"),e.id="jpedalOverlay",e.setAttribute("style","width: inherit; height: inherit; position: absolute; z-index: 10; visibility: hidden;"),m.insertBefore(e,m.firstChild))};return a}(),W=function(){var a={},d=[],b=[],g,f=0,e=0,u,v,w=0,y,B,C,E,t,S=!1,I,F;a.next=function(){this.goToPage(t?c+2:c+1,!0,!0)};a.prev=function(){this.goToPage(c-1,!0,!0)};a.setup=function(J){r=l.IDR;m.removeAttribute("style");m.style.overflow="visible";m.style.padding="0";m.style.margin=
"0";m.style.webkitBackfaceVisibility="hidden";m.style.webkitPerspective="1000";S||(n.addEventListener("touchstart",ja),n.addEventListener("touchmove",ma),n.addEventListener("touchend",na),S=!0);t=window.innerWidth>window.innerHeight;G.setViewMode(l.IDR,t?"landscape":"portrait");if(!ia||q[0][0]>q[0][1])t=!1;t?Da():qa();for(var c=1;c<=k;c++)d[c]=!1,b[c]={};window.onpopstate=function(b){b.state&&a.goToPage(b.state.page,b.state.slide,!1)};setTimeout(function(){I=window.innerWidth;F=window.innerHeight;
la(I,F);a.goToPage(J,!1,!1)},0)};a.handleResize=function(){if(I!==window.innerWidth||F!==window.innerHeight)if(I=window.innerWidth,F=window.innerHeight,t==I>F){la(I,F);for(var J=1;J<=k;J++)if(d[J]&&(!t||1===J||0===J%2)){var e=document.getElementById("page"+J);e.style.marginTop=b[J].topMargin+"px";A.applyTransform(e,"translate3d("+b[J].offset+"px, 0, 0) scale("+b[J].ratio+")")}a.goToPage(c,!1,!1)}else m.innerHTML="",p=1,a.setup(c)};var P=!1,H=!1,ha,R,M=!1,ea,T,V,W,X,N,O,Y,Z,aa,ba,Q,K,L,ca,da,fa,ja=
function(a){y=P=!1;1!==a.touches.length||M||1!==p||(R=a.touches[0].clientX,T=a.touches[0].clientX,V=a.touches[0].clientY,W=T,X=V,P=!0,ea=Date.now());ca&&(da=!0);1===a.touches.length&&1<p&&(B=a.touches[0].clientX,C=a.touches[0].clientY,E=!0,N=e,O=f,Y=N,Z=O,aa=Date.now(),ba=Date.now(),Q||(Q=setInterval(function(){N=Y;O=Z;Y=e;Z=f;ba=aa;aa=Date.now()},200)));if(2===a.touches.length&&!H){y=!0;E=!1;var b=a.touches[0].clientX,d=a.touches[1].clientX,c=a.touches[0].clientY;a=a.touches[1].clientY;g=Math.sqrt(Math.pow(Math.abs(b-
d),2)+Math.pow(Math.abs(c-a),2));u=b-(b-d)/2;v=c-(c-a)/2}},ma=function(a){a.preventDefault();a.stopPropagation();if(1===a.touches.length&&P&&1===p){H=!0;var d=R-a.touches[0].clientX;0!==d&&(R=a.touches[0].clientX,W=a.touches[0].clientX,X=a.touches[0].clientY,ha-=d,A.applyTransform(m,"translate3d("+ha+"px, 0, 0)"))}else if(1===a.touches.length&&E){fa=!0;d=a.touches[0].clientX;a=a.touches[0].clientY;var ga=a-C;e+=d-B;f+=ga;B=d;C=a;ra();requestAnimationFrame(function(){oa(e,f,p,!0)},h("main"))}else if(2===
a.touches.length&&!M&&a.cancelable&&y&&!H&&(w=(w+1)%2,1!==w)){var ga=a.touches[0].clientX,k=a.touches[1].clientX,l=a.touches[0].clientY,n=a.touches[1].clientY,d=ga-(ga-k)/2;a=l-(l-n)/2;e=e+d-u;f=f+a-v;u=d;v=a;ga=Math.sqrt(Math.pow(Math.abs(ga-k),2)+Math.pow(Math.abs(l-n),2));k=ga/g;1>p*k&&(p=k=1);4<p*k&&(k=1);p*=k;d=d-b[c].leftMargin-e;e-=d*k-d;a=a-b[c].topMargin-f;f-=a*k-a;ra();requestAnimationFrame(function(){oa(e,f,p,!0)},h("main"));g=ga}},na=function(b){var d;if(0===b.touches.length){if(H){var g=
H=!1;300>Date.now()-ea&&(b=T-W,d=V-X,100<Math.abs(b)&&Math.abs(b)>.25*Math.abs(d)&&(g=!0,0<b?a.next():a.prev()));g||(b=-I*(c-1),t&&(b=-I*Math.floor(c/2)),ha>b+I/2?a.prev():ha<b-I/2?a.next():a.goToPage(c,!0,!1))}clearInterval(Q);Q=null;fa&&(fa=!1,g=Date.now()-ba,b=N-e,d=O-f,K=b/(g/16),L=d/(g/16),.5>Math.abs(K)&&(K=0),.5>Math.abs(L)&&(L=0),0===K&&0===L||window.requestAnimationFrame(ka,h("main")))}},ka=function(){ca=!0;!da&&(-.5>K||.5<K||-.5>L||.5<L)?(e-=K,f-=L,K*=.95,L*=.95,ra(),oa(e,f,p,!0),window.requestAnimationFrame(ka,
h("main"))):da=ca=!1},ra=function(){0<e&&(K=e=0);0<f&&(L=f=0);var a=q[c-1][0]*b[c].ratio;t&&(a*=2);var d=a*p;e<a-d&&(e=a-d,K=0);a=q[c-1][1]*b[c].ratio;d=a*p;f<a-d&&(f=a-d,L=0)},oa=function(a,d,e,f){a=Math.round(2*a)/2;d=Math.round(2*d)/2;a=f?"translate3d("+(a+b[c].offset)+"px, "+d+"px, 0) scale("+e*b[c].ratio+")":"translateX("+(a+b[c].offset)+"px) translateY("+d+"px) scale("+e*b[c].ratio+")";d=h("page"+c);A.applyTransform(d,a)},sa=function(a){if(!d[a]){var c=document.createElement("div");c.setAttribute("id",
"page"+a);c.style.width=t&&1!=a&&(a<k||1===k%2)?2*q[a][0]+"px":q[a-1][0]+"px";c.style.height=q[a-1][1]+"px";A.applyTransform(c,"translate3d("+b[a].offset+"px, 0, 0) scale("+b[a].ratio+")");A.applyTransformOrigin(c,"top left");c.style.marginTop=b[a].topMargin+"px";c.style.position="absolute";m.appendChild(c)}d[a]||(D?(d[a]=!0,c=document.createElement("div"),c.setAttribute("style","position: absolute"),h("page"+a).appendChild(c),$(c).load(a+".svg")):$.ajax({url:a+".html",success:function(b){d[a]||(d[a]=
!0,b=$("<div />").html(b).find("#jpedal").css("position","absolute"),$("#page"+a).append(b))}}));t&&1!=a&&!d[a+1]&&a!=k&&(D?(d[a+1]=!0,c=document.createElement("div"),c.setAttribute("style","position: absolute; left: "+q[a][0]+"px"),h("page"+a).appendChild(c),$(c).load(a+1+".svg")):$.ajax({url:a+1+".html",success:function(b){d[a+1]||(d[a+1]=!0,b=$("<div />").html(b).find("#jpedal").css("position","absolute"),(a<k||1===k%2)&&b.css("left",q[a][0]),$("#page"+a).append(b))}}))},la=function(a,d){for(var c=
1;c<=k;c++){var e;e=t&&1!=c&&(c<k||1===k%2)?(a-20)/(2*q[c][0]):(a-20)/q[c-1][0];var f=(d-40-20)/q[c-1][1];e<f?(b[c].ratio=e,b[c].leftMargin=10):(b[c].ratio=f,b[c].leftMargin=(a-(t&&1!=c&&(c<k||1===k%2)?2*q[c][0]*b[c].ratio:q[c-1][0]*b[c].ratio))/2);b[c].topMargin=(d-40-q[c-1][1]*b[c].ratio)/2;b[c].offset=t&&1!=c?a*Math.floor(c/2)+b[c].leftMargin:a*(c-1)+b[c].leftMargin}};a.goToPage=function(b,e,f){if(1<p)p=1,requestAnimationFrame(function(){oa(0,0,p,!0);a.goToPage(b,e,f)},h("main"));else{1>b&&(b=
1);b>k&&(b=k);t&&1!==b&&1===b%2&&--b;b!==c&&(M=!0);d[b]||sa(b);ha=t?-(window.innerWidth*Math.floor(b/2)):-(window.innerWidth*(b-1));e&&A.applyTransitionDuration(m,"200ms");A.applyTransform(m,"translate3d("+ha+"px, 0, 0)");t&&1!==b&&1===b%2&&--b;t&&1!==b&&b<k?U.scrollToPage(b,b+1):U.scrollToPage(b);G.setPage(b);if(f&&history.pushState)try{history.pushState({page:c,slide:e},null,"?page="+c)}catch(g){}z.selectedIndex=t?Math.floor(c/2):c-1;var l=function(){var a;M=!1;a=b;t&&1===a&&(a=0);var e=a-1,f=a+
1;t&&(--e,f+=1,2===a&&(e=1));1<=e&&!d[e]&&sa(e);f<=k&&!d[f]&&sa(f);A.applyTransitionDuration(m,"");m.removeEventListener("transitionend",l,!1);m.removeEventListener("webkitTransitionEnd",l,!1);if(t)for(e=2;e<=k;e+=2)d[e]&&(e<c-2||e>c+2)&&(d[e]=!1,a=h("page"+e),a.parentNode.removeChild(a),e<k&&(d[e+1]=!1));else for(e=1;e<=k;e++)d[e]&&(e<c-1||e>c+1)&&(d[e]=!1,a=h("page"+e),a.parentNode.removeChild(a))};e?(m.addEventListener("transitionend",l,!1),m.addEventListener("webkitTransitionEnd",l,!1)):l()}};
return a}();u.setBookmarks=U.setBookmarks;u.setDefaultViewMode=function(a){if(a===l.MultiFile||a===l.SplitSpreads||a===l.SingleFile)P=a};var Ea=function(a){for(var d=document.URL,b=d.toString().indexOf("?"),d=-1!=b?d.substr(b+1).split("&"):"",b=0;b<d.length;b++)if(d[b]=d[b].split("="),d[b][0]==a)return d[b][1];return""};u.toggleOutlines=U.toggleOutlines;var Z=function(a){try{a.getSelection?a.getSelection().empty?a.getSelection().empty():a.getSelection().removeAllRanges&&a.getSelection().removeAllRanges():
a.document.selection&&a.document.selection.empty()}catch(d){}},Y=function(){var a={},d,b,c=!1,f=!!window.opera||0<=navigator.userAgent.indexOf(" OPR/"),f=!!window.chrome&&!f;"undefined"!==typeof InstallTrigger?(T="-moz-grab",fa="-moz-grabbing"):f?(T="-webkit-grab",fa="-webkit-grabbing"):fa=T="all-scroll";a.currentSelectMode=F;a.enableTextSelection=function(){this.currentSelectMode=F;M.className="inactive navBtn";R.className="navBtn";n.style.cursor="";var a=function(a){};n.onmousedown=a;document.onmouseup=
a;n.onmousemove=a;r===l.MultiFile?O.enableTextSelection():r===l.SplitSpreads?X.enableTextSelection():r===l.SingleFile&&N.enableTextSelection()};a.enablePanning=function(){this.currentSelectMode=ea;M.className="navBtn";R.className="inactive navBtn";Z(window);n.style.cursor=T;n.onmousedown=function(a){a=a||window.event;n.style.cursor=fa;d=a.clientX;b=a.clientY;c=!0;return!1};document.onmouseup=function(a){n.style.cursor=T;c=!1};n.onmousemove=function(a){if(c)return a=a||window.event,n.scrollLeft=n.scrollLeft+
d-a.clientX,n.scrollTop=n.scrollTop+b-a.clientY,d=a.clientX,b=a.clientY,!1};r===l.MultiFile?O.enablePanning():r===l.SplitSpreads?X.enablePanning():r===l.SingleFile&&N.enablePanning()};return a}();u.setSelectMode=function(a){ba||(a==F?Y.enableTextSelection():Y.enablePanning())};var Ga=function(){var a=0;self.innerHeight?a=self.innerWidth:document.documentElement&&document.documentElement.clientHeight?a=document.documentElement.clientWidth:document.body&&(a=document.body.clientWidth);return a},ka=function(){var a=
n.scrollTop,d=m.offsetHeight;y===S&&(B.selectedIndex=S);4<p?p=4:.25>p&&(p=.25);"undefined"!==typeof isIE&&isIE&&(g.style.zoom=p);A.applyTransform(g,"translateX(0px) translateY(0px) scale("+p+")");m.style.width=v*p+"px";m.style.height=w*p+"px";var b=Math.floor(100*p);ba||(B.options[0].innerHTML=b+"%");r==l.SingleFile&&(g.style.width=Math.floor(100/b*100)+"%");n.scrollTop=m.offsetHeight/d*a;la++;1===la%2&&C()};u.zoomIn=function(){y=S;p*=1.2;ka()};var Fa=function(){var a=E.selectedIndex;a!=r&&(G.setViewMode(a),
IDRViewer.setSelectMode(F),r===l.SingleFile&&(n.onscroll=function(a){},B.style.display=""),r=l.IDR,m.innerHTML="",m.setAttribute("style",""),g=document.createElement("div"),g.id="jpedal",m.appendChild(g),y=da,B.selectedIndex=y,a===l.MultiFile?O.setup(c):a===l.SplitSpreads?X.setup(c):a===l.SingleFile&&(B.style.display="none",N.setup(c),C()))};u.zoomUpdate=function(){y=B.selectedIndex;y!=S&&C()};var C=function(){var a,d,b,g,f,e=function(){a=n.clientWidth;r===l.SingleFile&&(v=aa[c].width);p=(a-6)/v},
h=function(){a=n.clientWidth;d=n.clientHeight;r==l.SingleFile&&(v=aa[c].width,f=aa[c].height);g=r!=l.SplitSpreads||1!==c&&c!==k?(a-6)/v:(a-6)/(2*v);b=(d-6)/w;r==l.SingleFile&&(b=(d-6)/f);p=g>b?b:g};switch(y){case da:var m=v;r!==l.SplitSpreads||1!==c&&c!==k||(m=2*v);m>w&&w>n.clientHeight?h():m>Ga()&&ia?e():p=1;break;case wa:e();break;case xa:d=n.clientHeight;b=(d-6)/w;r==l.SingleFile&&(f=aa[c].height,b=(d-6)/f);p=b;break;case ya:h();break;case va:p=1}ka()};u.zoomOut=function(){y=S;p/=1.2;ka()};u.goToPage=
function(a){0===a&&(a=parseInt(z.options[z.selectedIndex].value));r===l.IDR?W.goToPage(a,!1,!0):r===l.SplitSpreads?X.goToPage(a,!0):r===l.MultiFile?O.goToPage(a,!0):r===l.SingleFile&&N.goToPage(a,!0)};u.next=function(){r===l.IDR?W.next():r===l.SplitSpreads?c+1<=k&&this.goToPage(c+2):c<k&&this.goToPage(c+1)};u.prev=function(){r===l.IDR?W.prev():1<c&&this.goToPage(c-1)};var V=function(a,d,b){if(d.addEventListener)d.addEventListener(a,b,!1);else if(d.attachEvent)return d.attachEvent("on"+a,b)},h=function(a){return document.getElementById(a)};
u.toggleThumbnails=U.toggleThumbnails;var ja=function(){Q.className=document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?"navBtn open":"navBtn closed"};u.toggleFullScreen=function(){document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?
document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():document.body.requestFullscreen?document.body.requestFullscreen():document.body.msRequestFullscreen?document.body.msRequestFullscreen():document.body.mozRequestFullScreen?document.body.mozRequestFullScreen():document.body.webkitRequestFullscreen&&document.body.webkitRequestFullscreen()};u.addToolBarHyperlink=function(a,d){var b=new Image;b.src=a;var c=document.createElement("a");c.href=d;c.className=
"customNavLink";c.appendChild(b);c.setAttribute("target","_blank");h("mainNav").insertBefore(c,ua)};u.disableViewModeSwitching=function(){ta=!0};u.on=function(a,c){"pagechange"===a?za=c:"viewmodechange"===a?Aa=c:"pageload"===a&&(Ba=c)};G.setPage=function(a){if(a!=c){var d=za;d&&d({page:a});c=a}};G.setViewMode=function(a,c){var b=Aa;if(b){var g={viewmode:a};""!=c&&(g.orientation=c);b(g)}};G.pageLoad=function(a){var c=Ba;c&&c({page:a})};return u}();