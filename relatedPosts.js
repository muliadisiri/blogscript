!function(t,e,a){var l=(new Date).getTime(),i={widgetTitle:"<h4>Artikel Terkait:</h4>",widgetStyle:1,homePage:"//dte-feed.blogspot.com",numPosts:7,summaryLength:370,titleLength:"auto",thumbnailWidth:300,thumbnailHeight:180,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"related-post",newTabLink:!1,moreText:"Baca Selengkapnya",callBack:function(){}};if("object"==typeof relatedPostConfig)for(var s in relatedPostConfig)i[s]=relatedPostConfig[s];i.homePage=i.homePage.replace(/\/?\?m=\d+(\&|$)|\/+$/,"");var n=function(t){var l=e.createElement("script");l.src=t,a.appendChild(l)},r=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},h=function(t){var e,a,l=t.length;if(0===l)return!1;for(;--l;)e=Math.floor(Math.random()*(l+1)),a=t[l],t[l]=t[e],t[e]=a;return t},o="object"==typeof labelArray&&labelArray.length?"/-/"+h(labelArray)[0]:"",d=function(t){var e=t.feed.openSearch$totalResults.$t-i.numPosts;r(1,e>0?e:1);n(i.homePage+"/feeds/posts/default"+o+"?alt=json-in-script&orderby=updated&start-index="+r+"&max-results="+i.numPosts+"&callback=do_related_post_"+l)},m=function(t){var a,l,s,n,r,o=e.getElementById(i.containerId),d=h(t.feed.entry),m=i.widgetStyle,c=i.widgetTitle+'<ul class="clearfloat related-post-style-'+m+'">',u=i.newTabLink?' target="_blank"':"",g='<span style="display:block;clear:both;"></span>';if(o){for(var p=d.length,b="related-post-item",f=0;f<i.numPosts&&f!==p;f++){l=d[f].title.$t,s="auto"!==i.titleLength&&i.titleLength<l.length?l.substring(0,i.titleLength)+"&hellip;":l,n="media$thumbnail"in d[f]&&i.thumbnailWidth!==!1?d[f].media$thumbnail.url.replace(/[^=]*[\d+]$|s\d+(\-c|-w\d+-h\d+-c)|s\d+(\-c)/,"w"+i.thumbnailWidth+"-h"+i.thumbnailHeight+"-n"):i.noImage,postauthor=d[f].author[0].name.$t,date=new Date(d[f].published.$t),year=date.getFullYear(),month=date.getMonth()+1,dt=date.getDate(),dt<10&&(dt="0"+dt),month<10&&(month="0"+month),r="summary"in d[f]&&i.summaryLength>0?d[f].summary.$t.replace(/<br *\/?>/gi," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,i.summaryLength)+"&hellip;":"";for(var A=0,y=d[f].link.length;y>A;A++)if("alternate"==d[f].link[A].rel){a=d[f].link[A].href;break}c+=2==m?'<li><img alt="'+l+'" class="'+b+'-thumbnail" src="'+n+'" width="'+i.thumbnailWidth+'" height="'+i.thumbnailHeight+'"><a class="'+b+'-title" title="'+l+'" href="'+a+'"'+u+">"+s+'</a><span class="'+b+'-summary"><span class="'+b+'-summary-text">'+r+'</span> <a href="'+a+'" class="'+b+'-more"'+u+">"+i.moreText+"</a></span>"+g+"</li>":3==m||4==m?'<li class="'+b+'" tabindex="0"><a class="'+b+'-titleimg" href="'+a+'"'+u+'><img alt="'+l+'" class="'+b+'-thumbnail" src="'+n+'" width="'+i.thumbnailWidth+'" height="'+i.thumbnailHeight+'"></a><div class="'+b+'-tooltip"><a class="'+b+'-title" title="'+l+'" href="'+a+'"'+u+">"+s+'</a></div><div class="rpmeta"><div class="rpauthor">'+postauthor+'</div><div class="rpdate">'+dt+"/"+month+"/"+year+"</div></div>"+g+"</li>":5==m?'<li class="'+b+'" tabindex="0"><a class="'+b+'-wrapper" href="'+a+'" title="'+l+'"'+u+'><img alt="" class="'+b+'-thumbnail" src="'+n+'" width="'+i.thumbnailWidth+'" height="'+i.thumbnailHeight+'"><span class="'+b+'-tooltip">'+s+"</span></a>"+g+"</li>":6==m?'<li><a class="'+b+'-title" title="'+l+'" href="'+a+'"'+u+">"+s+'</a><div class="'+b+'-tooltip"><img alt="" class="'+b+'-thumbnail" src="'+n+'" width="'+i.thumbnailWidth+'" height="'+i.thumbnailHeight+'"><span class="'+b+'-summary"><span class="'+b+'-summary-text">'+r+"</span></span>"+g+"</div></li>":'<li><a title="'+l+'" href="'+a+'"'+u+">"+s+"</a></li>"}o.innerHTML=c+="</ul>"+g,i.callBack(t)}};t["do_related_post_"+l]=m,t["do_related_post_start_"+l]=d,n(i.homePage+"/feeds/posts/default?alt=json-in-script&orderby=updated&max-results=0&callback=do_related_post_start_"+l)}(window,document,document.getElementsByTagName("head")[0]);
