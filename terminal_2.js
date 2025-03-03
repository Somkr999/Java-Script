const cont=document.getElementById("cont");
// let loadingText=cont.lastChild;
let dotCount = 0;

function blink(ele,text) {
    let t = setInterval(() => {
        dotCount = (dotCount + 1) % 4; // Cycle between 0 and 3
        ele.textContent = `${text}` + '.'.repeat(dotCount);
        
    }, 500); // Change the speed as needed
    return t;
}

async function delay(ms) {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve()
        }, ms);
    })
}

async function main() {
    let arr=["node 1","node 2","node 3","node 4","node 5"];
    for (const text of arr) {
        let para=document.createElement("p");
        para.innerHTML=text;
        cont.appendChild(para);
        console.log(cont);
        let t=await blink(para,text);
        await delay(Math.random()*7000)
        clearInterval(t);
        para.innerHTML=text;
    }
}

main();