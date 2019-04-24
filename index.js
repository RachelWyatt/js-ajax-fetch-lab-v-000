

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'eef6b52689fbdc3f6c23712ac8a966b00925c000';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/RachelWyatt/${repo}`, {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue(title, body) {
  const url = `https://github.com/RachelWyatt/js-ajax-fetch-lab-v-000/issues`
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const body = JSON.stringify( { 'title': issueTitle, 'body': issueBody } )
  fetch(url, {
    method: 'post',
    mode: 'cors',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: body,
  }).then(getIssues)

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
    fetch(https://github.com/RachelWyatt/js-ajax-fetch-lab-v-000/issues, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then((response) => {
    return response.json()
  }).then(showIssues)
}
}
