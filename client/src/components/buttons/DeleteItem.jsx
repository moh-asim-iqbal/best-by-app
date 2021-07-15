
import api from '../../api'
import './deleteItem.scss'
export default function DeleteItem (props) {
    const deleteItem = event => {
        event.preventDefault()
        
        if(window.confirm(`Do you want to delete the item ${props.id} permanently?`)) {
            const doIt = async () => {
                await api.deleteItemById(props.id).then(res => {
                    window.location.reload()
                })
            } 
            doIt()
        }
    }

    return <button className="delete-button" onClick={deleteItem}>Delete</button>
}