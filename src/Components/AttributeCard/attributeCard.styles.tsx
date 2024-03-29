import styled from 'styled-components'

export const CardContainer = styled.div`
  min-width: 140px;
  box-sizing: border-box;
`

export const CardTitle = styled.h2`
  text-align: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  font-family: 'Anta', sans-serif;
`

type TextProps = {
  selected?: boolean
}

export const Text = styled.div<TextProps>`
  /* background: ${(props) => (props.selected ? 'red' : 'white')}; */
  background: ${(props) => (props.selected ? '#6ab4fc' : 'white')};
  color: ${(props) => (props.selected ? 'white' : '#000')};
  font-size: 0.8em;
  padding: 0.25em 1em;
  text-align: center;
`
