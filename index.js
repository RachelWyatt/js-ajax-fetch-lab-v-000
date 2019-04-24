const token = eef6b52689fbdc3f6c23712ac8a966b00925c000 

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
  //use this function to create an issue based on the values input in index.html
  const postData = {
    title: title
    body: body
  };
 
  fetch(
    'https://github.com/RachelWyatt/js-ajax-fetch-lab-v-000/issues',
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => console.log(res));
  }

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
