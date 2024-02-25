import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0;
  background-color: gray;
`

export const AttributesContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  gap: 10px;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  border: 1px solid red;
  background-color: white;
`
