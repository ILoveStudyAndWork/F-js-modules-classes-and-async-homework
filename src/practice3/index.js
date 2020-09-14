export const getPoetry =() => {
    const url = 'https://v1.jinrishici.com/all.json';

    return  fetch(url)
        .then(response => response.json())
        .then(data => {
            let result = [];
            result.push(data.origin);
            result.push(data.author);
            result.push(data.content);
            return result
        })

}
