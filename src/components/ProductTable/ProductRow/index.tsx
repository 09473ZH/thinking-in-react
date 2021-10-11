import * as React from 'react'
import { TableRowProps } from '../../types'

export function ProductRow(props: TableRowProps) {
    let product = props.prod!
    let name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
        {product.name}
      </span>
    return (
        <tr>
            <td>{name}</td>
            <td>{props.prod!.price}</td>
        </tr>
    )
}
