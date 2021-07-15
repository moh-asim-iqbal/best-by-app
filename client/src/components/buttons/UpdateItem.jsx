import './styles.scss'
export default function UpdateItem(props) {
    const updateItem = event => {
        event.preventDefault()
        window.location.href = `/items/update/${props.id}`
    }
    return (<button className="update-button" onClick={updateItem}>Update</button>)
}