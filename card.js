let getImg=prompt("enter img url");
document.getElementById("thumbnail-img").src=`${getImg}`;
let getTitle=prompt("Enter title of the video");
document.getElementById("title").innerHTML=getTitle;
let getDuration=prompt("Enter duration of the video");
document.getElementById("duration").innerHTML=`${getDuration.slice(0,2)}:${getDuration.slice(2,)}`;
let getCname=prompt("enter channel name");
document.getElementById("cname").innerHTML=getCname;
let getView=prompt("enter channel views");
num=parseInt(getView);
if(num>=1000000){
    num/=1000000;
    getCview=`${num.toPrecision(2)}M`
}else if(num>=1000){
    num/=1000;
    getCview=`${num.toPrecision(2)}K`
}else{
    getCview=getView;
}
document.getElementById("cview").innerHTML=getCview;
let getCupload=prompt("enter channel upload duration");
document.getElementById("cupload").innerHTML=`${getCupload} months ago`;