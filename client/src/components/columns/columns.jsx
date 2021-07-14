  
import { format } from 'date-fns'
import DeleteItem from '../buttons/DeleteItem'
import UpdateItem from '../buttons/UpdateItem'

export const COLUMNS = [
    // {
    //     Header: 'ID',
    //     accessor: '_id',
    //     filterable: true,
    // },
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
    {
        Header: '',
        accessor: 'delete',
        Cell: function(props) {
            return (
                <span>
                    <DeleteItem id={props.cell.row.original._id} />
                </span>
            )
        }
    },
    {
        Header: '',
        accessor: 'update',
        Cell: function(props) {
            return (
                <span>
                    <UpdateItem id={props.cell.row.original._id} />
                </span>
            )
        }
    }
]