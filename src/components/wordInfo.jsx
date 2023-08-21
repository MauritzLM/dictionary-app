/* eslint-disable react/prop-types */

function WordInfo({ word, error }) {

    // display info of searched word
    console.log(word);

    // add phonetics*

    // add origin*

    // display all info in meanings array*

    // empty search
    if (error) {
        return (
            <>
                <h2>Please enter a word</h2>
            </>
        )
    }
    // word returned
    if (word.length) {
        return (
            <>
                <h2>{word[0].word}</h2>
                <p>{word[0].meanings[0].definitions[0].definition}</p>
            </>
        )
    }
    // no word found
    else {
        return (
            <>
                <h2>{word.title}</h2>
                <p>{word.message}</p>
            </>
        )

    }

}


export default WordInfo;