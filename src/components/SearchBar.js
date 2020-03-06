import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const SearchBar = () => {
    return (
        <div>
            <InputGroup className="mb-3 search-bar">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Search Movies"
                />
                <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">
                        <i className="fas fa-search-plus"></i>
                    </InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default SearchBar