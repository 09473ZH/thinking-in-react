export type Product = {
    category: string,
    price: string,
    stocked: boolean,
    name: string
}

export type FilterTableState =  {
    filterText: string
    inStockOnly: boolean
}

export type FilterableTableProps = {
    prods: Product[]
}

export type TableRowProps = {
    cat?: string
    prod?: Product
    key: string
}

export type ProductTableProps = {
    prods: Product[]
    filterText: string
    inStockOnly: boolean
}

export type SearchBarProps =  {
    filterText: string
    inStockOnly: boolean
    onFilterTextInput: (s: string) => void
    onInStockInput: (b: boolean) => void
}
