// 调用详情页-商品详情-用户评论-新手帮助选项卡
selecter('select_title','select_content');

// 点击小图切换大图
(function(){
    var li_img=document.getElementById('pic_list_ul').getElementsByTagName('img');
    // console.log('li_img:'+li_img)
    var replace_img=document.getElementById('replace_pic').getElementsByTagName('img')[0];

    var i = 0;
    for( ;i<li_img.length; ){
        console.log("item>>> ",i); // 循环每项输出的索引
        
        /**
         * 闭包：
         *  
        */
        (function(i){ // 加一层闭包，i以函数参数形式传递给内层函数
            li_img[i].onclick=function(){
                console.log("onclick>>> ", i);
                
                replace_img.src=li_img[i].src;
            }
        })(i) // 闭包函数自调，并将每次循环的每一项的索引当作实参传入闭包

        i++;

    }

})();
// 尺寸选择
(function(){
    var sizeList=document.getElementById("sizeList").getElementsByTagName("li");
    for(var i=0;i<sizeList.length;i++){
        (function(i){
            sizeList[i].onclick=function(){
                for(var j=0;j<sizeList.length;j++){
                    sizeList[j].style.border="1px solid #eaeaea";
                }
                this.style.border="1px solid #fc5600";
            }
        })(i)
    }

    // 数量加减
    text.onblur=function(){
        if(isNaN(text.value) || text.value<=0){
            text.value='1'
        }
        if(text.value!=parseInt(text.value)){
            
            text.value=parseInt(text.value)
        }
    }
    less.onclick=function(){
        text.value>1?text.value--:1;
    }
    add.onclick=function(){
        text.value++;
    }
})();

(function(){
    // 详情页选项卡
    var select_title=document.getElementById("select_title").getElementsByTagName("li");
    var select_content=document.getElementById("select_content").getElementsByClassName("con_all");
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

    // 评论
    var textall="您对宝贝还满意吗？快来分享您的使用心得或宝贵建议吧！帮助他人还能获得积分奖励哦！";
     texthtml.innerHTML=textall;
     lastnum.innerHTML="600";
    //  监听输入的字数
    texthtml.oninput=function(){
        lastnum.innerHTML=600-texthtml.innerHTML.length;
    }
    // 输入框获取焦点的placeholder
    texthtml.onfocus=function(){
        if(texthtml.innerHTML==textall){
            texthtml.innerHTML="";
        }
    }
    // 输入框失去焦点的placeholder
    texthtml.onblur=function(){
        if(texthtml.innerHTML==""){
            texthtml.innerHTML=textall;
            texthtml.style.color="#999";
        }
    }
    // 发表评论
    var clonetext=user_top.cloneNode(true);
    pulldown.onclick=function(){
        console.log("clonetext:",clonetext)
        console.log("点击了");
        user_bottom.appendChild(clonetext);
   
    }
})();



