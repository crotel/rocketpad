var minify = require('html-minifier').minify;
document.addEventListener("DOMContentLoaded", async () => {
  const node = await window.Ipfs.create({ repo: "ipfs-" + Math.random() });
  window.node = node;
  document.getElementById("copy").removeAttribute("disabled");
  document.getElementById("preview").removeAttribute("disabled");
});