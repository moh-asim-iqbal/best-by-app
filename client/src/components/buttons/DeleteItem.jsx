
import api from '../../api'
import './styles.scss'
export default function DeleteItem (props) {
    const deleteItem = event => {
        event.preventDefault()
        
        const remove = async () => {
            await api.deleteItemById(props.id).then(res => {
                window.location.reload()
            })
        } 
        remove()
        
    }

    return <button className="delete-button" onClick={deleteItem}>Delete</button>
}