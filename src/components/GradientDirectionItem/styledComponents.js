// Style your elements here
import styled from 'styled-components'

export const ListElements = styled.li`
  color: white;
  margin: 10px;
  padding: 0px;
  size: 32px;
`
export const ButtonElement = styled.button`
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  padding: 8px 10px 8px 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`
