// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CaseWithdrawal extends Component {
  state = {
    count: 2000,
  }

  onDecrement = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <div className="profile-card">
            <p className="profile">S</p>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="balance-rupee">
              <p className="money">{count}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="rupees">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="btn-container">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                denomination={each}
                onUpdateBalance={this.onDecrement}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CaseWithdrawal
