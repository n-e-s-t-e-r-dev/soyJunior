if (document.getElementById("ButtonModal")) {
  var modal = document.getElementById("myModal");
  var button = document.getElementById("ButtonModal");
  var span = document?.getElementById("close");
  var body = document.getElementById("body");

  button.onclick = () => {
    modal.style.display = "block";
    body.style.position = "relative";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    console.log("ver mas");
  };

  span.onclick = () => {
    modal.style.display = "none";
    body.style.position = "fixed";
    body.style.height = "auto";
    body.style.overflow = "visible";
  };
}
