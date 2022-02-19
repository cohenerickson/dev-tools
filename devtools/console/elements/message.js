export default function (data) {
  let w = document.getElementById("devtools").contentWindow.document;
  let div = document.createElement("div");
  div.classList.add("message");
  let message = data.message.join(" ").split("<").join("&lt;").split(">").join("&gt;") || data.message;
  let init = data.init.split("<").join("&lt;").split(">").join("&gt;") || data.init;
  init = init.split("/")[init.split("/").length-1];
  div.innerHTML = `<span>${message.split("\n").join("<br>").split(" ").join("&nbsp;")}</span><span class="right">${init}</span>`;
  let messages = w.getElementById("console-box");
  messages.appendChild(div);
}