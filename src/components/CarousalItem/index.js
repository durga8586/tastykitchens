import './index.css'

const CarousalItem = props => {
  const {carousal} = props

  return (
    <div className="carousal-container">
      <img src={carousal.imageUrl} alt="offer" className="carousal" />
    </div>
  )
}

export default CarousalItem
