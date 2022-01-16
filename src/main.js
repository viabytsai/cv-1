let html = document.querySelector("#demo");
let style = document.querySelector("#style")
let string =`
/* 你好，我是一名前端新人
*  接下来我演示以下我的前端功底
*  首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把div变成一个八卦图
*  首先把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是一黑一白
*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(145,145,145,1) 50%, rgba(0,0,0,1) 50%);
}
/* 加两个神秘小球
*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, 
    rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2="";
console.log(string.length);
let n=0;
let step = ()=>{
    setTimeout(() => {
        if(string[n]==="\n"){ //如果回车，就加<br>
            string2+="<br>"
        }else if(string[n]===" "){
            string2+="&nbsp"
        }else{
            string2+=string[n] //如果不是回车，就照搬
        }
        html.innerHTML=string2
        style.innerHTML=string.substring(0,n)
        window.scrollTo(0,99999)
        demo.scrollTo(0,99999)
        if(n<string.length-1){ //n=51 l-1=52 判断是不是最后一个字符
            n= n+1;            //n=52
            step()
        }
    }, 0);
}
step()