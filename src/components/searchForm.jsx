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

                <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg></button>
            </form>
        </>
    )
}

export default SearchForm;