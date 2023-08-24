/* eslint-disable react/prop-types */

function WordInfo({ word, error, handleSearch }) {

    // display info of searched word
    console.log(word);

    // function to get synonym info
    async function handleSynonymClick(synonym) {
        try {
            let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${synonym}`)

            let result = await response.json();

            handleSearch(result);
        }
        catch (error) {
            console.log(error)
        }
    }
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
                <section className="word-info">
                    <h1>{word[0].word}</h1>

                    {/* phonetics */}
                    <figure>
                        <figcaption>{word[0].phonetics.length ? "Audio" : "No audio available"}</figcaption>

                        {word[0].phonetics?.map((item, index) => {
                            if (item.audio) {
                                return <audio key={`audio-${index}`} controls src={item.audio}></audio>
                            }
                        })}
                    </figure>

                    {/* display all meanings with their definitions */}
                    {word[0]["meanings"].map((meaning, index) => {
                        return <div className="meaning-container" key={index}>

                            <h3>{meaning.partOfSpeech}</h3>

                            <ul>
                                {meaning["definitions"].map((item, i) => {
                                    return <li key={`${i}-def`}>{item.definition}</li>
                                })
                                }
                            </ul>

                            <div className="synonyms-container">
                                {meaning.synonyms.length ? <h4>Synonyms</h4> : ''}
                                <div className="synonyms">
                                    {meaning.synonyms?.map((synonym, i) => {
                                        // search for synonym definition
                                        return <a key={`${i}-s`} href="#" onClick={() => handleSynonymClick(synonym)}>{synonym}</a>

                                    })}
                                </div>
                            </div>
                        </div>
                    })
                    }

                    <p>Source</p>

                    <div className="source-container">
                        <a href={`${word[0].sourceUrls[0]}`} target="_blank" rel="noreferrer">{word[0].sourceUrls[0]}</a>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></svg>
                    </div>

                </section>
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