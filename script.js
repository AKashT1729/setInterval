let timeStart = null;
const starts = () => {
  const date = new Date();
  document.querySelector("#time").innerHTML =  date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
};

document.querySelector("#start").addEventListener("click", function () {
  if (!timeStart) {
    timeStart = setInterval(starts, 1000);
  }
});

document.querySelector("#stop").addEventListener("click", function () {
  if (timeStart) {
    clearInterval(timeStart);
    timeStart = null;
  }

  console.log("stop clicked");
});
