console.log("Hello5")
var links = document.getElementsByTagName('a')
function addLinkImg(ev){
    // console.log(ev);
    
    t = ev.target;
    consoe.log(t);
    var linkImg = document.createElement("img");
    linkImg.src = chrome.extension.getURL("assets/square.png");
    linkImg.style.position = "static";
    linkImg.class="link-master-linker";
    t.linkMasterImg = linkImg;
    t.appendChild(linkImg);
    // t.parentElement.insertBefore(linkImg, t.nextSibling)
}
for(var i = 0; i < links.length; i++){
    var t = links[i];
    links[i].onmouseover = addLinkImg;
    links[i].onmouseout = function(ev){
        t = ev.target;
        console.log(t);
        console.log(t.linkMasterImg);
        t.removeChild(t.linkMasterImg);
    }
}