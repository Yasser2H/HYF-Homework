
const API_URL = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function fetchTodoList() {
    return fetch(API_URL).then(response => response.json());
}

export default fetchTodoList;
