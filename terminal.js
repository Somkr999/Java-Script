function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function displayTexts() {
    const texts = ["Initializing Hacking...", "Reading your Files...", "Password files Detected...", "Sending all passwords and personal files to server...", "Start Hacking","Cleaning up..."];
    const cont=document.querySelector("div");
    for (const text of texts) {
      let para=document.createElement("p");
      para.innerText=text;
      cont.appendChild(para);
      await delay(Math.ceil(Math.random()*7000)); // Wait for 1-7 seconds
    }
  }
  
  displayTexts();