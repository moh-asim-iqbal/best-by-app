
// import { useState, useEffect } from 'react'
// import api from '../api'
// import ReactTable from 'react-table'
// function ItemsList() {
//     const [myItems, setItems] = useState([])
    
//     const [isLoading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     const fetchData = async () => {
    //       const result = await api.getAllItems()
    //       console.log("I RAN")
    //       setItems(result.data.data)
    //       setLoading(false)
    //       console.log(items)
    //     }
     
    //     fetchData()
    //   }, [])

//     const myColumns = [
//         {
//             Header: 'ID',
//             accessor: '_id',
//             filterable: true,
//         },
//         {
//             Header: 'Name',
//             accessor: 'name',
//             filterable: true,
//         },
//         {
//             Header: 'Expiry',
//             accessor: 'expiry',
//             filterable: true,
//         },
        
//     ]

//     let showTable = true
//     if (!items.length) {
//         showTable = false
//     }
//     return (
//         <div className="itemslist">
           
//         </div>
//     )
// }

// export default ItemsList

import React, { useState, useEffect, useMemo} from 'react'
import api from '../api'
import {COLUMNS} from '../components/columns/columns'
import Table from '../components/tableContainer/TableContainer'

export default function ItemsList() {
    const [items, setItems] = useState([])
    const myColumns = useMemo( () => COLUMNS, [])
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await api.getAllItems()
          setItems(result.data.data)
        }
     
        fetchData()
      }, [])

    let showTable = true
        if (!items.length) {
            showTable = false
        }

    return (
        <div>
            {showTable && (
                <Table columns={myColumns} data={items} />
            )}
        </div>
    )
}