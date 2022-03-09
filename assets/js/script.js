const repoList = document.querySelector("ul");
const fetchButton = document.getElementById("fetch-button");


//Create a getApi function that is called when the fetchButton is clicked

const getApi = (requestUrl) => {
  requestUrl = "https://api.github.com/users/flx1derrick/repos";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (const key of Object.keys(data)) {
               // console.log(`${data[key].html_url}`);
               let li = document.createElement('li')
               li.innerHTML +=  '<a href="' + data[key].html_url + '">' + data[key].html_url +'</a>'
               repoList.appendChild(li);
      }});
}

fetchButton.addEventListener("click", getApi);
