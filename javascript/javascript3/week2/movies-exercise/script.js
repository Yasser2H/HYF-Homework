// Movies exercise
const URL = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const arrayOfBadMovies = data.filter(m => m.rating <= 5);
        const arrayOfBadMoviesSinceDate = arrayOfBadMovies.filter(m => m.year >= 2000)
        console.log("----------------- 1st Task -----------------");
        console.log(arrayOfBadMovies);
        console.log(arrayOfBadMoviesSinceDate);
    });


// Promise that resolves after set time
console.log("----------------- 2nd Task -----------------")

function resolveAfter(setTime) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), setTime * 1000);
    });
}

async function asyncCall(setTime) {
    console.log("Start calling..");
    await resolveAfter(setTime);
}

asyncCall(8).then(() => {
    console.log("I am called asynchronously"); // logged out after 8 seconds
});


// Rewrite navigator.geolocation.getCurrentPosition to promises.
function getCurrentLocation() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

getCurrentLocation()
    .then((position) => {
        console.log(position);
    })
    .catch((err) => {
        console.error(err.message);
    });



const APIUrl = "https://official-joke-api.appspot.com/random_joke";

// Fetching and waiting using promises
function getDataPromise() {
    new Promise((resolve) =>
        setTimeout(() =>
                fetch(APIUrl)
                    .then(res => res.json())
                    .then(data => resolve(data)),
            3000)).then(data => {
        console.log("----------------- 3rd Task - Promises -----------------");
        console.log("Data fetched using Promise:");
        console.log(data.setup);
        console.log(data.punchline);
    });
}

// Fetching and waiting using async/await
function getDataAsync() {
    setTimeout(async () => {
        const response = await fetch(APIUrl);
        const data = await response.json();
        console.log("----------------- 3rd Task - Async/Await -----------------");
        console.log("Data fetched using async/await:");
        console.log(data.setup);
        console.log(data.punchline);
    }, 2000);
}

getDataPromise();
getDataAsync();


