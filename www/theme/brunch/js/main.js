!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var r={},t={},u={},n={}.hasOwnProperty,o=/^\.\.?(\/|$)/,l=function(e,r){for(var t,u=[],n=(o.test(r)?e+"/"+r:r).split("/"),l=0,i=n.length;l<i;l++)t=n[l],".."===t?u.pop():"."!==t&&""!==t&&u.push(t);return u.join("/")},i=function(e){return e.split("/").slice(0,-1).join("/")},s=function(r){return function(t){var u=l(i(r),t);return e.require(u,r)}},c=function(e,r){var u=v&&v.createHot(e),n={id:e,exports:{},hot:u};return t[e]=n,r(n.exports,s(e),n),n.exports},a=function(e){return u[e]?a(u[e]):e},f=function(e,r){return a(l(i(e),r))},d=function(e,u){null==u&&(u="/");var o=a(e);if(n.call(t,o))return t[o].exports;if(n.call(r,o))return c(o,r[o]);throw new Error("Cannot find module '"+e+"' from '"+u+"'")};d.alias=function(e,r){u[r]=e};var p=/\.[^.\/]+$/,_=/\/index(\.[^\/]+)?$/,m=function(e){if(p.test(e)){var r=e.replace(p,"");n.call(u,r)&&u[r].replace(p,"")!==r+"/index"||(u[r]=e)}if(_.test(e)){var t=e.replace(_,"");n.call(u,t)||(u[t]=e)}};d.register=d.define=function(e,u){if(e&&"object"==typeof e)for(var o in e)n.call(e,o)&&d.register(o,e[o]);else r[e]=u,delete t[e],m(e)},d.list=function(){var e=[];for(var t in r)n.call(r,t)&&e.push(t);return e};var v=e._hmr&&new e._hmr(f,d,r,t);d._cache=t,d.hmr=v&&v.wrap,d.brunch=!0,e.require=d}}(),function(){var e;"undefined"==typeof window?this:window;require.register("src/scripts/main.js",function(e,r,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}var n=r("jquery"),o=u(n),l=r("./modules/module_image"),i=u(l),s=r("./modules/module_block"),c=u(s),a=r("./modules/module_slick"),f=u(a),d={init:function(){(0,o["default"])(document).ready(function(){console.log("DOM Ready"),(0,i["default"])(),(0,c["default"])(),(0,f["default"])()})}};t.exports=d}),require.register("src/scripts/modules/module_block.js",function(e,r,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}var n=r("jquery"),o=u(n),l=function(){var e=(0,o["default"])(".module_block");e.length&&(console.log('".module_block" detected ('+e.length+")"),o["default"].each(e,function(e,r){var t=(0,o["default"])(r).find(".title"),u=(0,o["default"])(t[0]),n=u.text(),l=e+1;u.html(n+'<span class="module-count">'+l+"</span>")}))};t.exports=l}),require.register("src/scripts/modules/module_image.js",function(e,r,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}var n=r("jquery"),o=u(n),l=function(){var e=(0,o["default"])(".module_image");e.length&&console.log('".module_image" detected')};t.exports=l}),require.register("src/scripts/modules/module_slick.js",function(e,r,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}var n=r("jquery"),o=u(n),l=r("slick-carousel"),i=(u(l),function(){var e=(0,o["default"])(".module_slick");if(e.length){console.log('".module_slick" detected');var r={autoplay:!0,autoplaySpeed:2e3,arrows:!1,pauseOnHover:!1};o["default"].each(e,function(e,t){var u=(0,o["default"])(t).find(".carousel"),n=(0,o["default"])(u[0]);n.slick(r)})}});t.exports=i}),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,r,t){})}(),require("___globals___");