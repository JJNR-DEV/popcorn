import React from 'react'
import { connect } from 'react-redux'
import { fetchSearchedMovie, displaySearchResults } from '../actions'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import SearchResults from './SearchResults'

class SearchBar extends React.Component {
    // class level state as you only want the name of the movie
    constructor(props){
        super(props)
        this.state = {
            movie: ''
        }
    }

    // when user is typing 
    handleInputChange(e){
        // state for when form submit
        this.setState({
            movie: e.target.value
        })

        // search user input directly from input change as state would not be ready straight away
        e.target.value === '' ? this.props.fetchSearchedMovie(this.state.movie) : this.props.fetchSearchedMovie(e.target.value)
        // display results
        this.props.displaySearchResults(true)
    }

    searchMovie = e =>{
        e.preventDefault()
        // search user input
        if(this.state.movie === ''){
            return (
                <div>Please write something</div>
            )
        }

        this.props.fetchSearchedMovie(this.state.movie)
        // display results
        this.props.displaySearchResults(true)
    }

    render(){
        return (
            <div>
                <Form onSubmit={e => {this.searchMovie(e)}}>
                    <InputGroup className="mb-3 search-bar">
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Search Movies"
                            value={this.state.movie}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        <InputGroup.Append>
                            <Button id="basic-addon2" type="submit">
                                <i className="fas fa-search-plus"></i>
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
                { this.props.displayResults.displayResults ? <SearchResults results={this.props.searchedMovie} /> : null }
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        searchedMovie: state.searchedMovie,
        displayResults: state.displaySearchResults
    }
}

export default connect(mapStateToProps, { fetchSearchedMovie, displaySearchResults })(SearchBar)