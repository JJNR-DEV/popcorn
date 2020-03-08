import React from 'react'
import { connect } from 'react-redux'
import { fetchSearchedMovie, displaySearchResults } from '../actions'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import SearchResults from './SearchResults'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            movie: ''
        }
    }

    handleInputChange(e){
        this.setState({
            movie: e.target.value
        })
    }

    searchMovie = e =>{
        e.preventDefault()
        this.props.fetchSearchedMovie(this.state.movie)
        this.props.displaySearchResults(true)
    }

    render(){
        // console.log(this.props)
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