export default function (data) {
  let w = document.getElementById("devtools").contentWindow.document;
  let div = document.createElement("div");
  div.classList.add("message");
  div.classList.add("warning");
  
  let message = (data.message.join(" ") || "").split("<").join("&lt;").split(">").join("&gt;");
  message = urlify(message);
  let init = (data.init || "").split("<").join("&lt;").split(">").join("&gt;");
  init = init.split("/")[init.split("/").length-1];
  message = message.split("\n").join("<br>").split(" ").join("&nbsp;");
  message = message.split("span&nbsp;class='link'").join("span class='link'");
  
  div.innerHTML = `<span class="right">${init}</span><span><img src='https://dev-tools.cohenerickson.repl.co/devtools/assets/icons/!.svg'>${message || "undefined"}</span>`;
  
  let messages = w.getElementById("console-box");
  messages.appendChild(div);
  
  let count = parseInt(w.getElementById("label-!").innerText);
  w.getElementById("label-!").innerHTML = "<img src='https://dev-tools.cohenerickson.repl.co/devtools/assets/icons/!.svg'>" + (count+1);
}

function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s,\)]+)/g;
  return text.replace(urlRegex, function(url) {
    return "<span class='link'>" + url.split("/")[url.split("/").length-1] + "</span>";
  });
}