var minify = require("html-minifier").minify;
document.addEventListener("DOMContentLoaded", async () => {
  const node = await window.Ipfs.create({ repo: "ipfs-" + Math.random() });
  window.node = node;
  document.querySelector("header").setAttribute("loaded", "true");
  document.querySelector("main").setAttribute("loaded", "true");
  document.querySelector(".loader").setAttribute("loaded", "true");
});
async function generate() {
  var html = window.quill.container.firstChild.innerHTML;
}

function autosave() {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("body", JSON.stringify(quill.getContents()));
  } else {
    console.error("Autosave not supported on this browser!");
  }
}
function load() {
  if (typeof Storage !== "undefined") {
    quill.setContents(JSON.parse(localStorage.getItem("body")));
  } else {
    console.error("Autosave not supported on this browser!");
  }
}
