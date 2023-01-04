// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem, changeImage, isActive} = props
  const {imageUrl, imageAltText, thumbnailUrl, thumbnailAltText} = eachItem

  const onButtonClick = () => {
    changeImage(imageUrl, imageAltText)
  }

  const isActiveOrNot = isActive ? 'thumbnail' : ''

  return (
    <li className="thumbnail-list">
      <button
        type="button"
        className={`tumbnail-container ${isActiveOrNot}`}
        onClick={onButtonClick}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="t-img" />
      </button>
    </li>
  )
}

export default ThumbnailItem
