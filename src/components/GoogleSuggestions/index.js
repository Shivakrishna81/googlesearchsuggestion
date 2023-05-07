// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {SearchInput: ''}

  onChangeSearchInput = event => {
    this.setState({SearchInput: event.target.value})
  }

  displaySuggestion = suggestion => {
    this.setState({SearchInput: suggestion})
  }

  render() {
    const {SearchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLower().includes(SearchInput.toLower()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="container2">
          <div className="container3">
            <img
              className="search-img"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />

            <input
              type="search"
              className=""
              onChange={this.onChangeSearchInput}
              placeholder="Search Google"
              value={SearchInput}
            />
          </div>

          <ul>
            {searchResults.map(each => (
              <SuggestionItem
                details={each}
                key={each.id}
                displaySuggestion={this.displaySuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
