import * as React from 'react'
import { useState } from 'react'
import {
    FilterableTableProps,
} from '../types'
import { SearchBar } from '../SearchBar'
import { ProductTable } from '../ProductTable'


export function FilterableTable(props: FilterableTableProps) {
    const [state, setState] = useState({
        filterText: "",
        inStockOnly: false
    })
    function handleFilterTextInput(filterText: string) {
        console.log("handleFilterTextInput " + filterText)
        setState({
            ...state,
            filterText: filterText
        })
    }
    function handleInStockInput(inStockOnly: boolean) {
        console.log("handleInStockInput " + inStockOnly)
        setState({
            ...state,
            inStockOnly: inStockOnly
        })
    }
    return (
        <div>
            <SearchBar
                filterText={state.filterText}
                inStockOnly={state.inStockOnly}
                onFilterTextInput={handleFilterTextInput}
                onInStockInput={handleInStockInput}
            />
            <ProductTable
                prods={props.prods}
                filterText={state.filterText}
                inStockOnly={state.inStockOnly}/>
        </div>
    )
}
