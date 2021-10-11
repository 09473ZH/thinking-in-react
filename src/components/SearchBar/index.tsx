import * as React from 'react'
import { SearchBarProps } from '../types'

export function SearchBar(props: SearchBarProps) {
    function  handleFilterTextInputChange(e: any) {
        props.onFilterTextInput(e.target.value)
    }
    function handleInStockInputChange(e: any) {
        props.onInStockInput(e.target.checked)
    }
    return (
        <form>
            <input
                type="text"
                placeholder="Search ..."
                value={props.filterText}
                onChange={handleFilterTextInputChange}
            />
            <p>
                <input
                    type="checkbox"
                    checked={props.inStockOnly}
                    onChange={handleInStockInputChange}
                />
                {' '}
                Only show products in stock
            </p>
        </form>
    )
}
