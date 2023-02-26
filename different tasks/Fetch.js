function getUserData(callback) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => callback(json))
        .catch(error => console.log(error))
}

function filterUsers(array) {
    array.filter(el => el.id >= 5).forEach(el => console.log(el.name));
}

getUserData(filterUsers);

