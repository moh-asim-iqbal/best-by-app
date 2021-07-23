import api from '../../api'
import { useState, useEffect, useMemo } from 'react'
import HomeTable from './HomeTable'
import {SUMMARYCOLUMNS} from '../columns/summaryColumns'
import './summaryBox.scss'

export default function SummaryBox() {
    const [data, setData] = useState([])
    const [doneLoading, setDoneLoading] = useState(false)
    const [goodThisWeek, setGoodThisWeek] = useState(false)
    const myColumns = useMemo( () => SUMMARYCOLUMNS, [])

    useEffect( () => {
        setDoneLoading(false)
        const fetchItems = async () => {
            await api.getAllItems().then(result => {
                const filteredResult = result.data.data.filter(item => {
                    
                    const createdTime = new Date(item.createdAt)
                    const expiredTime = new Date(item.expiry)
                    
            
                    let diffInTime = expiredTime.getTime() - createdTime.getTime()
                    let diffInDays = Math.ceil(diffInTime / (1000*3600*24))
                    return diffInDays < 8
                })
                console.log("---------")
                console.log(filteredResult)
                setData(filteredResult)
                console.log(data)
                if(!data){setGoodThisWeek(true)} //in case no items expirying this week

                setDoneLoading(true)
            }).catch(error => {
                console.log(error)
                setDoneLoading(true)
            })
            
            
        }
        fetchItems()
       // eslint-disable-next-line 
    },[])

    
    if(!data && doneLoading){
        console.log(data)
        return <div className="msg-box"><span>No Items Currently, Add Some!</span></div>
    }
    else if(goodThisWeek && doneLoading) {
        return <div className="msg-box"><span>No Items Expirying This Week!</span></div>
    }
    else if (doneLoading) {
        return <HomeTable className="home-table" data={data} columns={myColumns} />
    }
    else {
        return <div className="msg-box">Loading...</div>}
}