  
import { format } from 'date-fns'

export const SUMMARYCOLUMNS = [
 
    {
        Header: 'Name',
        accessor: 'name',
        filterable: true,
    },
    {
        Header: 'Expiry',
        accessor: 'expiry',
        Cell:   ({ value }) => {
            return format(new Date(value), 'dd/MM/yyyy')}
    },
    {
        Header: 'Quantity',
        accessor: 'quantity',
        filterable: true,
    },
    {
        Header: 'Days Left',
        filertable: true,
        Cell: function(props){
            
            const createdTime = new Date(props.cell.row.original.createdAt)
            const expiredTime = new Date(props.cell.row.original.expiry)

            let diffInTime = expiredTime.getTime() - createdTime.getTime()
            let diffInDays = Math.ceil(diffInTime / (1000*3600*24))
            return (
                <span>
                    {diffInDays}
                </span>
            )
        }
    },
   
]