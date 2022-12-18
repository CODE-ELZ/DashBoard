

 let changeCss = document.getElementById("cssStyle");
 let cssFile = "css/styles.css";
 let changeCss2 = document.getElementById("cssStyle");
 let cssFile2 = "css/style.css";

 function moded() {
  changeCss.setAttribute("href", cssFile);
 document.getElementById("lMode").innerHTML = "Dark Mode";
}
function model() {
  changeCss2.setAttribute("href", cssFile2);
 document.getElementById("lMode").innerHTML = "Light Mode";
}



const wrapper = document.getElementById("bubble-wrapper")

const animateBubble = x => {
    const bubble = document.createElement("div");

    bubble.className = "bubble";

    bubble.style.left = `${x}px`;

    wrapper.appendChild(bubble);

    setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX);





