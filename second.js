document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('message', function (event) {
    if (event.origin !== "http://127.0.0.1:8080") return;
      console.log("受け取ったevent: ", event);
      document.getElementById("text").innerText = event.data;
  });
});
