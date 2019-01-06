import styled from '@emotion/styled'

const Price = styled.p`
  color: ${props => props.color ? props.color : props.theme.colors.black};
  font-size: 48px;
  font-weight: bold;

  &::after {
    content: '/wk';
    color: ${props => props.color ? props.color : props.theme.colors.black};
    font-size: 16px;
  }
`

export default Price
