import styled from '@emotion/styled'

export const Left = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5em 24px;
`
export const Right = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: -1px 0 0 0 #333 !important;
    padding: 5em 24px;
`

const BlackSection = styled.div`
    display: flex;
    background: ${props => props.theme.colors.darkGray};
    color: white;
`

export default BlackSection
