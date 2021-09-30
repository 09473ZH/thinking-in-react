import * as React from 'react'
import {
    FilterableTableProps,
    FilterTableState,
} from '../types'
import { SearchBar } from '../SearchBar'
import { ProductTable } from '../ProductTable'


export class FilterableTable extends React.Component<FilterableTableProps, FilterTableState > {
    constructor(props: FilterableTableProps){
        super(props)
        this.state = {
            filterText: "",
            inStockOnly: false
        }
        this.handleFilterTextInput =
            this.handleFilterTextInput.bind(this)
        this.handleInStockInput =
            this.handleInStockInput.bind(this)
    }
    handleFilterTextInput(filterText: string) {
        console.log("handleFilterTextInput " + filterText)
        this.setState({
            filterText: filterText
        })
    }
    handleInStockInput(inStockOnly: boolean) {
        console.log("handleInStockInput " + inStockOnly)
        this.setState({
            inStockOnly: inStockOnly
        })
    }
    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInput={this.handleFilterTextInput}
                    onInStockInput={this.handleInStockInput}
                />
                <ProductTable
                    prods={this.props.prods}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}/>
            </div>
        )
    }
}
