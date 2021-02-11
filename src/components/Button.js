import styled from 'styled-components/macro'
import {css} from 'styled-components'

export const Button = styled.button`
  border-radius: 50px;
  ${props => props.primary && css`
    background: aquamarine;
    color: #282c34;
    `}
  ${props => props.secondary && css`
    background: pink;
    color: #282c34;
    `}
`