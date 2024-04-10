import { useEffect } from 'react'
import styled from 'styled-components'

import { useCoffee } from '../hoocks/coffeeHoock'

import Footer from '../components/footer'
import Heder from '../components/header'
import SearchPanel from '../components/searhc-panel'

import Beams from '../components/beams'
import coffeBg from '../assets/img/bg-pics/ourCoffe-bg.png'
import coffeAbout from '../assets/img/bg-pics/about.png'


const StyledCoffePage = styled.div`

    text-shadow: 0 4px 4px rgba(0, 0, 0, .4);
    color: #FFF;

    .container {
        width: 1180px;
        margin: 0 auto;
    };

    & .title {
        height: 260px;
        padding-top: 15px;
        background: url(${coffeBg})  0 0/ 100% no-repeat;

        h2 {
            font-size: 40px;
            line-height: 57px;
            margin: 50px auto;
            text-align: center;
        }
    }

    & .aboutProduct{
        color: #000;
        padding: 50px 0 0;

        & .container-product {
            max-width: 50%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
        }
        & img {
            margin-top: 0;
            object-fit: fill;
        }

        & .aboutProduct__text {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 5px 0;

            p {
                text-align: center;
                max-width: 370px;
                font-size: 14px;
                line-height: 35px;
            }
        }

        & .underline{
            width: 240px;
            border-bottom: 2px solid #000;
            margin: 50px auto 30px;
        }
    }

    .our-products {
        padding: 50px;
    }
`

const CoffePage = () => {
    const {loader, error, viewItems, setSearchValue, searchValue} = useCoffee('search')
        
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <StyledCoffePage>
            <div className='title'>
                <div className='container'>
                    <Heder/>
                    <h2>Our Coffe</h2>
                </div>
            </div>
            
            <div className='aboutProduct'>
                <div className='container-product'>
                    <div className='aboutProduct__img'>
                        <img src={coffeAbout} />
                    </div>
                    <div className='aboutProduct__text'>
                        <h4>About our beans</h4>
                        <Beams color="black" />
                        <p>
                        Extremity sweetness difficult behaviour he of. 
                        On disposal of as landlord horrible. 
                        Afraid at highly months do things on at. 
                        Situation recommend objection do intention so questions.
                        As greatly removed calling pleased improve an. 
                        Last ask him cold feel met spot shy want. 
                        Children me laughing we prospect answered followed. 
                        At it went is song that held help face.
                        </p>

                    </div>
                </div>
                <div className='underline'></div>
            </div>

            <SearchPanel 
                onInputChange={onInputChange}
                inputValue={searchValue}
                />
            
            <div className='our-products'>
                <div className='container'>
                    {loader}
                    {error}
                    {viewItems}
                </div>
            </div>

            <Footer/>

        </StyledCoffePage>
    )
}

export default CoffePage