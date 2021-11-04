import './index.css'

const Pagination = props => {
  const {activePage, onIncrementActivePage, onDecrementActivePage} = props

  const onClickLeftButton = () => {
    if (activePage > 1) {
      onDecrementActivePage(activePage)
    }
  }

  const onClickRightButton = () => {
    if (activePage < 4) {
      onIncrementActivePage(activePage)
    }
  }

  return (
    <div className="pagination">
      <div className="left-pagination">
        <button
          type="button"
          testid="pagination-left-button"
          className="left-button"
          onClick={onClickLeftButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow"
          />
        </button>
      </div>
      <p className="page-number">
        <span testid="active-page-number">{activePage}</span> of 4
      </p>
      <div className="left-pagination">
        <button
          type="button"
          testid="pagination-right-button"
          className="left-button"
          onClick={onClickRightButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow"
          />
        </button>
      </div>
    </div>
  )
}

export default Pagination
