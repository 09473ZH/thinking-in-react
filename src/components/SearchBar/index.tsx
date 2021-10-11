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

// export class SearchBar extends React.Component<SearchBarProps, {}> {
//     constructor(props: SearchBarProps){
//         super(props)
//         this.handleFilterTextInputChange =
//             this.handleFilterTextInputChange.bind(this)
//         this.handleInStockInputChange =
//             this.handleInStockInputChange.bind(this)
//     }
//     handleFilterTextInputChange(e: any) {
//         this.props.onFilterTextInput(e.target.value)
//     }
//     handleInStockInputChange(e: any) {
//         this.props.onInStockInput(e.target.checked)
//     }
//     render() {
//         return (
//             <form>
//                 <input
//                     type="text"
//                     placeholder="Search ..."
//                     value={this.props.filterText}
//                     onChange={this.handleFilterTextInputChange}
//                 />
//                 <p>
//                     <input
//                         type="checkbox"
//                         checked={this.props.inStockOnly}
//                         onChange={this.handleInStockInputChange}
//                     />
//                     {' '}
//                     Only show products in stock
//                 </p>
//             </form>
//         )
//     }
// }
