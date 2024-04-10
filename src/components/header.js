import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'

import whiteLogo from '../assets/img/logo/coffee-beans.png'
import blackLogo from '../assets/img/logo/blackLogoBems.png'


const StyledHeader = styled.header`
    display: flex;
    color: ${({color}) => color ? color : '#fff'};
    text-shadow: 0 4px 4px rgba(0, 0, 0, .4);

    a {
        color: ${({color}) => color ? color : '#fff'};
        text-decoration: none;
        padding-bottom: 3px;
        cursor: pointer;
    }

    & .header__logo {
        padding: 20px 30px 0;
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;
        background: url(${({color}) => color === 'black' ? blackLogo : whiteLogo}) no-repeat;

    }

    & .header__nav {
        padding: 20px 30px 0;

        ul {
            padding: 0;
            margin: 0;
            list-style: none;
            display: flex;

            li {
                margin-right: 40px;
            }

            li:last-child {
                margin-right: 0;
            }

            a:hover {
                border-bottom: 2px solid #fff;
                border-color: ${({color}) => color ? color : '#fff'};
            }


        }
    }
`

const Heder = ({color}) =>  (
        <StyledHeader color={color}>
            <div className='header__logo'>
                <Link  to='/'> Coffee house </Link>
            </div>
            <nav className='header__nav'>
                <ul>
                    <li><NavLink  to='/coffe'>Our coffee</NavLink></li>
                    <li><NavLink  to='/pleasure' >For your pleasure</NavLink></li>
                </ul>
            </nav>
        </StyledHeader>
    )

export default Heder