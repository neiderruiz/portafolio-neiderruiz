const URL_API = process.env.REACT_APP_API_URL;
export const get = (url) => {
    return fetch(`${URL_API}${url}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .catch(error => console.log(error));
}

export const post = (url, data) => {
    return fetch(`${URL_API}${url}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .catch(error => console.log(error));
}