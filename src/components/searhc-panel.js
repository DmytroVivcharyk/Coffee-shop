import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { changeActiveCoffeeFilter } from '../store/slices/coffeeSlice.js'

const StyledSearchPanel = styled.div`

    max-width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    color: #000;
    margin-bottom: 50px;
    align-items: center;

    span {
        margin-right: 25px;
    }

    input {
        width: 180px;
        font-size: 16;
        padding: 8px 12px;
        border: none;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, .45);
        outline: none;
        border-radius: 5px;
    }

    button {
        background: #FFF;
        font-family: Merienda;
        font-size: 16;
        padding: 8px 12px;
        border: none;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, .35);
        margin-right: 7px;
        transition: all 0.2s linear;
        cursor: pointer;
    }

    & .buttons {
        display: inline-block;
    }

    & .buttons button:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        margin-right: 0;
    }

    & .buttons button:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    & .buttons button:hover {
        background-color: rgba(0, 0, 0, .45);
        transform: scale(1.2);
    }

    .active {
        color: #FFF;
        background: #000;
    }

    input::placeholder {
        text-align: center;
        font-family: Merienda;
    }
`

const filters = ['all','Brazil', 'Kenya', 'Columbia']

const SearchPanel = ({onInputChange, inputValue}) => {
    const activefilter = useSelector(state => state.coffee.activeCoffeeFilter)
    const dispatch = useDispatch()

    const renderFilters = () => {
        return filters.map(filter => {
            const isActive = activefilter === filter
            
            return <button 
                    key={filter}
                    className={ isActive ? 'active': null }
                    onClick={() => dispatch(changeActiveCoffeeFilter(filter))}
                    >{filter}</button>
        })
    }

    const myFilters = useMemo(() => renderFilters(), [activefilter])

    return (
        <StyledSearchPanel>
            <div className='searchPanel__input'>
                <span>Lookiing for</span>
                <input 
                    type="text" 
                    placeholder="start typing here..." 
                    value={inputValue}
                    onChange={onInputChange}
                />
            </div>
            <div className='searchPanel__selectors'>
                <span>Or filter</span>
                <div className='buttons'>
                    {myFilters}
                </div>
            </div>
        </StyledSearchPanel>
    )
}

export default SearchPanel