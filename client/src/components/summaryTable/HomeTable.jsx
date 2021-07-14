
import {useTable} from 'react-table'



export default function HomeTable({data, columns}) {
    
    console.log(data)
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        
    } = useTable({ columns, data})
    
    
    return (
        <div>
          
            <table {...getTableProps()} className="table">
                <thead>
                    {headerGroups.map( headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map( column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    { rows.map( row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map( cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}

                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
        
    )
}