var repoList = document.querySelector("ul");
var fetchButton = document.getElementById("fetch-button");

//Create a getApi function that is called when the fetchButton is clicked

function getApi() {
  // Insert the API url to get a list of your repos
  var requestUrl = " https://api.github.com/users/vdecyatnik/repos";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //looping over the fetch response and inserting the URL of your repos into a list
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].html_url);
        let liEl = document.createElement("li");
        let htmlurl = data[i].html_url;
        liEl.textContent = htmlurl;

        repoList.append(liEl);
      }
      //Create a list element
      //Set the text of the list element to the JSON response's .html_url property
      //Append the li element to the id associated with the ul element.
    });
}

fetchButton.addEventListener("click", getApi);
