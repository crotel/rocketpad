var minify = require("html-minifier").minify;
document.addEventListener("DOMContentLoaded", async () => {
  const node = await window.Ipfs.create({ repo: "ipfs-" + Math.random() });
  window.node = node;
  document.querySelector("#copybtn").removeAttribute("disabled");
  document.querySelector("#previewbtn").removeAttribute("disabled");
  document.querySelector("#downloadbtn").removeAttribute("disabled");
});
async function generate() {
  var html = window.quill.container.firstChild.innerHTML;
}
