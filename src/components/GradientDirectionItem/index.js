// Write your code here
import {ListElements, ButtonElement} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionItem, changeDirection, isActive} = props
  const {displayText, value, directionId} = directionItem

  const onClickChangeDirection = () => {
    changeDirection(value, directionId)
  }

  return (
    <ListElements>
      <ButtonElement
        isActive={isActive}
        type="button"
        value={value}
        onClick={onClickChangeDirection}
      >
        {displayText}
      </ButtonElement>
    </ListElements>
  )
}
export default GradientDirectionItem
