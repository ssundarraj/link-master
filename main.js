var links = document.getElementsByTagName('a')
function addLinkImg(ev){
    t = ev.target;
    var linkImg = document.createElement("img");
    linkTarget = t.target;
    if(linkTarget == "_blank"){
        imgShape = "triangle";
    }
    else{
        imgShape = "circle";
    }
    imgURL = "assets/" + imgShape + ".png";
    linkImg.src = chrome.extension.getURL(imgURL);
    linkImg.style.position = "fixed";
    linkImg.style.height = "0.5em";
    linkImg.class="link-master-linker";
    t.linkMasterImg = linkImg;
    t.appendChild(linkImg);
}
function delLinkImg(ev){
    t = ev.target;
    t.removeChild(t.linkMasterImg);
}
for(var i = 0; i < links.length; i++){
    var t = links[i];
    links[i].onmouseover = addLinkImg;
    links[i].onmouseout = delLinkImg;
}