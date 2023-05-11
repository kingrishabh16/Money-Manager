import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    type: 'Income',
    transactionList: [],
    incomeAmount: 0,
    expensesAmount: 0,
  }

  deleteTransaction = id => {
    const {transactionList} = this.state

    this.setState({
      transactionList: transactionList.filter(
        eachTransaction => eachTransaction.id !== id,
      ),
    })
  }

  renderHistoryList = () => {
    const {transactionList} = this.state

    return transactionList.map(eachTransaction => (
      <TransactionItem
        key={eachTransaction.id}
        transactionDetail={eachTransaction}
        deleteTransaction={this.deleteTransaction}
      />
    ))
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, type} = this.state

    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: Number(amountInput),
      type,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      type: 'Income',
    }))
    if (type === 'Income') {
      this.setState(prevState => ({
        incomeAmount: Number(prevState.incomeAmount) + Number(amountInput),
      }))
    } else {
      this.setState(prevState => ({
        expensesAmount: Number(prevState.expensesAmount) + Number(amountInput),
      }))
    }
  }

  render() {
    const {
      titleInput,
      amountInput,
      type,
      incomeAmount,
      expensesAmount,
    } = this.state
    return (
      <div className="moneyManager-container">
        <div className="moneyManager-header">
          <h1 className="header-heading">Hi,Richard</h1>
          <p className="header-para">Welcome back to your Money Manager</p>
        </div>
        <div>
          <MoneyDetails
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </div>
        <div className="transaction-container">
          <div className="AddTransactionContainer">
            <h1 className="transaction-heading">Add Transaction</h1>
            <form className="form" onSubmit={this.onAddTransaction}>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                value={titleInput}
                onChange={this.onChangeTitleInput}
                className="input"
                placeholder="TITLE"
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                value={amountInput}
                onChange={this.onChangeAmountInput}
                className="input"
                placeholder="AMOUNT"
              />
              <label htmlFor="type" className="label">
                TYPE
              </label>
              <select id="type" value={type} onChange={this.onChangeType}>
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <ul>
              <li>
                <div className="table-header-cont">
                  <p className="table-header">Title</p>
                  <p className="table-header">Amount</p>
                  <p className="table-header">Type</p>
                </div>
              </li>
              {this.renderHistoryList()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
