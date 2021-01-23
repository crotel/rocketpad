var minify = require("html-minifier").minify;
document.addEventListener("DOMContentLoaded", async () => {
  const node = await window.Ipfs.create({ repo: "ipfs-" + Math.random() });
  window.node = node;
  document.querySelector("header").setAttribute("loaded", "true");
  document.querySelector("main").setAttribute("loaded", "true");
  document.querySelector(".loader").setAttribute("loaded", "true");
});
async function generate() {
  var promise = await fetch("./template.ejs");
  var template = await promise.text();
  var promise = await fetch("./css/markdown.css");
  var css = await promise.text();

  var quillhtml = window.quill.container.firstChild.innerHTML;
  var ejs = window.ejs;
  var output = ejs.render(template, {
    css: css,
    html: quillhtml,
    title: document.querySelector("#title").value,
    description: document.querySelector("#description").value
  });
  output = minify(output, {
    useShortDoctype: true,
    removeComments: true,
    collapseWhitespace: true,
    minifyJS: true,
    minifyCSS: true
  });
  return output;
}
async function copy() {
  const { cid } = await window.node.add(await generate());
  await window.node.pin.add(cid.string);
  navigator.clipboard
    .writeText(`https://gateway.ipfs.io/ipfs/${cid.string}`)
    .then(
      function() {
        console.log("Copied!");
        document.getElementById("copybtn").innerHTML = "Copied to clipboard!";
        setTimeout(function() {
          document.getElementById("copybtn").innerHTML = "Copy Link";
        }, 3000);
      },
      function() {
        console.error("Failed to copy");
        document.getElementById("copybtn").innerHTML = "Failed to copy!";
        setTimeout(function() {
          document.getElementById("copybtn").innerHTML = "Copy Link";
        }, 3000);
      }
    );
}
async function preview() {
  const { cid } = await window.node.add(await generate());
  window.open(`https://gateway.ipfs.io/ipfs/${cid.string}`);
}
async function downloadHTML() {
  window.download(
    await generate(),
    Math.floor(Date.now() / 1000) + ".html",
    "text/html"
  );
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
