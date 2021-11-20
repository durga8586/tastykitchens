import {BsFilterLeft} from 'react-icons/bs'

import './index.css'

const SortBy = props => {
  const {sortByOptions, activeOptionId, changeSortBy} = props

  const onChangeSortBy = event => {
    changeSortBy(event.target.value)
  }

  return (
    <div className="sort-by-header">
      <div className="sort-by-container">
        <BsFilterLeft className="sort-by-icon" />
        <p className="sort-by">Sort By</p>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortBy}
        >
          {sortByOptions.map(eachOption => (
            <option
              key={eachOption.optionId}
              value={eachOption.value}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SortBy
