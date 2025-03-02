function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayTexts() {
  const texts = ["Initializing Hacking", "Reading your Files", "Password files Detected", "Sending all passwords and personal files to server", "Start Hacking", "Cleaning up"];
  const cont = document.querySelector("div");
  for (const text of texts) {
    let para = document.createElement("p");
    para.classList.add("loading-text");
    para.classList.add("gen");
    para.innerText = text;
    cont.appendChild(para);
    setTimeout(()=> para.classList.remove("gen"),2000)
    await delay(Math.ceil(Math.random() * 7000));
    para.classList.remove("loading-text");
    para.style.opacity = "1";
    setTimeout(() => para.style.opacity = "0.5", 500); // Gradual dimming effect
    // Wait for 1-7 seconds
  }
}

displayTexts();
