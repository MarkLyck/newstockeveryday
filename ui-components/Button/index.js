import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { darken } from 'polished'

const hollow = (props) => `
  background: none;
  border: 2px solid ${props.theme.colors.primary};
  color: ${props.theme.colors.primary};
`

const small = `
  padding: 8px 16px;
  font-size: 1rem;
`

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  font-size: 1.4rem;
  box-shadow: 0 0 0 0 rgba(34, 36, 38, 0.15) inset;
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  margin: 0 0.25em 0 0;
  padding: 0.78em 1.5em 0.78em;
  text-transform: none;
  text-shadow: none;
  font-weight: 700;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.3rem;
  ${props => props.hollow ? hollow(props) : ''}
  ${props => props.small ? small : ''}

  &:hover {
    background: ${props => darken(0.05, props.theme.colors.primary)};
    color: white;
  }
`

export default Button
