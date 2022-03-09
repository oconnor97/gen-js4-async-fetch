const repoList = document.querySelector("ul");
const fetchButton = document.getElementById("fetch-button");
const myRepos = "https://api.github.com/users/flx1derrick/repos";

//Create a getApi function that is called when the fetchButton is clicked

const getApi = (requestUrl) => {
  requestUrl = myRepos;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (const key of Object.keys(data)) {
               let li = document.createElement('li')
               li.innerHTML +=  '<a href="' + data[key].html_url + '">' + data[key].html_url +'</a>'
               repoList.appendChild(li);
      }});
}

fetchButton.addEventListener("click", getApi);
