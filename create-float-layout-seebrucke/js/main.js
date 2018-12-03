function removeScroll(){
    document.getElementsByClassName('content')[0].style="overflow-y:hidden; height:unset;";
    var hContent = document.getElementsByClassName('content')[0].offsetHeight;
    var hHeader= document.getElementsByClassName('head')[0].offsetHeight;
    var hFooter = document.getElementsByClassName('foot')[0].offsetHeight;

    var sum = parseFloat(hContent) + parseFloat(hHeader) +parseFloat(hFooter);
    var str= "height:" + hContent + "px";
    var str2="height:" + sum+"px";
    document.getElementsByClassName('right')[0].style=str;
    document.getElementsByClassName('link')[0].style=str2;
}