// Write your code here.
import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  render() {
    const {imagesData, isActive, setActiveThumbnailId} = this.props
    const {id, thumbnailUrl, thumbnailAltText} = imagesData
    const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

    const onClickThumbnail = () => {
      setActiveThumbnailId(id)
    }

    return (
      <li className="thumbnail-img-container">
        <button
          type="button"
          className="thumbnail-button"
          onClick={onClickThumbnail}
        >
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className={thumbnailClassName}
          />
        </button>
      </li>
    )
  }
}
export default ThumbnailItem
