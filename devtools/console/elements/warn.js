export default function (data) {
  let w = document.getElementById("devtools").contentWindow.document;
  let div = document.createElement("div");
  div.classList.add("message");
  div.classList.add("warning");
  let message = data.message.join(" ").split("<").join("&lt;").split(">").join("&gt;") || data.message;
  let init = data.init.split("<").join("&lt;").split(">").join("&gt;") || data.init;
  init = init.split("/")[init.split("/").length-1];
  div.innerHTML = `<span class="right">${init}</span><span><img src="https://dev-tools.cohenerickson.repl.co/assets/icons/!.svg"/>${message.split("\n").join("<br>").split(" ").join("&nbsp;")}</span>`;
  let messages = w.getElementById("console-box");
  messages.appendChild(div);
  let count = parseInt(w.getElementById("label-!").innerText);
  w.getElementById("label-!").innerHTML = "<img src='https://dev-tools.cohenerickson.repl.co/assets/icons/!.svg'>" + (count+1);
}