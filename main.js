alert("Selamat Datang di Press  Naturally");

const toggle = 500;
const blink = setInterval(function () {
  const bli = document.getElementById("area");
  bli.style.visibility = bli.style.visibility == "hidden" ? "" : "hidden";
}, toggle);
