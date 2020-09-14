export const getPoetry = async () => {
    const url = 'https://v1.jinrishici.com/all.json';
    let result = [];
    const data = await fetch(url)
        .then(response => response.json())
    result.push(data.origin);
    result.push(data.author);
    result.push(data.content);
    return result;



}
