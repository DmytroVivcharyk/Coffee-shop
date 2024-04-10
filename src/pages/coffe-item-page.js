import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Heder from '../components/header'
import Beams from '../components/beams'
import Footer from '../components/footer'

import bgImg from '../assets/img/bg-pics/ourCoffe-bg.png'
import itemImg from '../assets/img/bg-pics/product-item.png'



const StyledCoffeItemPage = styled.div`
    text-shadow: 0 4px 4px rgba(0, 0, 0, .4);
    color: #000;

    .container {
        width: 960px;
        margin: 0 auto;
    };

    & .title {
        color: #fff;
        height: 260px;
        padding-top: 15px;
        background: url(${bgImg})  0 0/ 100% no-repeat;

        h2 {
            font-size: 40px;
            line-height: 57px;
            margin: 50px auto;
            text-align: center;
        }
    }
    & .about-coffe-item {
        padding: 50px 0 25px;
    }
    & .about-coffe-item__inner {
        display: flex;
        margin: 0 -20px;

        & .about-coffe-item__picture {
            padding: 0 20px;
            flex: 0 0 355px;
        }

        & .about-coffe-item__text {
            flex: 1 1 auto;
            margin-top: 15px;
            
            h4 {
                text-align: center;
            }
            & .beams {
                display: flex;
                justify-content: center;
            }
            & .about-coffe-item__country{
                margin-top: 20px;
            }

            & p{
                margin-top: 20px;
            }

            .about-coffe-item__price {
                margin-top: 25px;
                font-size: 25px;
            }

            & span {
                font-weight: 600;
                font-size: 16px;
            }

        }
    }
`

const CoffeItemPage = () => {
    window.scrollTo(0, 0)
    const { id } = useParams()
    const singleCoffeeItem = useSelector( state => {
        return state.coffee.coffee.find(item => item.id == id)
    } )

    const { price, country } = singleCoffeeItem

    return (
        <StyledCoffeItemPage>
            <div className='title'>
                <div className='container'>
                    <Heder/>
                    <h2>Our Coffe</h2>
                </div>
            </div>

            <div className='about-coffe-item'>
                <div className='container'>
                    <div className='about-coffe-item__inner'>
                        <div className='about-coffe-item__picture'>
                            <img src={itemImg} alt="coffe"/>
                        </div>
                        <div className='about-coffe-item__text'>
                            <h4>About it</h4>
                            <div className='beams' >
                            <Beams color="black"/>
                            </div>
                            <div className='about-coffe-item__country'>
                                <span>Country: </span>
                                {country}
                            </div>
                            <p>
                                <span>Description: </span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className='about-coffe-item__price'>
                                <span>Price: </span>
                                {price}$
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </StyledCoffeItemPage>
    )
}

export default CoffeItemPage