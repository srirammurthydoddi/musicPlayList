import './index.css'

const SongItem = props => {
  const {songDetails, onDeleteSongItem} = props
  const {name, imageUrl, genre, duration, id} = songDetails

  const onDeleteSong = () => {
    onDeleteSongItem(id)
  }

  return (
    <li className="song-item">
      <div className="song-details">
        <img className="song-image" src={imageUrl} alt="track" />
        <div className="song-type-container">
          <p className="song-name">{name}</p>
          <p className="type">{genre}</p>
        </div>
      </div>
      <div className="duration-and-delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteSong}
          id="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="browser-delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default SongItem
