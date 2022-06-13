
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var e = [],
    t = [];

function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
        s = !0 === r.prepend ? "prepend" : "append",
        d = !0 === r.singleTag,
        i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];

    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();

    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }

  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "body{\r\n    background: gainsboro;\r\n    padding: 0;\r\n    margin: 0;\r\n    color: white;\r\n}\r\n\r\n.image{\r\n    width: 350px;\r\n    height: 350px;\r\n}";
n(css,{});

var img = "data:image/png;base64,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";

console.log('Hello World!');
const body = document.querySelector('body');
const text = document.createElement('h1');
text.textContent = 'I love JavaScript';
body.append(text);
const image = document.createElement('img');
image.className = 'image';
image.src = img;
body.append(image);
