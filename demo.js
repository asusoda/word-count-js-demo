const wordsElement = document.querySelector('textarea');
wordsElement.addEventListener('input', function () {
  const words = wordsElement.value.trim().split(/\s+/);
  let wordCount = 0;
  if (wordsElement.value.trim().length > 0) {
    wordCount = words.length;
  }
  const countElement = document.getElementById("wordcount");
  const goal = Number(document.querySelector("input").value);
  countElement.innerText = wordCount + "/" + goal;
  const indicatorElement = document.querySelector("p");
  if (wordCount >= goal) {

    indicatorElement.style.color = "green";
  } else {
    indicatorElement.style.color = "red";
  }
});
