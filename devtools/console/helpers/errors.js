

export default function (e) {
  let window = document.getElementById("devtools").contentWindow.document;
  let count = parseInt(window.getElementById("label-x").innerText);
  window.getElementById("label-x").innerHTML = "<img src='./assets/icons/x.svg'>" + (count+1);
  console.error(e.error.stack);
}