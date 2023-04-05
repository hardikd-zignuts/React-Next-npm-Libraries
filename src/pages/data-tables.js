import React from 'react'
import DataTable from 'react-data-table-component'

const ReactDataTables = ({ productDetails }) => {
    const columns = [
        {
            name: "img",
            selector: (row) => <img src={row.thumbnail} className='products_img' alt="thumbnil" />
        },
        {
            name: "title",
            selector: (row) => row.title
        },
        {
            name: "category",
            selector: (row) => row.category
        },
        {
            name: "brand",
            selector: (row) => row.brand
        },
        {
            name: "rating",
            selector: (row) => row.rating
        },
        {
            name: "price",
            selector: (row) => row.price
        },
        {
            name: "discountPercentage",
            selector: (row) => row.discountPercentage
        },
        {
            name: "action",
            cell: row => (
                <button onClick={() => handleViewPage(row.id)}>viewpage</button>
            )
        }
    ]
    return (
        <>
            <h1> React Data Tables</h1>
            <DataTable paginationRowsPerPageOptions={[8, 10]} columns={columns} data={productDetails} pagination />
        </ >
    )
}

export default ReactDataTables

export async function getServerSideProps() {

    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()


    return {
        props: {
            productDetails: data.products
        }
    }
}