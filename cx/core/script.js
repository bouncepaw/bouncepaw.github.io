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
function r(resps){for(var i=0;i<resps.length;i=i+2){responses.append(`<button onclick="response('${resps[i]}');${resps[i + 1]}()">${resps[i]}</button>`)}}
function co(){output.html("")}
function cr(){responses.html("")}
function ca(){co()
scs()
bg()}
var world=$("#world")
var output=$("#output")
