import * as React from 'react'
import { Product, ProductTableProps, TableRowProps } from '../types'
import { CategoryRow } from './CategoryRow'
import { ProductRow } from './ProductRow'

export function ProductTable(props: ProductTableProps) {
    let rows: React.ReactElement<TableRowProps>[] = []
    let lastCategory = ''
    const filterText = props.filterText
    const inStockOnly = props.inStockOnly
    props.prods.forEach( (prod: Product) => {
        if (prod.name.indexOf(filterText) === -1) {
            return
        }
        if (inStockOnly && !prod.stocked) {
            return
        }
        if (prod.category !== lastCategory) {
            rows.push(<CategoryRow cat={prod.category} key={prod.category} />)
        }
        rows.push(<ProductRow prod={prod} key={prod.name}/>)
        lastCategory = prod.category
    })
    return (
        <table>
            <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}
