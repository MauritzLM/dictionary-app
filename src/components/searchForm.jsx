/* eslint-disable react/prop-types */

import { useState } from "react";

function SearchForm({ handleSearch, handleError }) {

    const [word, setWord] = useState('');

    function handleChange(event) {
        setWord(event.target.value)
    }

    // add api request function on form submit*
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const form = event.target;

            let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
                { method: form.method })

            let result = await response.json();

            handleSearch(result);

            handleError(false);

        }
        catch (error) {
            console.log(error)
            handleError(true);
        }

    }

    return (
        <>
            <form method="get" className="search-form" onSubmit={(e) => handleSubmit(e)}>

                <label htmlFor="search-word">
                    <input name="search-word" type="text" onChange={(e) => handleChange(e)} />
                </label>

                <button>search</button>
            </form>
        </>
    )
}

export default SearchForm;