!function(c){var e={};function n(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return c[r].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=c,n.c=e,n.d=function(c,e,r){n.o(c,e)||Object.defineProperty(c,e,{enumerable:!0,get:r})},n.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},n.t=function(c,e){if(1&e&&(c=n(c)),8&e)return c;if(4&e&&"object"==typeof c&&c&&c.__esModule)return c;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:c}),2&e&&"string"!=typeof c)for(var t in c)n.d(r,t,function(e){return c[e]}.bind(null,t));return r},n.n=function(c){var e=c&&c.__esModule?function(){return c.default}:function(){return c};return n.d(e,"a",e),e},n.o=function(c,e){return Object.prototype.hasOwnProperty.call(c,e)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\n\r\n\r\nconsole.log(`Dear recruiter, I know this is not a killer code, but I am the person that learns a lot.`);\r\n\r\nconst list = document.querySelector(\'.projects-list--js\');\r\n\r\nfetch(\'https://api.github.com/users/JMPaulus/repos?sort=updated&direction=desc\')\r\n  .then(resp => resp.json())\r\n  .then(resp => {\r\n    const repos = resp;\r\n    for (const repo of repos) {\r\n      const { description, homepage, html_url, name } = repo;\r\n      console.log(repo);\r\n      list.innerHTML += `\r\n        <li class="project">\r\n          <div class="project__container">\r\n          <img class="project__logo" src="assets/img/GitHub middle.png" alt="glasses counter">\r\n          <h3 class="project__title">${name}</h3>\r\n          ${\r\n            description ? `<p class="project__description">${description}</p>`: \'No description\'\r\n           }\r\n          </div>\r\n          <div class="project__footer">\r\n          ${\r\n        homepage ? `<a class="project__link project__link--demo" href="${homepage}" "target="_blank" rel="nofollow noreferrer" title="demo: ${name}">Demo</a>` : \'\'\r\n          }\r\n          \r\n          <a class="project__link project__link--code" href="${html_url}"target="_blank" rel="nofollow noreferrer" title="code: ${name}">Github</a> </div>\r\n          </li>\r\n     `;\r\n    }\r\n  })\r\n  .catch(err => {\r\n    console.log(err);\r\n  })\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOzs7O0FBSWI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0NBQXdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsS0FBSztBQUM1QztBQUNBLDZEQUE2RCxZQUFZO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLFNBQVMsNERBQTRELEtBQUs7QUFDbko7O0FBRUEsK0RBQStELFNBQVMsMERBQTBELEtBQUs7QUFDdkk7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5cclxuY29uc29sZS5sb2coYERlYXIgcmVjcnVpdGVyLCBJIGtub3cgdGhpcyBpcyBub3QgYSBraWxsZXIgY29kZSwgYnV0IEkgYW0gdGhlIHBlcnNvbiB0aGF0IGxlYXJucyBhIGxvdC5gKTtcclxuXHJcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtbGlzdC0tanMnKTtcclxuXHJcbmZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0pNUGF1bHVzL3JlcG9zP3NvcnQ9dXBkYXRlZCZkaXJlY3Rpb249ZGVzYycpXHJcbiAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcclxuICAudGhlbihyZXNwID0+IHtcclxuICAgIGNvbnN0IHJlcG9zID0gcmVzcDtcclxuICAgIGZvciAoY29uc3QgcmVwbyBvZiByZXBvcykge1xyXG4gICAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBob21lcGFnZSwgaHRtbF91cmwsIG5hbWUgfSA9IHJlcG87XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcG8pO1xyXG4gICAgICBsaXN0LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGltZyBjbGFzcz1cInByb2plY3RfX2xvZ29cIiBzcmM9XCJhc3NldHMvaW1nL0dpdEh1YiBtaWRkbGUucG5nXCIgYWx0PVwiZ2xhc3NlcyBjb3VudGVyXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJwcm9qZWN0X190aXRsZVwiPiR7bmFtZX08L2gzPlxyXG4gICAgICAgICAgJHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24gPyBgPHAgY2xhc3M9XCJwcm9qZWN0X19kZXNjcmlwdGlvblwiPiR7ZGVzY3JpcHRpb259PC9wPmA6ICdObyBkZXNjcmlwdGlvbidcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0X19mb290ZXJcIj5cclxuICAgICAgICAgICR7XHJcbiAgICAgICAgaG9tZXBhZ2UgPyBgPGEgY2xhc3M9XCJwcm9qZWN0X19saW5rIHByb2plY3RfX2xpbmstLWRlbW9cIiBocmVmPVwiJHtob21lcGFnZX1cIiBcInRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93IG5vcmVmZXJyZXJcIiB0aXRsZT1cImRlbW86ICR7bmFtZX1cIj5EZW1vPC9hPmAgOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8YSBjbGFzcz1cInByb2plY3RfX2xpbmsgcHJvamVjdF9fbGluay0tY29kZVwiIGhyZWY9XCIke2h0bWxfdXJsfVwidGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3cgbm9yZWZlcnJlclwiIHRpdGxlPVwiY29kZTogJHtuYW1lfVwiPkdpdGh1YjwvYT4gPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgIGA7XHJcbiAgICB9XHJcbiAgfSlcclxuICAuY2F0Y2goZXJyID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n')}]);