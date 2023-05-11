import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expensesAmount} = props

  const balance = incomeAmount - expensesAmount

  return (
    <div className="money-container">
      <div className="balance-container">
        <div>
          <img
            className="img-amount"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div>
          <p className="balance-para">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income-container">
        <div>
          <img
            className="img-amount"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
            alt="income"
          />
        </div>
        <div>
          <p className="balance-para">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expense-container">
        <div>
          <img
            className="img-amount"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
            alt="expenses"
          />
        </div>
        <div>
          <p className="balance-para">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
