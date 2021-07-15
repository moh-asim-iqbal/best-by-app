import React, { useState, useEffect, useMemo} from 'react'
import api from '../api'
import {COLUMNS} from '../components/columns/columns'
import Table from '../components/tableContainer/TableContainer'

export default function ItemsList() {
    const [items, setItems] = useState([])
    const [doneLoading, setDoneLoading] = useState(false)
    const myColumns = useMemo( () => COLUMNS, [])
    
    useEffect(() => {
        setDoneLoading(false)
        const fetchData = async () => {
          await api.getAllItems()
            .then( result => {
                setItems(result.data.data)
                setDoneLoading(true)})
            .catch(error => {
                console.log(error)
                setDoneLoading(true)
            })
          
        }
     
        fetchData()
      }, [])

    
    if(!items.length && doneLoading){
       
        return <div className="msg-box"><span>No Items Currently, Add Some!</span></div>
    }
    else if (doneLoading) {
        return <Table columns={myColumns} data={items} />
    }
    else {
        return <div className="msg-box">Loading...</div>}

   
}