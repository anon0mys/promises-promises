const fetchKanyeQuote = () => {
    return fetch("https://api.kanye.rest")
        .then(response => response.json())
        .then(data => {
            console.log("This is the kayne response data:")
            console.log(data)
            return data
        })
        // .then(data => { throw 'An error' })
        // .catch(reason => {
        //     console.log("This is the response error:")
        //     console.log(reason)
        // })
}

const fetchSuperheroName = () => {
    const url = "https://generator-z.herokuapp.com/api/v1/name?category=superhero"
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("This is the hero name response data:")
            console.log(data)
            return data
        })
}

export {fetchKanyeQuote, fetchSuperheroName}