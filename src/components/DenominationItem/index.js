// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, onUpdateBalance} = props
  const {value} = denomination
  const onUpdate = () => {
    onUpdateBalance(value)
  }
  return (
    <li className="list">
      <button className="button" type="button" onClick={onUpdate}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
