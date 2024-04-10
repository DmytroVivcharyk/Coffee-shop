import styled from 'styled-components'

import Heder from './header'
import Beams from './beams'

const StyledFooter = styled.footer`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
`

const Footer = () => (
    <StyledFooter>
        <Heder as="div" color="black" />
        <Beams color="black" mg="15px" />
    </StyledFooter>
)

export default Footer