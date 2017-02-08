function sc(what="none",where=2){$("#position-"+where).attr("src",`img/char/${what}.png`)}
function scs(first="none",second="none",third="none"){sc(first,1)
sc(second,2)
sc(third,3)}
function bg(what="none"){world.css("backgroundImage",`url(img/bg/${what}.png)`)}
function rmc(where=2){sc(undefined,where)}
function l(who,text){output.append(`<p class="to-me"><span>${who}</span>${text}</p>`)}
function s(text){output.append(`<p class="from-me">${text}</p>`)}
function response(text){s(text)
cr()}
function r(resps){for(var i=0;i<resps.length;i=i+2){responses.append(`<button onclick="response('${resps[i]}');${resps[i + 1]}()">
        ${resps[i]}
      </button>`)}}
function co(){output.html("")}
function cr(){responses.html("")}
function ca(){co()
scs()
bg()}
let save=document.getElementById("btn-save")
let info=document.getElementById("btn-info")
save.onclick=function(){alert("Your game wasn't saved, I will add this feature later.")};info.onclick=function(){alert("Ĉambraro 1.0.0 was Developed by bouncepaw.")};var responses=$("#responses")
var world=$("#world")
var output=$("#output")
