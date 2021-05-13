(() => {
  const baseURL =
    "https://api.nasa.gov/planetary/apod?api_key=m7PCOQhc96nYHYqI1Yg0CnbTsW2ZFdrrSJqoketz";
  const apiKey = "m7PCOQhc96nYHYqI1Yg0CnbTsW2ZFdrrSJqoketz";

  const getImage = (cllbck) =>
    fetch(baseURL)
      .then((r) => r.json())
      .then(cllbck);

  function showImage(data) {
    const img = new Image();
    img.src = data.url;
    img.onload = function () {
      document.getElementById("load-animation").remove();
      document.getElementById("image-frame").appendChild(img);
      document.getElementById("explanation").textContent = data.explanation;
      document.getElementById("image-title").textContent = data.title;
    };

    console.log(data);
  }

  window.onload = () => getImage(showImage);
})();
