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