(() => {
  const baseURL =
    "https://api.nasa.gov/planetary/apod?api_key=m7PCOQhc96nYHYqI1Yg0CnbTsW2ZFdrrSJqoketz";
  const apiKey = "m7PCOQhc96nYHYqI1Yg0CnbTsW2ZFdrrSJqoketz";

  const getImage = (cllbck) =>
    fetch(baseURL)
      .then((data) => data.json())
      .then(cllbck);

  function showImage(data) {
    const img = new Image();
    img.src = data.url;
    img.id = "space-image";
    img.classList.add("box-shadow");
    img.onload = function () {
      document.getElementById("load-animation").remove();
      document.getElementById("image-frame").appendChild(img);
      document.getElementById("explanation").textContent = data.explanation;
      document.getElementById("image-title").textContent = data.title;
    };
  }

  window.onload = () => getImage(showImage);
})();
