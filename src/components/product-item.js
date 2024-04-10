import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


const StyledProductItem = styled.div`
     
    flex: 0 1 27.5%;
    padding: 25px;
    background:  rgba(254, 254, 254, .65);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.2s linear;
    cursor: pointer;
    margin-bottom: 30px;
    margin-right: 8.75%;

    ${props => props.white && `
        background: #fff;
        color: #000;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
    `}

    &:nth-child(3n) {
        margin-right: 0;
    }

    h6 {
        margin: 10px 0 15px;
        flex-grow: 1;
    }

    span{
        align-self: flex-end;
        margin-bottom: 10px;
    }

    span:last-child {
        margin-bottom: 0;
    }

    &:hover {
        background:  #fff;
        transform: translateY(-35px);
    }

    .proproduct-item-wite {
        background: red;
    }

`

const ProductItem = ({url, title, price, country, id}) => {
    let location = null
    let white = null
    const navigate = useNavigate()

    if (country) {
        location = <span>{ country }</span> 
        white = 'white'
    }

    return (
        <StyledProductItem  
            white={white} 
            className='product-item product-item-wite'
            onClick={() => navigate(`/coffe/${id}`)}
            >
            <img src={ url } />
            <h6>{ title }</h6>
            {location}
            <span>{ String(price) }$</span>  
        </StyledProductItem>
    )
}

export default ProductItem