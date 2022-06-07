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

                // Assigning the searched word to the Dom element 'word'
                word.textContent = `${data[0].word}`;

                // Assigning the searched word phonetic to the Dom element 'phonetic'
                phonetic.textContent = `${data[0].phonetic}`;

                // Assigning the searched word noun to the Dom element 'nounDetails'


                // let test1 = item.meanings[0].partOfSpeech;
                // console.log(typeof test1);

                if (data[0].meanings[0].partOfSpeech == 'noun') {

                    nounDetails.textContent = data[0].meanings[0].definitions[0].definition;

                } else if (data[1].meanings[0].partOfSpeech == 'noun') {

                    nounDetails.textContent = data[1].meanings[0].definitions[0].definition;

                } else {
                    nounDetails.textContent = 'Data not found'
                };

                if (data[0].meanings[2].partOfSpeech == 'adjective') {

                    adjectiveDetails.textContent = data[0].meanings[2].definitions[0].definition;

                } else if (data[1].meanings[2].partOfSpeech == 'adjective') {

                    adjectiveDetails.textContent = data[1].meanings[2].definitions[0].definition;

                } else {
                    nounDetails.textContent = 'Data not found'
                };

                if (data[0].meanings[1].partOfSpeech == 'verb') {

                    verbDetails.textContent = data[0].meanings[1].definitions[0].definition;

                } else if (data[1].meanings[1].partOfSpeech == 'verb') {

                    verbDetails.textContent = data[1].meanings[1].definitions[0].definition;

                } else {
                    nounDetails.textContent = 'Data not found'
                };



            })
            .catch((error) => console.log(error));

    };

});

