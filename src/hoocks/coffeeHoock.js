import { useState } from "react"
import { useSelector } from "react-redux"
import ProductsList from "../components/products-list"
import Loader from "../components/loader/Loader"

export const useCoffee = (type) => {
    const [searchValue, setSearchValue] = useState('')
    const {isCoffeeLoading, coffeeError, coffee} = useSelector(state => state.coffee)

    const filteredCoffee = useSelector(state => {
        if(state.coffee.activeCoffeeFilter === 'all'){
            return state.coffee.coffee
        }
        
       return state.coffee.coffee.filter(item => state.coffee.activeCoffeeFilter === item.country)
    })

    const  searchCoffee = value => {
        if(!value.trim()) {
            return filteredCoffee
        }
        return filteredCoffee.filter(coffee => coffee.title.toLowerCase().includes(value.trim().toLowerCase()))
    }

    let currentItems;

    switch(type) {
        case 'search' :
            currentItems = searchCoffee(searchValue)
            break
        case 'partial' :
            const newCoffee = JSON.parse(JSON.stringify(coffee.slice(0, 3)))
            currentItems = newCoffee.map(item => {
                delete item.country
                return item
            })
            break
        default: 
        currentItems = coffee
    }

    const loader = isCoffeeLoading? <Loader /> : null
    const error = coffeeError? <h3 
                    style={{textAlign: 'right', color: 'black', }}
                        >Something went wrong</h3> : null
    
    let items = (loader || error) ? null : currentItems
    const viewItems = !items ? null 
                        : items.length === 0 
                        ? <h3 style={{textAlign: 'center', color: 'black', }}
                            >there is no coffee with this params</h3>
                        :<ProductsList items={ items }/>
    
    return {loader, error, viewItems, setSearchValue, searchValue}
}