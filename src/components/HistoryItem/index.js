import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteBrowserHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteBrowserHistory(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>

      <img src={logoUrl} alt="domain logo" className="domain-logo" />
      <p className="title">{title}</p>
      <p className="domain">{domainUrl}</p>

      <button
        className="delete-btn"
        data-testid="delete"
        type="button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
