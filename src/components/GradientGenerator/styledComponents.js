// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ListContainer = styled.ul`
  display: flex;
  list-style-type: none;
`

export const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SubmitButton = styled.button`
  padding: 8px 10px 8px 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: blue;
`
export const ColorElement1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`
export const ColorInputContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
export const TextElement = styled.p`
  color: white;
  font-size: 14px;
`
export const HeadingElement = styled.h1`
  color: white;
`
export const InputElement = styled.input`
  width: 120px;
  height: 50px;
`
