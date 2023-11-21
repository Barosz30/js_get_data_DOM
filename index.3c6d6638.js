// write your code here
var e=document.querySelectorAll(".population"),o=document.querySelector(".total-population"),n=document.querySelector(".average-population"),r=0,t=0;e.forEach(function(e){var o=Number(e.innerHTML.replaceAll(",",""));t+=o,r++});var l=t.toLocaleString("en-US"),a=(t/r).toLocaleString("en-US");o.innerText=l,n.innerText=a;//# sourceMappingURL=index.3c6d6638.js.map

//# sourceMappingURL=index.3c6d6638.js.map
