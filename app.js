// Declaration of elements
const gifForm = document.querySelector('#form');
const imgBox = document.querySelector('#imgbox');
const RmvButton = document.querySelector('#rmBtn')
const gifInput = document.querySelector('#gifInput');

//  Handle form submission
gifForm.addEventListener('submit', async function(evt){
    evt.preventDefault();
    
    const gifTerm = gifInput.value; // Acquires user's input.
        // Check for applicable unforseen error
    try {
        const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${gifTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);

        //  make ajax call abd clear search box.
        const imgUrl = res.data.data
        let UrlLength = imgUrl.length;
        let randomidx = Math.floor(Math.random() * UrlLength);
        
        const gifUrl = imgUrl[randomidx].images.original.url; 
            
            randomGif(gifUrl);  
    
    } catch (error) {
        console.log('Error fetching data please try another keyword', error)
    }
        gifInput.value = ''; // clears terms
})

    //  create and assign elements to ajax output.
function randomGif(term) {
    const gifImg = document.createElement('img');
    gifImg.setAttribute('class', 'img-fluid col-3')
    gifImg.src = term;
    imgBox.appendChild(gifImg);
}
    // Remove button
RmvButton.addEventListener('click', function(){
    imgBox.innerHTML = "";
})
