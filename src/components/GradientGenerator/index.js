import {Component} from 'react'
import {
  MainContainer,
  ListContainer,
  SubmitForm,
  SubmitButton,
  ColorElement1,
  ColorInputContainer,
  TextElement,
  HeadingElement,
  InputElement,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    color1Input: '#8ae323',
    color2Input: '#014f7b',
    directionInput: gradientDirectionsList[0].value,
    activeId: gradientDirectionsList[0].directionId,
  }

  changeDirection = (value, directionId) => {
    this.setState({direction: value, activeId: directionId})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {direction, color1, color2} = this.state

    this.setState({
      directionInput: direction,
      color1Input: color1,
      color2Input: color2,
    })
  }

  changeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  changeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  changeActiveId = directionId => {
    this.setState({activeId: directionId})
  }

  render() {
    const {
      color1,
      color2,
      color1Input,
      color2Input,
      directionInput,
      activeId,
    } = this.state
    return (
      <MainContainer
        direction={directionInput}
        color1={color1Input}
        color2={color2Input}
        data-testid="gradientGenerator"
      >
        <SubmitForm onSubmit={this.onSubmitForm}>
          <HeadingElement>Generate a CSS Color Gradient</HeadingElement>
          {console.log(activeId)}
          <TextElement>Choose Direction</TextElement>
          <ListContainer>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                directionItem={each}
                key={each.directionId}
                changeDirection={this.changeDirection}
                isActive={each.directionId === activeId}
              />
            ))}
          </ListContainer>
          <TextElement>Pick the Colors</TextElement>
          <ColorInputContainer>
            <ColorElement1>
              <TextElement htmlFor="color1">{color1Input}</TextElement>
              <InputElement
                id="color1"
                type="color"
                value={color1}
                onChange={this.changeColor1}
              />
            </ColorElement1>
            <ColorElement1>
              <TextElement htmlFor="color2">{color2Input}</TextElement>
              <InputElement
                id="color2"
                type="color"
                value={color2}
                onChange={this.changeColor2}
              />
            </ColorElement1>
          </ColorInputContainer>
          <SubmitButton type="submit">Generate</SubmitButton>
        </SubmitForm>
      </MainContainer>
    )
  }
}
export default GradientGenerator
