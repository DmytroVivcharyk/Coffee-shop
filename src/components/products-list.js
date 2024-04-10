import styled from 'styled-components'

import ProductItem from './product-item'

const StyledProductsList = styled.div`
    max-width: calc(1440px - 640px);
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`

const ProductsList = ({ items }) => {

    const cards = items.map(card => {
        return <ProductItem  key={card.id} {...card}/>
    })

    return (
        <StyledProductsList className='product__items-list' >
            {cards}
        </StyledProductsList>
    )
}

export default ProductsList