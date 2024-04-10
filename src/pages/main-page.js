import styled from 'styled-components'

import { useCoffee } from '../hoocks/coffeeHoock'
import Heder from '../components/header'
import Beams from '../components/beams'
import Footer from '../components/footer'

import titleBg from '../assets/img/bg-pics/mainbg.png'
import productsBg from '../assets/img/bg-pics/paper-1074131_1920.png'

const StyledMainPage = styled.div`
    .container {
        width: 1180px;
        margin: 0 auto;
    };

    .about__content {
        display: flex;
        flex-direction: column;
        align-items: center;

        h4 {
            margin: 50px 0 20px;
            font-size: 24px;
            line-height: 34.66px;

        }

        p {
            max-width: 590px;
            text-align: center;
        }

        .about__text {
            margin: 30px 0 50px;
        }
    }

    .product{
        height: 495px;
        padding: 50px 0;
        background: url(${productsBg}) 0 0 / 100% no-repeat;
        object-fit: contain;

        h4 {
            margin: 0 auto;
            text-align: center;
            font-size: 24px;
            line-height: 34.66px;
            margin-bottom: 45px;

        };
    }
`

const StyledPageIntro = styled.div`
    height: 505px;
    padding-top: 15px;
    background: url(${titleBg}) 50%  0/100% 520px no-repeat;
    text-shadow: 0 4px 4px rgba(0, 0, 0, .4);

    & .introMain {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #FFF;
        text-shadow: 0 4px 4px rgba(0, 0, 0, .4);
    }

    h3 {
        font-size: 24px;
        margin-bottom: 0;

    }

    & button {
        margin-top: 30px;
        background-color: transparent;
        font-size: 14px;
        color: #FFF;
        text-shadow: 0 4px 4px rgba(0, 0, 0, .2);
        font-family: Merienda;
        padding: 5px 25px;
        border: 1px solid #FFF;
        border-radius: 5px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .1);
        transition: background .2s linear;
        cursor: pointer;

    }

    & button:hover {
        background: rgba(0, 0, 0, .4);
    }
`

const MainPge = () => {
    window.scrollTo(0, 0)
    const {loader, error, viewItems} = useCoffee('partial')

    return (
        <StyledMainPage className='mainPage'>
            <StyledPageIntro className="page-intro">
                <div className='container'>
                    <Heder/>

                    <div className='introMain'>
                        <h1>Everything You Love About Coffee</h1>
                        <Beams />
                        <h3>We makes every day full of energy and taste</h3>
                        <h3>Want to try our beans?</h3>
                        <button>More</button>
                    </div>
                </div>
            </StyledPageIntro>

            <div className='about'>
                <div className='container'>
                    <div className='about__content'>
                        <h4>About Us</h4>
                        <Beams color="black" />
                        <div className='about__text'>
                            <p>
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </p>
                            <p>    
                                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                horrible but confined day end marriage. Eagerness furniture set preserved far
                                recommend. Did even but nor are most gave hope. Secure active living depend son
                                repair day ladies now.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='product'>
                <div className='container'>
                    <h4>Our best</h4>
                    {loader}
                    {error}
                    {viewItems} 
                </div>
            </div>

            <Footer/>
        </StyledMainPage>
    )
}

export default MainPge