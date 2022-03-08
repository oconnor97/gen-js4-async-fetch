let repoList = document.querySelector("ul");
let fetchButton = document.getElementById("fetch-button");
let li = document.createElement('li');

//Create a getApi function that is called when the fetchButton is clicked

function getApi() {
  // Insert the API url to get a list of your repos
  var requestUrl = "https://api.github.com/users/flx1derrick/repos";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //looping over the fetch response and inserting the URL of your repos into a list

      for (const key of Object.keys(data)) {
                console.log(`${data[key].html_url}`);
                
      }
      //Create a list element

      //Set the text of the list element to the JSON response's .html_url property

      //Append the li element to the id associated with the ul element.

    });
}

fetchButton.addEventListener("click", getApi);
