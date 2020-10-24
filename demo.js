// Select the first <textarea> element on the page and store it in wordsElement.
const wordsElement = document.querySelector('textarea');

/* Listen for input events on the <textarea> element:

In web browsers, objects called 'events' are created whenever something like the user clicking
or the page loading occurs. These are useful because JavaScript code can use them to be notified
of when important things happen instead of the code, say, waiting in a loop (which is less 
efficient).

In our case, we want to react to the user typing into the text area. When you type into a text
area, events named 'input' are created (often the term 'fired' is used). By calling the
`addEventListener` method on the wordsElement (the text area), we are telling the browser that
we want to react to 'input' events that are fired from the text area. The code that responds to
the event is the function that is the second argument. */

wordsElement.addEventListener('input', function () {

  /* Grab the text the user has entered into the text area so far, remove extra whitespace at the
  beginning and end, then split the string at every group of whitespace characters. This results
  in an array of words. */
  const words = wordsElement.value.trim().split(/\s+/);
  
  let wordCount = 0;
  if (wordsElement.value.trim().length > 0) {
    /* This code runs only if the text in the text area with whitespace removed is non-empty because
    "".split(/\s+/) is [""] (so we would count a word when there is none). */
    wordCount = words.length;
  }
  
  /* `countElement` is the element in the page with the attribute id = "wordcount". This element is
  used to display the word count. */
  const countElement = document.getElementById("wordcount");
  
  /* Get the first (which happens to be the only) <input> element on the page. Get the word count
  goal that is in the <input> element by using the `value` property. Since that value will be a
  string, we convert it to a number by calling `Number`. */
  const goal = Number(document.querySelector("input").value);
  
  /* Set the text in `countElement`. We add together numbers and strings here; the numbers are converted
  to strings, and the strings are appended together. */
  countElement.innerText = wordCount + "/" + goal;
  
  /* Get the <p> element on the web page. We use this element to show when the user reaches their word
  count goal. */
  const indicatorElement = document.querySelector("p");
  
  if (wordCount >= goal) {
    // If we have reached the goal, turn the 'word count/goal words' text green!
    indicatorElement.style.color = "green";
  } else {
    // If we have not reached the goal, turn the 'word count/goal words' text red :(
    indicatorElement.style.color = "red";
  }
});
