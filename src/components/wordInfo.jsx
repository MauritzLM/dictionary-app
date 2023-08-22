/* eslint-disable react/prop-types */

function WordInfo({ word, error }) {

    // display info of searched word
    console.log(word);



    // empty search
    if (error) {
        return (
            <>
                <h2>Please enter a word</h2>
            </>
        )
    }
    // word returned (display all meanings and definitions)
    if (word.length) {
        return (
            <>
                <h2>{word[0].word}</h2>

                {/* phonetics */}
                <figure>
                    <figcaption>{word[0].phonetics.length ? `Listen to audio` : "No audio available"}</figcaption>
                    <audio controls src={word[0].phonetics.length ? `${word[0].phonetics[0].audio}` : ""}>
                    </audio>
                </figure>

                {/* display all meanings with their definitions */}
                {word[0]["meanings"].map((meaning, index) => {
                    return <div key={index}>

                        <h3>{meaning.partOfSpeech}</h3>

                        {meaning["definitions"].map((item, i) => {
                            return <p key={`${i}-def`}>{item.definition}</p>

                            // add synonyms*
                        })
                        }
                    </div>
                })}

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