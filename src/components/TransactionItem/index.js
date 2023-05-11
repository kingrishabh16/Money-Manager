import './index.css'

const TransactionItem = props => {
  const {transactionDetail, deleteTransaction} = props

  const {id, title, amount, type} = transactionDetail

  const onDeleteHistory = () => {
    deleteTransaction(id)
  }

  return (
    <li>
      <div className="each-history-cont">
        <p className="para">{title}</p>
        <p className="para">{amount}</p>
        <p className="para">{type}</p>
        <button
          type="button"
          className="button"
          data-testid="delete"
          onClick={onDeleteHistory}
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
