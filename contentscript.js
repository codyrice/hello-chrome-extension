console.log("test");

addSlackPane();

function addSlackPane () {
  // create a new div element
  var slackPane = document.createElement("div");

  // define attributes for the slackPane
  slackPane.id = "slackPane";


  // and give it some content
  var newContent = document.createTextNode("Hi there and greetings!");
  // add the text node to the newly created div
  slackPane.appendChild(newContent);

  slackPane.innerHTML = '<iframe src="https://slack.com" style="border: 0pt none ;'+
                    'width: 100%; height: 100%;" scrolling="no"></iframe>';

  // add the newly created element and its content into the DOM
  var firstElement = document.body.firstElementChild;
  document.body.insertBefore(slackPane, firstElement);

  // set styling for addSlackPane
  styleSlackPane();
}

function styleSlackPane () {
  var slackPane = document.getElementById("slackPane");
  slackPane.style.position = "fixed";
  slackPane.style.width = "760px";
  slackPane.style.height = "100%";
  slackPane.style.zIndex = "999999";
  slackPane.style.backgroundColor = "red";
  slackPane.style.right ="0";
}
