let searchInput = document.getElementById('search-input');
let word = document.querySelector('.word');
let phonetic = document.querySelector('.phonetic');
let nounDetails = document.querySelector('.noun-details');
let adjectiveDetails = document.querySelector('.adjective-details');
let verbDetails = document.querySelector('.verb-details');
let main = document.querySelector('.main');








// Keydown event for SearchInput
searchInput.addEventListener('keydown', (e) => {

    if (e.key == 'Enter') {

        // Dictionary Api
        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
        fetch(url + `${searchInput.value}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);



            });

    };

});

