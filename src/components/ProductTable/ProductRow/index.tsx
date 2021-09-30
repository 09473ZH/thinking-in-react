import * as React from 'react'
import { TableRowProps } from '../../types'

export class ProductRow extends React.Component<TableRowProps, {}> {
    render() {
        let product = this.props.prod!
        let name = product.stocked ?
            product.name :
            <span style={{color: 'red'}}>
        {product.name}
      </span>
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.prod!.price}</td>
            </tr>
        )
    }
}
