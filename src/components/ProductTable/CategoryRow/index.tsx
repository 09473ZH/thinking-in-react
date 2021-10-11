import * as React from 'react'
import {TableRowProps} from '../../types'

export function CategoryRow(props: TableRowProps){
    return (
        <tr><td colSpan={2}>{props.cat}</td></tr>
    )
}
