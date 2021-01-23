var minify = require("html-minifier").minify;
document.addEventListener("DOMContentLoaded", async () => {
  const node = await window.Ipfs.create({ repo: "ipfs-" + Math.random() });
  window.node = node;
  document.querySelector().removeAttribute("disabled");
  document.querySelector().removeAttribute("disabled");
});
async function generate(){
   var html = window.quill.container.firstChild.innerHTML
}