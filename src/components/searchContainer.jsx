import { useState } from "react";
import SearchForm from "./searchForm";
import WordInfo from "./wordInfo";

function SearchContainer() {

    // keep word state here and pass it to word info
    const [searchedWord, setSearchedWord] = useState([]);

    const [error, setError] = useState(false);

    function handleSearch(word) {

        setSearchedWord(word);
    }

    function handleError(isError) {
        setError(isError)
    }

    return (
        <>
            <SearchForm handleSearch={handleSearch} handleError={handleError} />
            <WordInfo word={searchedWord} error={error} />
        </>
    )
}

export default SearchContainer;