import * as React from 'react'
import {TableRowProps} from '../../types'

export class CategoryRow extends React.Component<TableRowProps, {}> {
    render() {
        return <tr><td colSpan={2}>{this.props.cat}</td></tr>
    }
}
