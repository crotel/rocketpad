var minify = require("html-minifier").minify;
document.addEventListener("DOMContentLoaded", async () => {
  const node = await window.Ipfs.create({ repo: "ipfs-" + Math.random() });
  window.node = node;
  document.querySelector("header").setAttribute("loaded", "true");
  document.querySelector("main").setAttribute("loaded", "true");
  document.querySelector(".loader").setAttribute("loaded", "true");
});
async function generate() {
  const promise = await fetch('https://api.com/values/1');
const template = await promise.text();
  var quillhtml = window.quill.container.firstChild.innerHTML;
 var ejs = window.ejs
 
 ejs.render(template,{})
  const { cid } = await window.node.add("Hello world!");
}

function autosave() {
  if (typeof Storage !== "undefined") {
    setInterval(function() {
      localStorage.setItem("body", JSON.stringify(quill.getContents()));
    }, 3000);
  } else {
    console.error("Autosave not supported on this browser!");
  }
}
function load() {
  if (typeof Storage !== "undefined") {
    if (localStorage.getItem("body")) {
      quill.setContents(JSON.parse(localStorage.getItem("body")));
    }
  } else {
    console.error("Autosave not supported on this browser!");
  }
}
