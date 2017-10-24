// READ the giphy API docs: https://developers.giphy.com/
const giphy_endpoint = 'http://api.giphy.com/v1'

//Obtain giphy api key
const giphy_api_key = 'XwuJ4Tx8IGdOpun2S2YQ1IuHmAkVS9ag'

//select elements from the DOM
const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-form input')
const results = document.querySelector('.results')

//We will use axios to help manage our promises and we will use it in a function called getGifs

function getGifs(term, path, callback){

    axios(`${giphy_endpoint}/gifs/${path}?api_key=${giphy_api_key}&q=${term}`)
    .then(function(res){
        //console.log(res.data.data)

        callback(res.data.data)
    })
}

function displayManyGifs(response){
    response.forEach(function(gif){
        const gif_url = gif.images.preview_gif.url
        results.innerHTML +=`
        <img class="image" src="${gif_url}">
        `
    });
}

searchForm.addEventListener('submit', function(event){
    event.preventDefault()

    if(searchInput.value==='') return

    results.innerHTML = ''

    getGifs(searchInput.value, 'search', displayManyGifs)
})