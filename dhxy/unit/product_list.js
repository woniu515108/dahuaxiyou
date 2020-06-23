var data=[
    {title:'服装配饰',
        childs:[
            {title:'男装'},
            {title:'女装'},
            {title:'童装',childs:[
                {title:'女童装',childs:[
                    {title:'0~4岁'},
                    {title:'4岁或以上'}
                ]},
                {title:'男童装'}
            ]},
            {title:'内衣配饰'}
        ]
    },
    {title:'玩具礼品',
        childs:[
            {title:'礼品'},
            {title:'手办'},
            {title:'其他'},
            {title:'其他/将军'}
        ] 
    },
    {title:'家居用品',
        childs:[
            {title:'家居类'},
            {title:'毛绒抱枕'},
            {title:'碗/杯类'}
        ]
    },
    {title:'珠宝首饰',
        childs:[
            {title:'珠宝首饰'}
        ]
    },
    {title:'户外出行',
        childs:[
            {title:'箱包'},
            {title:'伞类'},
            {title:'其他'}
        ]
    },
    {title:'数码外设',
        childs:[
            {title:'电脑相关'},
            {title:'手机周边'},
            {title:'影音娱乐'},
            {title:'其他'}
        ]

    },
    {title:'其他'}
]

function menu(data){
    var ul='<ul id="tree">';
    for(var i=0;i<data.length;i++){
        if(data[i].childs){
            ul+=`<li><span>+</span><a href='javascript:;'>${data[i].title}</a>`
            ul+=arguments.callee(data[i].childs);
        }else{
            ul+=`<li><a href='javascript:;'>${data[i].title}</a>`
        }
        ul+='</li>';
    }
    ul+='</ul>';
    return ul;
}
menu_list.innerHTML=menu(data);
var spanAll=document.getElementById('tree');
var span=spanAll.getElementsByTagName('span');
for(var i=0;i<span.length;i++){
    (function(i){
        span[i].onclick=function(){
            console.log('innerHTML',span[i].innerHTML)
            if(span[i].innerHTML=='+'){
                span[i].innerHTML='-';
                span[i].nextSibling.style.color='#fc5600';
                span[i].nextSibling.nextSibling.style.display='block';
                console.log(span[i].nextSibling.nextSibling)
            }else if(span[i].innerHTML=='-'){
                span[i].innerHTML='+';
                span[i].nextSibling.nextSibling.style.display='none';
                span[i].nextSibling.style.color='#666';
            }
        }
    })(i)
}