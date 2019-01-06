import styled from '@emotion/styled'
export { default as Title } from './Title'
export { default as Subtitle } from './Subtitle'

const Section = styled.div`
box-sizing: border-box;
display: block;
padding: 8em 64px;
width: 100%;
max-width: 1000px;
margin: 0 auto;

p {
    margin-bottom: 16px;
}
`

export default Section
