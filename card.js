const add=document.getElementById("add");
add.addEventListener("mouseover",()=>{
    add.value="Add new +";
})
add.addEventListener("mouseleave",()=>{
    add.value="Add new";
})
add.addEventListener("click",()=>{
    let n=prompt("enter name of the channel:");
    let t=prompt("enter title of the video");
    let i=prompt("enter link for thumbnail image");
    let d=prompt("enter duration of the video (mm:ss)");
    let v=prompt("enter the number of views");
    let u=prompt("enter how many months ago the video was apploaded")
    newCard(n,t,i,d,v,u);
})
function newCard(n,t,i,d,v,u){
    const cont=document.body.firstElementChild;
    console.log(cont.children[0]);
    const card=document.createElement("div");
    card.className="card";
    const thumbnail=document.createElement("div");
    thumbnail.className="thumbnail";
    const image=document.createElement("img");
    const duration=document.createElement("span");
    image.src=`${i}`;
    duration.innerHTML=`${d}`;
    thumbnail.appendChild(image);
    thumbnail.appendChild(duration);
    card.appendChild(thumbnail);
    const content=document.createElement("div");
    content.className="content";
    const title=document.createElement("h1");
    title.innerHTML=`${t}`;
    const contentDiv=document.createElement("div");
    const cname=document.createElement("span");
    cname.innerHTML=`${n}`
    const middot=document.createElement("span");
    const view=document.createElement("span");
    if(v>=1000000){
        v/=1000000;
        view.innerHTML=`${v.toPrecision(2)} M`;
    }else if(v>=1000){
        v/=1000;
        view.innerHTML=`${v.toPrecision(2)} K`;
    }else{
        view.innerHTML=`${v}`;
    }
    const upload=document.createElement("span");
    upload.innerHTML=`${u} months ago`
    contentDiv.appendChild(cname);
    contentDiv.appendChild(middot);
    contentDiv.appendChild(view);
    contentDiv.appendChild(middot);
    contentDiv.appendChild(upload);
    content.appendChild(title);
    content.appendChild(contentDiv);
    card.appendChild(content);
    cont.appendChild(card);
}