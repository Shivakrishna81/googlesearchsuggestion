// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, displaySuggestion} = props
  const {suggestion} = details

  const onClickSuggestion = () => {
    displaySuggestion(suggestion)
  }

  return (
    <li>
      <div className="div">
        <p>{suggestion}</p>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onClick={onClickSuggestion}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
