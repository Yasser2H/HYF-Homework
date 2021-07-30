// Getting into promises
const URL = "https://api.github.com/search/repositories?q=user:";

async function getRepoDataFromGitHub(username) {
    const userProfile = URL + username;
    await fetch(userProfile)
        .then((response) => response.json())

        .then((data) => {
            console.log(data);

            const repoList = document.querySelector("ul");

            const repoListItem = document.createElement("li");
            repoList.appendChild(repoListItem);

            const h2Heading = document.createElement("h2");
            h2Heading.innerHTML = username + " Repositories";
            repoListItem.appendChild(h2Heading);

            const allUserRepos = document.createElement("ul");
            repoListItem.appendChild(allUserRepos);

            data.items.forEach(repo => {
                const repos = document.createElement("li");
                repos.innerHTML = repo.name + ": " + repo.html_url;
                allUserRepos.appendChild(repos);
            });
        }).catch((err) => {
            console.log(err);
        })
}

function fetchAllReposAtTheSameTime() {
    Promise.all([getRepoDataFromGitHub("semih1239"),
        getRepoDataFromGitHub("OlenaKasian"),
        getRepoDataFromGitHub("BikramRawat")
    ]);
}

fetchAllReposAtTheSameTime();

