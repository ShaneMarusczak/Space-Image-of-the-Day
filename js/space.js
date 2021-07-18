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
      document.getElementById("date-display").textContent = getDate(data.date);
      var rgb = new ColorFinder().getMostProminentColor(img);
      document.getElementsByTagName("html")[0].style.backgroundColor =
        "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
    };
  }

  function getDate(date) {
    const splitDate = date.split("-");
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return (
      monthNames[Number(splitDate[1]) - 1] +
      " " +
      splitDate[2] +
      ", " +
      splitDate[0]
    );
  }

  window.onload = () => getImage(showImage);
})();
