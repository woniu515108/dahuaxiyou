
    // selectShow("game");

/**
 * UI交互:下拉弹出窗
 *  @param dropTitle : string id
 *  @param dropContent : string id
*/
function selectShow(eTitle,eContent){
    var eTitle=document.getElementById(eTitle);
    var eContent=document.getElementById(eContent);
    eTitle.onmouseover=function(){
        var dropStyle=getComputedStyle(eContent).display;
       if(dropStyle=='none'){
        eContent.style.display='block';
       }else{
        eContent.style.display='none';
       }
    }
    eTitle.onmouseout=function(){
        var dropStyle=getComputedStyle(eContent).display;
       if(dropStyle=='none'){
        eContent.style.display='block';
       }else{
        eContent.style.display='none';
       }
    }
}
// 选项卡
function selecter(selectTitle,selectCon){
var select_title=document.getElementById(selectTitle).getElementsByTagName("li");
    var select_content=document.getElementById(selectCon).getElementsByClassName("con_all");
    select_content[0].style.display="block";
    for(var i=0;i<select_title.length;i++){
        (function(i){
            select_title[i].onclick=function(){
                for(var j=0;j<select_title.length;j++){
                    select_title[j].className='';
                    select_content[j].style.display="none";
                }
                this.className="select";
                select_content[i].style.display="block";
            }
        })(i)
    }
}
// 点击关闭登录弹窗
var btnLogin=document.getElementById('click_login');
var login=document.getElementById('login');
var bg=document.getElementById('bg');
var close=document.getElementById('close');
btnLogin.onclick=function(){
    login.style.display='block';
    bg.style.display='block';
}
close.onclick=function(){
    login.style.display="none";
    bg.style.display='none';
}