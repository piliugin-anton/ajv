(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{345:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return u})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return h})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return m}));n(38),n(113),n(346),n(112),n(348),n(195),n(83),n(114),n(9),n(115),n(56),n(116),n(193);var i=/#.*$/,r=/\.(md|html)$/,a=/\/$/,u=/^[a-z]+:/i;function s(t){return decodeURI(t).replace(i,"").replace(r,"")}function o(t){return u.test(t)}function l(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function d(t){if(o(t))return t;var e=t.match(i),n=e?e[0]:"",r=s(t);return a.test(r)?t:r+".html"+n}function f(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&s(t.path)===s(e)}function p(t,e,n){if(o(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var a=t.replace(/^\//,"").split("/"),u=0;u<a.length;u++){var s=a[u];".."===s?r.pop():"."!==s&&r.push(s)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=s(e),r=0;r<t.length;r++)if(s(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:d(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function h(t,e,n,i){var r=n.pages,a=n.themeConfig,u=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||u.sidebar||a.sidebar))return g(t);var s=u.sidebar||a.sidebar;if(s){var o=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,s),l=o.base,c=o.config;return"auto"===c?g(t):c?c.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});var a=e.children||[];return 0===a.length&&e.path?Object.assign(p(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:a.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,l)})):[]}return[]}function g(t){var e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function v(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},346:function(t,e,n){"use strict";var i=n(11),r=n(190),a=n(7),u=n(84),s=n(17),o=n(31),l=n(58),c=n(191),d=n(192);r("match",(function(t,e,n){return[function(e){var n=o(this),r=null==e?void 0:l(e,t);return r?i(r,e,n):new RegExp(e)[t](s(n))},function(t){var i=a(this),r=s(t),o=n(e,i,r);if(o.done)return o.value;if(!i.global)return d(i,r);var l=i.unicode;i.lastIndex=0;for(var f,p=[],h=0;null!==(f=d(i,r));){var g=s(f[0]);p[h]=g,""===g&&(i.lastIndex=c(r,u(i.lastIndex),l)),h++}return 0===h?null:p}]}))},347:function(t,e,n){},348:function(t,e,n){"use strict";var i=n(34),r=n(11),a=n(2),u=n(190),s=n(194),o=n(7),l=n(31),c=n(117),d=n(191),f=n(84),p=n(17),h=n(58),g=n(188),v=n(192),m=n(86),b=n(189),x=n(3),_=b.UNSUPPORTED_Y,k=Math.min,C=[].push,$=a(/./.exec),y=a(C),L=a("".slice);u("split",(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=p(l(this)),u=void 0===n?4294967295:n>>>0;if(0===u)return[];if(void 0===t)return[a];if(!s(t))return r(e,a,t,u);for(var o,c,d,f=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,b=new RegExp(t.source,h+"g");(o=r(m,b,a))&&!((c=b.lastIndex)>v&&(y(f,L(a,v,o.index)),o.length>1&&o.index<a.length&&i(C,f,g(o,1)),d=o[0].length,v=c,f.length>=u));)b.lastIndex===o.index&&b.lastIndex++;return v===a.length?!d&&$(b,"")||y(f,""):y(f,L(a,v)),f.length>u?g(f,0,u):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r(e,this,t,n)}:e,[function(e,n){var i=l(this),u=null==e?void 0:h(e,t);return u?r(u,e,i,n):r(a,p(i),e,n)},function(t,i){var r=o(this),u=p(t),s=n(a,r,u,i,a!==e);if(s.done)return s.value;var l=c(r,RegExp),h=r.unicode,g=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(_?"g":"y"),m=new l(_?"^(?:"+r.source+")":r,g),b=void 0===i?4294967295:i>>>0;if(0===b)return[];if(0===u.length)return null===v(m,u)?[u]:[];for(var x=0,C=0,$=[];C<u.length;){m.lastIndex=_?0:C;var U,E=v(m,_?L(u,C):u);if(null===E||(U=k(f(m.lastIndex+(_?C:0)),u.length))===x)C=d(u,C,h);else{if(y($,L(u,x,C)),$.length===b)return $;for(var I=1;I<=E.length-1;I++)if(y($,E[I]),$.length===b)return $;C=x=U}}return y($,L(u,x)),$}]}),!!x((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),_)},349:function(t,e){t.exports=function(t){return null==t}},351:function(t,e,n){"use strict";n(347)},358:function(t,e,n){"use strict";n(38),n(112),n(113);var i=n(349),r=n.n(i),a=n(345),u={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=r()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,a=void 0===i?"":i,u=e.docsBranch,s=void 0===u?"master":u,o=e.docsRepo,l=void 0===o?n:o;return"string"==typeof t?t:t&&l&&this.$page.relativePath?this.createEditLink(n,l,a,s,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){if(/bitbucket.org/.test(e))return e.replace(a.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(a.a,"")+"/-/edit"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r:(a.i.test(e)?e:"https://github.com/".concat(e)).replace(a.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r}}},s=(n(351),n(55)),o=Object(s.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.a=o.exports},390:function(t,e,n){},470:function(t,e,n){"use strict";n(390)},494:function(t,e,n){"use strict";n.r(e);var i={components:{PageEdit:n(358).a}},r=(n(470),n(55)),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("div",{staticClass:"theme-default-content",staticStyle:{"padding-bottom":"0px"}},[n("h1",[t._v(t._s(t.$page.frontmatter.title))]),t._v(" "),n("NewsPostMeta",{attrs:{date:t.$page.frontmatter.date}})],1),t._v(" "),n("Content",{staticClass:"theme-default-content",staticStyle:{"padding-top":"0px"}}),t._v(" "),n("PageEdit"),t._v(" "),t._t("bottom")],2)}),[],!1,null,"22624a70",null);e.default=a.exports}}]);