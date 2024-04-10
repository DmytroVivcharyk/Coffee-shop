import styled from 'styled-components'

import whiteBeams from '../assets/img/beams/white.png'
import blackBeams from '../assets/img/beams/black.png'

const StyledBeams = styled.div`
    background: url(${({color}) => color ? blackBeams : whiteBeams}) no-repeat;
    position: relative;
    width: 34px;
    height: 34px;
    margin-top: ${({mg}) => mg ? mg : 0};

    &::before {
            content: "";
            width: 60px;
            border-bottom: 2px solid #FFF;
            border-color: ${({color}) => color ? color : '#fff'};
            box-shadow:  0 4px 4px rgba(0, 0, 0, .6);
            position: absolute;
            top: calc(50% - 1px);
            left: -70px
    }

    &::after {
            content: "";
            width: 60px;
            border-bottom: 2px solid #FFF;
            border-color: ${({color}) => color ? color : '#fff'};
            box-shadow:  0 4px 4px rgba(0, 0, 0, .6);
            position: absolute;
            top: calc(50% - 1px);
            right: -71px
    }
`

const Beams = (props) => (
    <StyledBeams {...props} className='beamsElement'></StyledBeams>
)

export default Beams